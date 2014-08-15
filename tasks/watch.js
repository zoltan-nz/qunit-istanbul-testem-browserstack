var livereload_port = 35729;
module.exports = {
  emberTemplates: {
    files: '<%= pathConfig.javascripts %>/templates/**/*.hbs',
    tasks: ['emberTemplates:debug'],
    options: {
      livereload: livereload_port
    }
  },

  css: {
    files: ['<%= pathConfig.stylesheets %>/{,*/}*.{scss,sass}'],
    tasks: ['sass:server', 'autoprefixer:server']
  },

  js: {
    files: ['<%= pathConfig.javascripts %>/{,**/}*.js'],
    tasks: ['transpile:server', 'concat_sourcemap:server'],
    options: {
      livereload: livereload_port
    }
  },

  livereload: {
    files: ['<%= pathConfig.output %>/{,*/}*.css'],
    options: {
      livereload: livereload_port
    }
  },

  unitTests: {
    files: ['<%= pathConfig.tests %>/{,**/}*.js'],
    tasks: ['transpile:tests', 'concat_sourcemap:tests'],
    options: {
      livereload: livereload_port
    }
  }
};
