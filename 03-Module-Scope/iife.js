// Immediately Invoked Function Expression (IIFE)
// The function is executed immediately, and its variables are scoped locally within the function. This prevents polluting the global scope.


(function abc(){
    const superHero = "Batman";
    console.log(superHero)
})();

(function xyz(){
    const superHero = "superman";
    console.log(superHero)
})();

