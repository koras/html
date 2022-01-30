/**
 * Класс для взаимодействия с сервером
 */

class Server {

    constructor(params) {
        //  this.params.port = params.port;
        // this.params.url = params.url;
        this.params = params;
    }

    /**
     *  Метод получения данных на сервере
     * @param {string} url - ссылка для обращения на сервер
     * @param {object} params - параметры для запроса
     */
    getData(url, params) {
            console.log('getData');
        }
        /**
         * Метод сохранения данных на сервере
         * @param {object} params - объект длля отправки на сервер
         */
    send(params) {
        console.log('send' + 'Отправляем данные на сервер');

    }
}