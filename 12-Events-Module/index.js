const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("oder-pizza", (size, topping) => {
    console.log(`Oder recived! Baking a ${size} pizza with ${topping}`);
});

emitter.emit("order-pizza", "large", "mushrooms");



// panding