var gaze = require('gaze');
var debounce = require('./debounce')();
var copy = require('copy');

var exec = require("child_process").exec;

function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    callback(stdout);
  });
}

function copyFiles() {
  copy('./dist/*', './demo/node_modules/@nsisodiya/react-components/dist', function (err, files) {
    if (err) throw err;
    console.log("copied", files);
  });

}
gaze('dist/*', function (err, watcher) {
  this.on('all', function (event, filepath) {
    debounce(copyFiles, 10);
  });
});

