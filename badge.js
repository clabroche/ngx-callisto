const fs = require('fs')
var lcov2badge = require("lcov2badge");
lcov2badge.badge({
    filePath: "./src/documentation/coverage/lcov.info",
    subject: 'cover'					// default is 'coverage'
}, function(err, svgBadge) {
  if (err) throw err;
  fs.writeFileSync('./src/documentation/badge.svg', svgBadge, 'utf-8')
});
