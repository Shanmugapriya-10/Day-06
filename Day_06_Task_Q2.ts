class Circle {
    private radius: number;
    private color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage
let myCircle = new Circle();
console.log(myCircle.toString()); // Output: Circle[radius=1, color=red]
console.log("Area:", myCircle.getArea()); // Output: Area: 3.141592653589793
console.log("Circumference:", myCircle.getCircumference()); // Output: Circumference: 6.283185307179586
