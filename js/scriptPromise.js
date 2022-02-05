function getName() {
    // 10ms
}

function sendServer() {
    // 1500

}
// 1 этап заполнение имени фамилии
// 2 этап заполнение банковских данных
// 3 этап заполнение адреса





function getSecond() {
    axios.post('/user', {
            firstName: 'Fred', // Имя
            lastName: 'Flintstone' // Фамилия
        })
        .then(function(response) {
            // Если запрос успешен
            console.log(response);
        })
        .catch(function(error) {
            // Если запрос с ошибкой
            console.log(error);
        });

}

getName();

sendServer();

getSecond();