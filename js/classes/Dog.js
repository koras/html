/**
 * Класс собачка
 * 
 */
class Dog extends Animals {

    play = false;

    /**
     * Дай нашей собачки
     */
    setSound() {

        }
        /**
         * Играет собачка
         */
    startPlay() {

    }

    /**
     * Запускаем игру
     */
    setPlay() {
            this.play = true;
        }
        /**
         * Устанавливаем режим окончания игры
         */
    stopPlay() {
            this.play = false;
        }
        /**
         * статус нашей собачки
         */
    statusPlay() {
        console.log(this.name, this.play);
    }
}


// let dog1 = new Dog('myPets');
// let dog2 = new Dog('yourPers');

// dog1.setPlay();
// dog2.statusPlay();
// dog1.statusPlay();

// let dog3 = new Dog('yourPers');

// dog1.getName();
// dog2.getName();
// dog3.getName();