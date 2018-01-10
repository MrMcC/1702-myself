"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by miaoce on 17/6/7.
 */
var Hello = function () {
    function Hello(name) {
        _classCallCheck(this, Hello);

        this.name = name;
    }

    _createClass(Hello, [{
        key: "say",
        value: function say() {
            var _this = this;

            var a = 10;
            var b = 20;
            console.log(a, b);
            var foo = function foo() {
                console.log(_this);
            };
        }
    }], [{
        key: "eat",
        value: function eat() {
            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            var name = "李四";
            var obj = {
                name: name,
                foo: function foo() {}
            };
        }
    }]);

    return Hello;
}();

var hello = new Hello("王五123");
//# sourceMappingURL=hello.js.map