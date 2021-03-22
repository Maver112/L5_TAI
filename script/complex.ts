"use strict";
class ComplexNumber {
    constructor(real, img) {
        this.real = real;
        this.img = img;
    }
    add(n1) {
        return new ComplexNumber(this.real + n1.real, this.img + n1.img);
    }
    sub(n1) {
        return new ComplexNumber(this.real - n1.real, this.img - n1.img);
    }
    module() {
        return ((this.img * this.img) + (this.real * this.real));
    }
    toString() {
        console.log('Real: ' + this.real + ' Img:' + this.img);
    }
    ;
}
var x = new ComplexNumber(2, 3);
var y= new ComplexNumber(5, 7);

x.toString();
y.toString();

var z = x.add(y);
z.toString();

var v = z.sub(x);
v.toString();

console.log(v.module());
