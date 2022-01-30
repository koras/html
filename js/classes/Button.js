/**
 * класс кнопки
 */
class Button {
    paramServer = {};
    constructor(params) {
        console.log('Button  constructor', params)
        this.paramServer = params;
        console.log(' this.paramServer', this.paramServer)
            //  this.setServer = this.setServer.bind(this)
    }


    /**
     * Отправляем данные на сервер
     */
    setServer = () => {
        //setServer() {
        console.log(this.paramServer);

        this.paramServer.server.send();
    }



    /**
     * Добавляем слушатель
     */
    addListner = (id) => {
        // addListner(id) {
        let el = document.getElementById(id);
        el.addEventListener('click', this.setServer);
    }


}