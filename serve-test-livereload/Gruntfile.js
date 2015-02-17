module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "pkg" : grunt.file.readJSON('package.json'),
    "concurrent": {
        'watch': {
            tasks: ['watch:livereload', 'watch:test'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
    "open" : {
      'dev' : {
        path: 'http://127.0.0.1:1337',
        app: 'Google Chrome'
      }
    },
    "watch" : {
      'livereload' :{
        files: ['src/**/*.js', 'test/**/*.js', 'src/**/*.css', 'src/**/*.html'],
        options: {
          spawn: true,
          livereload: true
        }
      },
      'test' : {
        files: ['src/**/*.js', 'test/spec/**/*.js'],
        tasks: ['jshint:src', 'jasmine'],
        options: {
          spawn: true,
          livereload: false
        }
      }
    },
    "jshint": {
      src: ['src/js/**/*.js'],
      options: {
        reporter : require("jshint-stylish")
      }
    },
    "http-server" : {
      'dev' : {
        root: './src',
        port: 1337,
        runInBackground: true
      }
    },
    jasmine : {
      src: 'src/**/*.js',
      options: {
        specs: 'test/spec/*Spec.js',
        helpers: 'test/spec/*Helper.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-open');

  grunt.loadNpmTasks('grunt-http-server');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['http-server', 'open:dev', 'concurrent:watch', 'jasmine']);

};
