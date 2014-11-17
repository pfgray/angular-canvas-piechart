module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        uglify: {
            options: {
                banner: '/* \n' +
                        ' <%= pkg.name %> v<%= pkg.version %>\n' +
                        ' Compiled on: <%= grunt.template.today("dd-mm-yyyy") %>\n' +
                        ' License: <%= pkg.license %>\n' +
                        '*/\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['angular-canvas-piechart.js']3
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

};
