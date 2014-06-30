
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
    }
};


module.exports = new Magento;

