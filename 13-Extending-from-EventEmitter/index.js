const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./dirnk-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine

pizzaShop.on("order",(size, topping) => {
    console.log(`Order recived! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});   

pizzaShop.order("large", "mashrooms");;
pizzaShop.diplayOrderNumber();