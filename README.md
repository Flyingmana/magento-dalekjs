magento-dalekjs
===============

Magento Frontend test helper for the dalekjs framework in order to perform crossbrowser-tests.

Test scenarios
==============

- placing an order in community edition 1.8 (may work with other community editions as well)
- log in to admin and check if the payment method Zero Subtotal Checkout is present

Usage
=====

- install dalekjs (http://dalekjs.com) and follow the installation instructions
- just run the tests, e.g. dalek checkoutTest.js
- configure the url for the Magento to tests

Known issues
============

- command type does not work in checkout
- config options can not be passed by a global configuration to the tests
- completeness of the tests


Current Reconstruction
======================

Currently the project gets rewired to become a nodejs module,
so to make use of it you place this project into a ```node_modules``` directory above or besides your test directory.
an example of usege can ge found here https://github.com/WizardsFugue/magento_common_example/tree/master/tests/dalekjs

