'use strict';
module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require( "load-grunt-tasks" )( grunt );
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.repository.url %>)\n' +
        ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' * Licensed under MIT\n' +
        ' */\n',

        //清空style和js
        clean: {
          dist: {
              src: 'dist/'
          },
          temp: {
              src: ['test/coverage']
          }
        },

        //js语法检查
        jshint: {
            files: ['src/*.js'],
            options: {
                globals:{
                    jshintrc:'.jshintrc'
                }
            }
        },
        //css语法检查
        csslint:{
            files:['src/*.css'],
            options:{
                globals:{
                    csslintrc:'.csslintrc'
                }
            }
        },
        //scss语法检查
        scsslint: {
            options: {
                config: 'scss/.scsslint.yml',
                reporterOutput: null
            },
            src: ['scss/*.scss']
        },
        //html语法检查
        htmllint: {
            options: {
                ignore: [
                    'Element “img” is missing required attribute “src”.',
                    'Bad value “X-UA-Compatible” for attribute “http-equiv” on element “meta”.',
                    'Attribute “autocomplete” not allowed on element “input” at this point.',
                    'Attribute “autocomplete” not allowed on element “button” at this point.',
                    'Element “div” not allowed as child of element “progress” in this context. (Suppressing further errors from this subtree.)',
                    'Consider using the “h1” element as a top-level heading only (all “h1” elements are treated as top-level headings by many screen readers and other tools).',
                    'The “datetime” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.'
                ]
            },
            src: 'example/*.html'
        },

        //执行scss编译
        sass: {
            dist: {
               files:[{
                expand: true,
                cwd: 'scss',
                src: ['*.scss'],
                dest: 'src/',
                ext: '.css'
                }]
            }
        },
        //js压缩
        uglify: {
            options: {
                //beautify:true,
                //mangle: false //不混淆
                //banner: '<%= banner %>'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.js'],
                    dest: 'dist/',
                    ext: '.min.js'
                }]
            }
        },
        //css压缩合并
        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '*.css',
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },

        //为文件插入banner
        usebanner: {
            options: {
                position: 'top',
                banner: '<%= banner %>'
            },
            files: {
                src: ['dist/*.css', 'dist/*.js']
            }
        },
        //自动化单元测试
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true
            }
        },
        //监控，自动化
        watch:{
            scss: {
                files: ['scss/*.scss'],
                tasks: ['sass']
            }
        }

    });

    // 语法校验
    grunt.registerTask('check', ['jshint', 'scsslint', 'htmllint']);

    // 推送版本前执行的工作
    grunt.registerTask('default', ['clean:dist', 'uglify', 'cssmin', 'usebanner']);

};