// Generated on 2014-05-10 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    //require('time-grunt')(grunt);


    // Define the configuration for all the tasks
    grunt.initConfig({


        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['app/js/{,*/}*.js'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['app/css/sass/{,*/}*.{scss,sass}'],
                tasks: ['sass:dist','autoprefixer']
            },
            //styles: {
            //    files: ['app/css/{,*/}*.css'],
            //    tasks: ['autoprefixer']
           // },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/{,*/}*.html',
                    'app/css/{,*/}*.css',
                    'app/images/{,*/}*'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            //connect.static('.tmp'),
                            //connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static('app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    open: false,
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            //connect.static('.tmp'),
                            //connect.static('test'),
                            //connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static('app')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: 'dist',
                    livereload: false
                }
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {

            dist: {
                options: {
                    outputStyle: 'nested'
                },
                files: [{
                    expand: true,
                    cwd: 'app/css/sass',
                    src: ['style.scss'],
                    dest: 'app/css',
                    ext: '.css'
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 5 versions', "> 10%", 'Explorer 8']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/css',
                    src: 'style.css',
                    dest: 'app/css'
                }]
            }
        }

    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['connect:dist:keepalive']);
        }

        grunt.task.run([
            //'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

};
