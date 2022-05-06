import strings from './strings';
import moment from 'moment';

class Data {
    constructor() {
        this.event = {
            name: '',
            startDate: moment(),
            endDate: moment()
        };
        this.guests = {
            men: 0,
            women: 0,
            children: 0,
            vegs: 0
        };
        this.meats = [];

        this.sideDishes = [];

        this.supplies = [];

        this.drinks = [];
    }

    getBarbecueName() {
        if (this.event.name.length > 20) return this.event.name.substring(0, 19) + '...';

        return this.event.name.toUpperCase();
    }

    setBarbecueName(name) {
        if (name.length > 80) return;

        this.event.name = name;
    }

    setStartDate(date) {
        if (date == null) return;

        this.event.startDate = date;
    }

    setEndDate(date) {
        this.event.endDate = date == null ? null : date;
    }

    getEventDate() {
        let date = '';

        const startMonth = strings.months.at(this.event.startDate.month())
        const startMonthAndYear = this.event.startDate.format(
            `[de] [${startMonth}] [de] YYYY`
        );

        const endMonth = strings.months.at(this.event.endDate.month());
        const endMonthAndYear = this.event.endDate.format(
            `[de] [${endMonth}] [de] YYYY`
        )

        if (this.event.startDate.get('year') === this.event.endDate.get('year')) {
            if (this.event.startDate.get('month') === this.event.endDate.get('month')) {
                if (this.event.startDate.get('date') === this.event.endDate.get('date')) {
                    date = `${this.event.startDate.format('D')} ${startMonthAndYear}`;
                } else {
                    date = `${this.event.startDate.format('D [à]')} ${this.event.endDate.day()} ${startMonthAndYear}`;
                }
            } else {
                date = `${this.event.startDate.format(`D [de] [${startMonth}]`)} à ${this.event.endDate.format(`D [de] [${endMonth}]`)} de ${this.event.startDate.get('year')}
                `;
            }
        } else {
            date = `${this.event.startDate.get('date')} ${startMonthAndYear} à ${this.event.startDate.get('date')} ${endMonthAndYear}`;
        }

        return date;
    }

    addMen() {
        this.guests.men = this.guests.men + 1;
    }

    subMen() {
        if (this.guests.men == 0) return;

        this.guests.men = this.guests.men - 1;
    }

    addWomen() {
        this.guests.women = this.guests.women + 1;
    }

    subWomen() {
        if (this.guests.women == 0) return;

        this.guests.women = this.guests.women - 1;
    }

    addChildren() {
        this.guests.children = this.guests.children + 1;
    }

    subChildren() {
        if (this.guests.children == 0) return;

        this.guests.children = this.guests.children - 1;
    }

    addVegetarian() {
        if (this.guests.vegs >= this.getTotalPeople()) return;

        this.guests.vegs = this.guests.vegs + 1;
    }

    subVegetarian() {
        if (this.guests.vegs == 0) return;

        this.guests.vegs = this.guests.vegs - 1;
    }

    getTotalPeople() {
        return this.guests.men + this.guests.women + this.guests.children;
    }

    meatAlreadySelected = (element, id) => this.meats.some(meat => meat.label === element && meat.type === id);

    generateBeefs() {
        const { key } = strings.meats.beef;

        const types = strings.meats.beef.types.map((element, c) => {
            return {
                key: key,
                id: c,
                type: element,
                selected: this.meatAlreadySelected(element, key)};
        });

        return types;
    }

    generatePigs() {
        const { key } = strings.meats.pig;

        const types = strings.meats.pig.types.map((element, c) => {
            return {
                key: key,
                id: c,
                type: element,
                selected: this.meatAlreadySelected(element, key)};
        });

        return types;
    }

    generateSheeps() {
        const { key } = strings.meats.sheep;

        const types = strings.meats.sheep.types.map((element, c) => {
            return {
                key: key,
                id: c,
                type: element,
                selected: this.meatAlreadySelected(element, key)};
        });

        return types;
    }

    generateChickens() {
        const { key } = strings.meats.chicken;

        const types = strings.meats.chicken.types.map((element, c) => {
            return {
                key: key,
                id: c,
                type: element,
                selected: this.meatAlreadySelected(element, key)};
        });

        return types;
    }

    generateVegetables() {
        const { key } = strings.meats.vegetables;

        const types = strings.meats.vegetables.types.map((element, c) => {
            return {
                key: key,
                id: c,
                type: element,
                selected: this.meatAlreadySelected(element, key)};
        });

        return types;
    }

    generateSideDishes() {
        const sideDishes = strings.sideDishes.types.map((element, index) => {
            return {
                id: index,
                type: element,
                selected: this.sideDishes.some(sideDishe => sideDishe.label === element)
            }
        });

        return sideDishes;
    }

    generateSupplies() {
        const supplies = strings.supplies.types.map((element, index) => {
            return {
                id: index,
                type: element,
                selected: this.supplies.some(supply => supply.label === element)
            }
        });

        return supplies;
    }

    generateDrinks() {
        const drinks = strings.drinks.types.map((element, index) => {
            return {
                id: index,
                type: element,
                selected: this.drinks.some(drink => drink.label === element)
            }
        });

        return drinks;
    }
}

const data = new Data();

export default data;
