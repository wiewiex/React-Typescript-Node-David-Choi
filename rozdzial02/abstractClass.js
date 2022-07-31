var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehlice = /** @class */ (function () {
        function Vehlice(wheelCount) {
            this.wheelCount = wheelCount;
        }
        Vehlice.prototype.showNumberOfWheels = function () {
            console.log("Liczba k\u00F3\u0142 w poje\u017Adzie: ".concat(this.wheelCount));
        };
        return Vehlice;
    }());
    var Motorcycle = /** @class */ (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle() {
            return _super.call(this, 2) || this;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Motocykl ma ".concat(this.wheelCount, " ko\u0142a"));
        };
        return Motorcycle;
    }(Vehlice));
    var Automobile = /** @class */ (function (_super) {
        __extends(Automobile, _super);
        function Automobile() {
            return _super.call(this, 4) || this;
        }
        Automobile.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Samoch\u00F3d ma ".concat(this.wheelCount, " ko\u0142a"));
        };
        Automobile.prototype.showNumberOfWheels = function () {
            console.log("Liczba k\u00F3\u0142 w poje\u017Adzie: ".concat(this.wheelCount));
        };
        return Automobile;
    }(Vehlice));
    var motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    var autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);
})(AbstractNamespace || (AbstractNamespace = {}));
