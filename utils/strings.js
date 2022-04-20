export default {
    meatsTitle: 'QUAIS CARNES E VEGETAIS SERÃO SERVIDOS?',
    meats: [
        {
            id: 'beef',
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
        {
            id: 'pig',
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
        {
            id: 'sheep',
            description: 'CARNE OVINA',
            types: [
                'Carré',
                'Paleta',
                'Pernil',
                'Picanha de Cordeiro'
            ],
            icon: require('../assets/sheep-icon.png')
        },
        {
            id: 'chicken',
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
        {
            id: 'vegetables',
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
    ],
    sideDishes: {
        types: [
            'Arroz',
            'Farofa',
            'Maionese',
            'Pão de Alho',
            'Queijo Coalhado',
            'Vinagrete'
        ]
    }
}
