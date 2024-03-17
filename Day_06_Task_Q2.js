var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        if (radius === void 0) { radius = 1.0; }
        if (color === void 0) { color = "red"; }
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Circle[radius=".concat(this.radius, ", color=").concat(this.color, "]");
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
// Example usage
var myCircle = new Circle();
console.log(myCircle.toString()); // Output: Circle[radius=1, color=red]
console.log("Area:", myCircle.getArea()); // Output: Area: 3.141592653589793
console.log("Circumference:", myCircle.getCircumference()); // Output: Circumference: 6.283185307179586
