// let dataObject = {
//     'oil': 100,
//     'gas': 200,
//     'shop': [],
// };

// for (let itemName in dataObject) {
//     // console.log("itemName  = " + itemName);
//     // console.log('dataObject.itemName = ' + dataObject);
//     // console.log('dataObject.itemName = ' + dataObject.itemName);
//     // console.log("dataObject['itemName'] = " + dataObject[itemName]);

// }

// let dataCopy = {};
// // ссылка
// //dataCopy =  dataObject

// // клонирование
// Object.assign(dataCopy, dataObject)
// dataCopyClone = dataCopy;

// console.log('dataCopy', dataCopy)
// dataCopy.db = "mysql";
// console.log('dataCopy in mysql', dataCopy)
// console.log('dataObject in mysql', dataObject)
// delete dataCopy.db;

// console.log('dataCopyClone in mysql', dataCopyClone)

// let productrow = document.getElementById('productrow');
// let tableDocument = document.getElementById('tableDocument');

// let cloneHtml = productrow.content.cloneNode(true);

// let rowFirst = "Первая ячейка";
// let rowSecond = "Вторая  ячейка";


// function html() {
//     return `<tr>
//             <td class="record">${rowFirst}</td>
//             <td>${rowSecond}</td>
//             </tr>`;
// }

let functionGlobal = function() {
    console.log('Мы вызываем functionGlobal');
}



let objectFunctions = {
    myButton: function() {
        console.log('меня нажали, ахахаха');
        // локальная
        //    functionGlobal();
        console.log(this);
    },
    myButton2: function() {
        console.log('меня нажали, другая кнопка');
    },
    myDelete: () => {

        console.log('Удаление');
        // глобальная
        //   functionGlobal();
        console.log(this);
    }
}


let elBut = document.getElementById('but');
let elBut2 = document.getElementById('but2');







elBut.addEventListener('click', objectFunctions.myButton);

// добавляем objectFunctions.myButton2
elBut2.addEventListener('click', objectFunctions.myButton2);

// Удаляем  objectFunctions.myButton2
elBut2.removeEventListener('click', objectFunctions.myButton2);

// добавляем objectFunctions.myDelete
elBut2.addEventListener('click', objectFunctions.myDelete);



// tableDocument.innerHTML += '  <tr><td class="record">2342342</td><td>13461346</td></tr>'
// tableDocument.innerHTML += '  <tr><td class="record">2342342</td><td>13461346</td></tr>'
// tableDocument.innerHTML += '  <tr><td class="record">2342342</td><td>13461346</td></tr>'
// tableDocument.innerHTML += '  <tr><td class="record">2342342</td><td>13461346</td></tr>'
//tableDocument.appendChild(cloneHtml)
//tableDocument.appendChild(cloneHtml)
//tableDocument.appendChild(cloneHtml)
//tableDocument.appendChild(cloneHtml)
//tableDocument.innerHTML += htmlTr
// tableDocument.appendChild(productrow)
// tableDocument.appendChild(productrow)
// tableDocument.appendChild(productrow)
// tableDocument.appendChild(productrow)
// tableDocument.appendChild(productrow)
// tableDocument.appendChild(productrow)
console.log(12);

//let result = confirm('Удалять ли базу данных?');

// if (result) {
//     console.log('здесь исполняем если результат положительный');
//     // здесь исполняем если результат положительный
// } else {
//     console.log('здесь исполняем если результат отрицательный');

// }

//debugger;


// old function ie6;
// getContent = function() {
//         /// здесь наш новый код

//         getContentBody();
//     }
//     // // new function ie10;



// getContentBody();




// ie6;
// ie10;


//console.log('test');



// let object = {
//     function: [
//         function() {
//             this

//             let data = 1;
//             console.log('получение данных из базы');
//             data = data + 1;
//         },
//         function() {
//             console.log('обпработка данных');
//         },
//         function() {
//             console.log('добавление кнопок');
//         },
//         function() {
//             console.log('отправка данных');

//         },

//     ]
// }


// let dataObject = {
//     carrot: [{ w: 10, h: 34 }, { w: 25, h: 50 }, ],
//     apple: 10,
//     lemon: 51,
// };


// dataObject.functionName = (data) => {
//     console.log('стрелочная функция')
// }

// // while (object.function) {
// //     object.function[t]()

// // }




// dataObject.getFunction = function(param) {
//     console.log(param);
// }

// dataObject.getWidth = function(w, h) {
//     console.log(w, h);
// }

// dataObject.createCube = function(w, h, l) {
//     console.log(w, h, l);
// }

// dataObject.getFunction('love');









// let value = "Маша";

// let text1 = "Привет " + value;

// let text2 = `Привет ${value} ${1+1} `;
// let text3 = "Привет ${value} ";
// let text4 = 'Привет ${value} ';


// console.log(text2);
// console.log(text3);
// console.log(text4);



// let result = true;
// let mut = 95;

// function getResult() {
//     // return result || mut == 96 && 45 != 66;


//     let total = function total() {
//         console.log(1111);


//     }

// }




// let dataArray = [
//     'apple',
//     'carrot',
//     'lemon'
// ];

// console.log(dataArray[0])
// console.log(dataArray[1])
// console.log(dataArray[2])

// let num = 3;

// switch (num) {
//     case 2:
//         {
//             console.log('два');
//         }
//         break;
//     case "3":
//         {
//             console.log('ттри');
//         }
//         //     break;
//     case 4:
//         {
//             console.log('четыре');
//         }
//         break;
//     default:
//         {

//             console.log('нет числа');
//         }

// }

// // let p = 0;

// // //do {
// // console.log(p, ' = ', dataObject.carrot[p]);
// // p++;
// // }
// // while (dataObject.carrot)

// // for (let m = 0; m < dataObject.carrot.length; m++) {

// //     console.log(m, ' = ', dataObject.carrot[m]);
// // }


// elem2.onclick = function() { // перезапишет существующий обработчик
//     alert('Станет'); // выведется только это
// };

// // class User {
// //     name = "Аноним";

// //     sayHi() {
// //         alert(`Привет, ${this.name}!`);
// //     }
// // }

// // new User().sayHi();

// let data = (5 === 5) ? 1 : 0;


// // if (result) {
// //     result = a;
// // } else {
// //     result = b;
// // }




// let state = {
//     shop: {
//         nameData: "Алиса",
//         address: "Ленина 1",
//         sity: "Питер"
//     }
// };

// state.address;
// state.nameData;

// getName(1333, 2);

// try {
//     // всё хорошо
//     // Загружаем график, если не получилось то переходим в catch
// } catch (e) {
//     /// Если ошибка то исполняем здесь
//     // График мы не можем загрузить
// }


// function getName(param1, param2) {
//     let result = param1 + param2

//     console.log(result);
// }

// function devParam(param1, param2) {
//     let result = param1 - param2

//     console.log(result);
// }
// let i = 1;
// i++;
// i++;
// i++;
// i++;
// i++;
// i++;
// i++;

// //console.log('1 nameSecond ' + nameSecond);
// // getName(1, 2);
// // getName(2, 23);
// // getName(14, 22);
// // getName(11, 267);
// // devParam(11, 267);

// function yourFunction() {
//     console.log(' yourFunction');
// }

// window.onload = function() {
//     yourFunction();
// };


// //console.log(result);
// console.log(name);