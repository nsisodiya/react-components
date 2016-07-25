var gaze = require('gaze');
var debounce = require('./debounce')();
var copy = require('copy');
var exec = require("child_process").exec;
var packageJSON = require('./package.json');
console.log('asd');
function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    callback(stdout);
  });
}

function copyFiles() {
  var packageName = packageJSON.name;
  copy('./dist/*', './demo/node_modules/'+ packageName+'/dist', function (err, files) {
    if (err) throw err;
    console.log("copied", files);
  });
}

gaze('dist/*', function (err, watcher) {
  this.on('all', function (event, filepath) {
    debounce(copyFiles, 10);
  });
});

