const fse = require('fs-extra');
const cheerio = require('cheerio');
const pathfs = require('path');
const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

const indexPath = pathfs.join(__dirname, 'index.html');
const $ = cheerio.load(fse.readFileSync(indexPath, 'utf-8'));
$('.menu .list .copyright').prev().before('<li class="chapter"><a type="chapter-link" href="./coverage/index.html" ><span class="fa fa-fw fa-external-link"></span>Code coverage</a ></li >');
const data = entities.decode($.html());
fse.writeFileSync(indexPath, data, 'utf-8');
