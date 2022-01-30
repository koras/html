/**
 * Класс животное
 * 
 */
class Animals {

    /**
     * Вызывается при создании класса
     * 
     */
    constructor(name) {

        console.log('Animals constructor ' + name)
            //   this.name = name;
    }


    /**
     * Метод НЕ ВЫЗЫВАЕТСЯ
     * @param {*} name 
     */
    setName(name) {
        this.name = name;
        console.log('Animals ' + this.name);
    }

    run() {

        }
        /**
         * Метод отвечающий за остановку нашего персонажа
         */
    stop() {

    }

    getName() {
        console.log(this.name);
    }

}

// let newObject = {
//     first: 1000,
//     second: [1, 2, 3, 4]
// }

// let gasStation = {
//     street: "Lenin 21",
//     house: "3 st"
// }

// gasStation.__proto__ = newObject;


// // function getName() {
// //     console.log('myName');
// // }