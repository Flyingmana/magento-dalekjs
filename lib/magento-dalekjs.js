
'use strict';

var conf = require('./config/ce-18.yml')

var Magento = function () {
    
    this.config = require('./config/ce-18.yml');
    
};

Magento.prototype = {
    
    setConfig: function (config) {
        this.config = config;
    },
    
    getConfig: function () {
        return this.config;
    },
    
    getAdmin: function () {
        var Admin = require('./magento-dalekjs/admin.js')
        var admin =  new Admin;
        admin.setConfig(this.config);
        return admin;
    }
};


module.exports = new Magento;

