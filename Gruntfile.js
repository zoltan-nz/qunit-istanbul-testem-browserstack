var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

function loadConfig(path) {
  var glob = require('glob'),
      object = {},
      key;

  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });

  return object;
}

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var paths = {
    app: 'app',
    dist: 'dist',
    test: 'tests',
    tmp: 'tmp'
  };

  var config = {
    paths: paths,
  };

  grunt.util._.extend(config, loadConfig('./tasks'));
  grunt.initConfig(config);

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'replace:app',
      'concurrent:server',
      'neuter:app',
      'copy:fonts',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'replace:app',
    'concurrent:test',
    'connect:test',
    'neuter:app',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'replace:dist',
    'useminPrepare',
    'concurrent:dist',
    'neuter:app',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
