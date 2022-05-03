import strings from './strings';

export default class Data {
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
}