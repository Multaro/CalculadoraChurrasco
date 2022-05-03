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
        title: 'VOCÊ PENSOU EM QUAIS ACOMPANHAMENTOS?',
        text: 'Descobrir novos sabores é facil quando você pode contar com alguns acompanhamentos. '
            + 'Assim como a carne e os vegetais, eles são importantes para agradar os convidados e '
            + 'tornar o momento ainda mais especial.'
        ,
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
    },
    drinks: {
        title: 'QUAIS BEBIDAS DESEJA SERVIR?',
        text: 'Para ter certeza do sucesso do seu churrasco, escolha as bebidas que não podem '
              + 'faltar e lembre de gelar bem antes de servir. Aprecie com moderação.'
        ,
        types: [
            'Água',
            'Cachaça',
            'Cerveja',
            'Cervejas Especiais',
            'Refrigerante',
            'Suco',
            'Vinho',
            'Vodka'
        ]
    },
    next: 'PRÓXIMO'
}
