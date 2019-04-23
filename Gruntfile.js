module.exports = function (grunt) {  grunt.initConfig({    htmlhint: {      options: {        htmlhintrc: '.htmlhintrc'      },	  html1:{      src: '*.html'	  },	  html2:{	  src: '00-template/*.html'	  }    },	csslint: {		options: {			csslintrc: '.csslintrc'		},		lax:{			src: '*.css',		},		lax2:{			src: '00-template/*.css'		}	},	eslint: {		options: {			configFile: '.eslintrc.json'		},			target: ['00-template/*.js'],	},	cssmin: {		 'dist/00-template/layout.css':'00-template/layout.css',		 'dist/10-timer-button/layout.css':'10-timer-button/layout.css',		 'dist/11-password-visual/layout.css':'11-password-visual/layout.css',		 'dist/13-progress/layout.css':'13-progress/layout.css',		 'dist/20-form-validation/layout.css':'20-form-validation/layout.css',		 'dist/21-h5-validation/layout.css':'21-h5-validation/layout.css',		 'dist/31-echart/layout.css':'31-echart/layout.css',		 'dist/32-map/layout.css':'32-map/layout.css',		 'dist/33-hightlight/layout.css':'33-hightlight/layout.css',	},	htmlmin: {        options: {            collapseWhitespace: true,            preserveLineBreaks: false		},        files: {           src: './index.html',           dest: 'dist/index.html'		},		filemoban: {			src: './00-template/index.html',			dest: 'dist/00-template/index.html'					},		filetimer: {			src: '10-timer-button/index.html',			dest: 'dist/10-timer-button/index.html'					},		filepassword:{			src: '11-password-visual/index.html',			dest:'dist/11-password-visual/index.html'		},		filerange:{			src: '12-range/index.html',			dest:'dist/12-range/index.html'		},		filerange:{			src: '13-progress/index.html',			dest:'dist/13-progress/index.html'		},		fileformvalidation:{			src: '20-form-validation/index.html',			dest:'dist/20-form-validation/index.html'		},		fileh5formvalidation:{			src: '21-h5-validation/index.html',			dest:'dist/21-h5-validation/index.html'		},		fileechart:{			src: '31-echart/index.html',			dest:'dist/31-echart/index.html'		},		filemap:{			src: '32-map/index.html',			dest:'dist/32-map/index.html'		},		filelight:{			src: '33-hightlight/index.html',			dest:'dist/33-hightlight/index.html'		},    },/*	babel:{		options:{			sourceMap:false,			presets:[babel-preset-es2015]		},		dist:{			files:[{				expand:true,				cwd:'11-password-visual/',				src:['11-password-visual/main.js'],				dest:'11-password-visual/',			}]		}	},*/	uglify: {		options:{			mangle:true,			comments:'false',		},        release:{          files: {            'dist/00-template/main.js': '00-template/main.js',			'dist/10-timer-button/main.js':'10-timer-button/main.js',			'dist/11-password-visual/main.js':'11-password-visual/main.js',			'dist/12-range/main.js':'12-range/main.js',			'dist/13-progress/main.js':'13-progress/main.js',			'dist/20-form-validation/main.js':'20-form-validation/main.js',			'dist/21-h5-validation/main.js':'21-h5-validation/main.js',			'dist/31-echart/main.js':'31-echart/main.js',			'dist/32-map/main.js':'32-map/main.js',			'dist/33-hightlight/main.js':'33-hightlight/main.js',			        }      }    },	  });      //grunt.loadNpmTasks('grunt-babel');babel 没有解决 只能自己把es6改成es5 灰溜溜  grunt.loadNpmTasks('grunt-htmlhint');  grunt.loadNpmTasks('grunt-contrib-csslint');  grunt.loadNpmTasks('grunt-eslint');  grunt.loadNpmTasks('grunt-contrib-htmlmin');  grunt.loadNpmTasks('grunt-contrib-cssmin');  grunt.loadNpmTasks('grunt-contrib-uglify');     //只检查了模板的静态代码  grunt.registerTask('lint',['htmlhint','csslint','eslint']);  grunt.registerTask('release',['cssmin','htmlmin','uglify']);  //grunt.registerTask('babel', ['babel']);};