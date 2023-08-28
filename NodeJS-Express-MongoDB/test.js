const module2 = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

const unboundGetX = module2.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module2);
console.log(boundGetX());
  // Expected output: 42

// class Professor {
//     constructor(name, className) {
//         this.name = name
//         this.className = className
//     }

//     getName() {
//         return this.name
//     }
// }

// const professor = new Professor('Dinh Gia Bao', '12A8')
// console.log(professor.getName());

