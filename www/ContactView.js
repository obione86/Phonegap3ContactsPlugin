
    var exec = require("cordova/exec");


    var contactview = {
        show: function (successCallback, failCallback) {

            function success(args) {
                if (typeof successCallback === 'function')
                    successCallback(args);
            }

            function fail(args) {
                if (typeof failCallback === 'function')
                    failCallback(args);
            }

            return exec(
                function (args) { success(args); },
                function (args) { fail(args); },
                'ContactView',
                'getContact',
                []);
        }
    }
    module.exports = contactview;

