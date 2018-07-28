const fs = require('fs')
var lcov2badge = require("lcov2badge");
const path = require('path');
console.log(path.resolve(__dirname, "src", "documentation", "coverage", "lcov.info"))
lcov2badge.badge({
    filePath: path.resolve(__dirname, "src","documentation","coverage","lcov.info"),
    subject: 'cover'					// default is 'coverage'
}, function(err, svgBadge) {
  if (err) throw err;
  fs.writeFileSync('./src/documentation/badge.svg', svgBadge, 'utf-8')
  fs.writeFileSync('./badge.svg', svgBadge, 'utf-8')
});
