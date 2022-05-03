import strings from './strings';

class Data {
    constructor() {
        this.event = {
            name: '',
            date: ''
        };
        this.guests = {
            men: 0,
            women: 0,
            children: 0,
            vegs: 0
        };
        this.meats = [
            {
                label: '',
                type: ''
            }
        ];
        this.sideDishes = [
            {
                label: ''
            }
        ];
        this.supplies = [
            {
                label: ''
            }
        ];
        this.drinks = [
            {
                label: ''
            }
        ];
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
        if (this.guests.vegs >= this.guests.children + this.guests.men + this.guests.women) return;

        this.guests.vegs = this.guests.vegs + 1;
    }

    subVegetarian() {
        if (this.guests.vegs == 0) return;

        this.guests.vegs = this.guests.vegs - 1;
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