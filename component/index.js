var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function constr() {
    generators.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    this.nameLower = this.name.toLowerCase();
    //this.log(this.config.getAll());
    //this.log(this.arguments);
    this.log('Creating component files...\n');
  },

  getPaths: function getPaths() {
    this.rootPath = 'components/';
    this.destPath = this.rootPath + this.nameLower + '/';
  },

  getComponent: function getComponent() {
    if (this.config.get('env') === 'meteor') {
      this.comp = 'comp_mt.js';
    } else if (this.config.get('env') === 'react-native') {
      this.comp = 'comp_rn.js';
    } else {
      this.comp = 'comp.js';
    }
  },

  getTest: function getTest() {
    if (this.config.get('env') === 'meteor') {
      this.testTemplate = 'comp_spec_mt.js';
    } else {
      this.testTemplate = 'comp_spec.js';
    }
  },


  writeComponent: function writeComponent() {
    var ext = this.config.get('componentExtension') || '.jsx';
    var compPath = this.destPath + this.name + ext;

    this.fs.copyTpl(
      this.templatePath(this.comp),
      this.destinationPath(compPath),
      { name: this.name }
    );
  },

  writeStyle: function writeStyle() {
    var ext = this.config.get('styleExtension') || '.css';
    var stylePath = this.destPath + this.name + ext;

    this.fs.copyTpl(
      this.templatePath('comp.css'),
      this.destinationPath(stylePath),
      { name: this.name }
    );
  },

  writeTest: function writeStyle() {
    var ext = '.js';
    var testPath = this.destPath + 'tests/' + this.name + '_spec' + ext;

    this.fs.copyTpl(
      this.templatePath(this.testTemplate),
      this.destinationPath(testPath),
      { name: this.name }
    );
  },
});
