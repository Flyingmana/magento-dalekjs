

'use strict';


/**
 *
 * @param options
 * @constructor
 */
var Admin = function (options) {
    this.config = {};
}

/**
 *
 * @module magento-dalekjs
 * @class Admin
 */
Admin.prototype = {

    setConfig: function (config) {
        this.config = config;
    },
    
    
    doLogin: function(test) {
        test
            .open(this.config.admin.url)
            .assert.title().is('Log into Magento Admin Page', 'Magento Admin Login Page has correct title')
            .type('#username', this.config.admin.user)
            .type('#login', this.config.admin.password)
            .click('#loginForm div.login-form div.form-buttons input.form-button')
            .wait(this.config.waitAfterClick)
            .assert.exists('#global_search_indicator', 'admin search bar found')
    }
};


module.exports = Admin;
