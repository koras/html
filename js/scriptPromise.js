 // 1 этап заполнение имени фамилии
 // 2 этап заполнение банковских данных
 // 3 этап заполнение адреса
 // SOLID - 
 let url = 'https://randomuser.me/api/?results=10';

 let headers = {
     'Content-Type': 'text/plain'
 }

 console.log('scriptPromise');

 let createDiv = () => {
     console.log('Добавляем на страничку');
     let block = document.getElementById('block');
     block.innerHTML = `info`;
 }
 createResultTamplate = (rows) => {
     return `<div class="blockFamily">
         <div class="name">${rows.name.first} ${rows.name.last}</div>
         <div class="phone">${rows.phone}</div>
         <div class="gender">${rows.gender}</div>
    </div>`;
 }

 let createResult = (data) => {
     let htmlBlock = '';
     for (let index = 0; index < data.length; index++) {
         const element = data[index];
         //console.log(element);
         htmlBlock += createResultTamplate(element);
     }
     document.getElementById('result').innerHTML = htmlBlock;
 }

 /**
  * отправляем на сервер данные
  * @param {object} params 
  */
 function sendServer(params) {
     console.log('params:', params)
     axios.get(url, params, { headers })
         .then(function(response) {
             // Если запрос успешен
             console.log("Если запрос успешен");
             return response.data;
         })
         .then(function(data) {
             console.log("тело запроса");
             return data.results;
         })
         .then(function(results) {
             createDiv();
             console.log("results", results);
             return results;
         })
         .then(function(results) {
             createResult(results);
         })
         //  .then(function(response) {
         //      // Если запрос успешен
         //      console.log("Если запрос успешен");
         //      console.log(response);
         //  })
         .catch(function(error) {
             // Если запрос с ошибкой
             console.log(' // Если запрос с ошибкой');
             console.log(error);
         });
 }
 /**
  * Получаем информации из input
  */
 function sendButton() {
     let name = document.getElementById('name');
     console.log(name.value);
     sendServer({ login: name.value })
 }
 /**
  * вешаем слушатель
  */
 function addListner() {
     let buttonId = document.getElementById('buttonId');
     buttonId.addEventListener('click', sendButton);
 }

 /**
  * старт
  */
 addListner();