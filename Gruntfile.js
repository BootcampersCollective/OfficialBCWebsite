module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
        clean: [
            'temp'
        ],
        concat: {
            vendor:{},
            ngModule:{},
            ngFiles:{}
        },
        copy: {},
        sass: {
        
        },
        watch : {
        
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('vendor', []);
    grunt.registerTask('ngModule', []);
    grunt.registerTask('ngFiles', []);
    grunt.registerTask('build', []);
    grunt.registerTask('watch', []);
};