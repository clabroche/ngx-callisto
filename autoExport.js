const fse = require('fs-extra')
const _ = require('lodash');
const path = require('path');
const Promise = require('bluebird');
readdirDeep(path.resolve('.', 'src', 'modules'))
    .then(ts=>{
        const result = []
        ts.map(_path=>{
            const modules = searchExport(_path)
            _path = _path.split(path.resolve('.', 'src')).join('.')
            _path = _path.split(path.extname(_path)).join('')

            result.push(`export ${modules} from '${_path}'`)
        })
        fse.writeFileSync(path.resolve('src', 'public_api.ts'), result.join('\n'), 'utf-8')
    })
    

function searchExport(_path) {
    const module = fse.readFileSync(_path, 'utf-8')
    const modules = []
    const regex = /export[ ]*(class|interface)[ ]*([a-zA-Z-]*) /g;
    let m;
    while ((m = regex.exec(module)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if (groupIndex == 2 ){
                modules.push(match)
            }
        });
    }
    return `{ ${modules.join(', ')} }`
}
function readdirDeep(_path) {
    return fse
        .readdir(_path)
        .then(data => {
            return Promise.map(data, file => {
                const pathFile = path.resolve(_path, file);
                if (fse.lstatSync(pathFile).isDirectory()) {
                    return readdirDeep(pathFile);
                } else if (path.extname(pathFile) === ".ts" && !pathFile.includes('sandbox') && !pathFile.includes('spec')){
                    console.log('Found: '+ pathFile)
                    return pathFile;
                }
            }, { concurrency: 3 });
        })
        .then(data => _.flattenDeep(data)).then(array=>array.filter(path=>path!==undefined));
}
