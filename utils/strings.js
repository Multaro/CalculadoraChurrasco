export default {
    meats: {
        title: 'QUAIS CARNES E VEGETAIS SERÃO SERVIDOS?',
        beef: {
            key: 'beef',
            description: 'CARNE BOVINA',
            types: [
                'Alcatra',
                'Contra Filé',
                'Costela Bovina',
                'Filé Mignon',
                'Fraldinha',
                'Maminha',
                'Picanha'
            ],
            icon: require('../assets/beef-icon.png')
        },
        pig: {
            key: 'pig',
            description: 'CARNE SUÍNA',
            types: [
                'Alcatra',
                'Costela Suína',
                'Linguiças frescas',
                'Lombo',
                'Picanha'
            ],
            icon: require('../assets/pig-icon.png')
        },
        sheep: {
            key: 'sheep',
            description: 'CARNE OVINA',
            types: [
                'Carré',
                'Paleta',
                'Pernil',
                'Picanha de Cordeiro'
            ],
            icon: require('../assets/sheep-icon.png')
        },
        chicken: {
            key: 'chicken',
            description: 'CARNE DE FRANGO',
            types: [
                'Coração',
                'Coxa',
                'Coxa de asa',
                'Peito',
                'Sobrecoxa',
                'Tulipa de frango'
            ],
            icon: require('../assets/chicken-icon.png')
        },
        vegetables: {
            key: 'vegetables',
            description: 'VEGETAIS',
            types: [
                'Abobrinha',
                'Berinjela',
                'Brócolis',
                'Cebola',
                'Cenoura',
                'Cogumelo',
                'Pimentão',
                'Tomate'
            ],
            icon: require('../assets/vegetable-icon.png')
        }
    },
    sideDishes: {
        types: [
            'Arroz',
            'Farofa',
            'Maionese',
            'Pão de Alho',
            'Queijo Coalhado',
            'Vinagrete'
        ]
    },
    supplies: {
        types: [
            'Carvão',
            'Copos',
            'Gelos',
            'Guardanapos',
            'Limão',
            'Pratos',
            'Sal Grosso',
            'Talheres'
        ]
    }
}
