const fse = require('fs-extra');
const Promise = require('bluebird');
const path = require('path');
const _ = require('lodash');
const cheerio = require('cheerio');

(async _ =>{
    const arrayOfHtmlFile = await readdirDeep('./src/documentation')
    await Promise.map(arrayOfHtmlFile, async htmlFile=>{
        const $ = cheerio.load(await fse.readFile(htmlFile))
        $('head').prepend('<base href=".">')
        $('.menu .list .copyright').prev().before('<li class="chapter"><a type="chapter-link" href="./coverage/index.html" ><span class="fa fa-fw fa-external-link"></span>Code coverage</a ></li >');
        await fse.writeFile(htmlFile, $.html());
    })
})().catch(console.error)
function readdirDeep(_path) {
  return fse
    .readdir(_path)
    .then(data => {
      return Promise.map(data, file => {
        const pathFile = path.resolve(_path, file);
        if (fse.lstatSync(pathFile).isDirectory()) {
          return readdirDeep(pathFile);
        } else if (path.extname(pathFile) === '.html') {
          return pathFile;
        }
      }, {
        concurrency: 3
      });
    })
    .then(data => _.flattenDeep(data)).then(array => array.filter(path => path !== undefined));
}
