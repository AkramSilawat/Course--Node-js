// class PizzaShop {
//     constructor(){
//         this.orderNumber = 0;
//     }

//     order(){
//         this.orderNumber++
//     }
//     diplayOrderNumber(){
//         console.log(`Current order number: ${this.orderNumber}`);
//     }
// }

// module.exports = PizzaShop;





const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, topping){
        this.orderNumber++
        this.emit("order", size, topping);
    }
    diplayOrderNumber(){
        console.log(`Current order number: ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;