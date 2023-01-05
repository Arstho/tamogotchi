const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus() {
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name} умер :(`);
            return 'ПОТРАЧЕНО'
        } else {
            let meal_ = this.meal < 3 ? 'Я голоден' : 'Я не голоден';
            let energy_ = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
            let mood_ = this.mood < 3 ? 'Мне скучно' : 'Мне весело';
            console.log(`Имя:  ${this.name}, Еда: ${meal_} (${this.meal}), Энергия: ${energy_ } (${this.energy}), Настроение: ${mood_} (${this.mood})`);
        }
    },
    setName(name) {
        return this.name = name;
    },
    eat() {
        if (this.meal < 5) {
        return this.meal += 1;
        }
        return this.mood -= 1;
    },
    sleep() {
        if (this.energy < 5) {
            return this.energy += 1;
        }
        return this.meal -= 1;
    },
    play() {
        if (this.mood < 5) {
            return this.mood += 1;
        }
        return this.energy -= 1;
    }
};
tamogotchi.setName('Jamic')
tamogotchi.eat();
tamogotchi.sleep();
tamogotchi.play();
tamogotchi.getStatus();