var Xray = require('x-ray');
let request = require('./drive');
var http = require('http');
var fs = require('fs');
var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http
    .get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(cb); // close() is async, call cb after close completes.
      });
    })
    .on('error', function(err) {
      // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (cb) cb(err.message);
    });
};

var x = Xray({
  filters: {
    getId: function(value) {
      return value.split('/');
    },
  },
}).driver(request('gb2312'));

var arr = [
  'guochan',
  'riben',
  'deguo',
  'faguo',
  'yidali',
  'yingguo',
  'meiguo',
  'hanguo',
  'qita',
];

function _split(a) {
  return a + 'add';
}

for (var i = 0; i < arr.length; i++) {
  x('http://www.pcauto.com.cn/zt/chebiao/' + arr[i] + '/', {
    title: 'title',
    items: x('.expPicA li', [
      {
        title: '.dTxt a',
        link: '.iPic img@src',
        logo: function($, cb) {
          var src = $.find('.iPic img').attr('src');
          var _file = src.split('/');
          var arrId = $.find('.dTxt a').attr('href').split('/');
          var cate = arrId[arrId.length - 3];
          var file = _file[_file.length - 1];
          var temp = './' + cate;
          if (!fs.existsSync(temp)) {
            fs.mkdirSync(temp);
          }
          download(src, './' + cate + '/' + file, function() {
            console.log('downloaded');
          });
          cb(null, temp + '/' + file);
        },
        des: '.dTxt .iDes',
        info: function($, cb) {
          var arrId = $.find('.dTxt a').attr('href').split('/');
          var cate = arrId[arrId.length - 3];
          var id = arrId[arrId.length - 1].split('.')[0];
          var cate = {
            cate: cate,
            id: id,
          };
          cb(null, cate);
        },
        detail: x('.dTxt a@href', '.article'),
      },
    ]),
  }).write('' + arr[i] + '.json');
}
