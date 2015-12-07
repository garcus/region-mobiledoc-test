module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        copy: {
            dist: {
                expand: true,
                dot: true,
                cwd: 'src/<%= pkg.name %>',
                dest: 'dist/',
                src: [
                    'index.html',
                    'css/*',
                    'static/*',
                    'js/vendor/*'
                ]
            },
            vendor: {
                expand: true,
                dot: true,
                cwd: 'src/vendor',
                dest: 'dist/vendor',
                src: [
                    'js/*'
                ]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/<%= pkg.name %>/js/**/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js',
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/<%= pkg.name %>/js/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/<%= pkg.name %>/**/*', ],
                tasks: ['jshint', 'concat', 'uglify', 'copy'],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy'] );
};
