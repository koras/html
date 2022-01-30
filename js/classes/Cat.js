/**
 * Класс кошечки
 * 
 */
class Cat extends Animals {

    play = false;

    constructor(name) {
        super(name);
        console.log(' Cat constructor ' + name)
            //   this.name = name;
    }


    /**
     * Запускаем игру
     */
    setPlay() {
            this.play = true;
            console.log(this.name, 'setPlay');
        }
        /**
         * Устанавливаем режим окончания игры
         */
    stopPlay() {
            this.play = false;
            console.log(this.name, 'stopPlay');
        }
        /**
         * статус нашей собачки
         */
    statusPlay() {
        console.log(this.name, this.play);
    }


    /**
     * 
     * @param {string} name - имя кошечки 
     */
    setName(name) {
        this.name = name;
        console.log('Cat ' + this.name);
    }
}