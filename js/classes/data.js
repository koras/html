/**
 * Сервер инициализируем
 */

let paramsServer = { "port": 80, 'url': "http://yandex.ru" };
let server = new Server(paramsServer);
console.log(server);
let params = { server: server };
console.log(params);
let button = new Button(params);
button.addListner('myButton');

let myButtonChild = new Button(params);
myButtonChild.addListner('myButtonChild');