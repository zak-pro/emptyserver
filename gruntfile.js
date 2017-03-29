module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //mocha for unit tests
    mochaTest: {
      test: {
        src: ['test/mochatest.js']
      }
    },
    //code security check
    nsp: {
      package: grunt.file.readJSON('package.json')
    },
    //uglify to minise server.js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'server.js',
        dest: 'server.min.js'
      }
    }
  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nsp');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['mochaTest','nsp','uglify']);
};