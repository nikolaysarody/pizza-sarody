export default class PizzaService {
    getPizza() {
        return [
            {
                title: 'Пепперони',
                description: 'Сыр моцарелла, колбаса пепперони, перец чили, помидоры, орегано, базилик, чеснок',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: 'sdqdsfg'
            },
            {
                title: 'Маргарита',
                description: 'Томатный соус, моцарелла и орегано',
                price: 400,
                img: '/images/Pizza/pizza_2.jpg',
                id: 'gregerf'
            },
            {
                title: 'Маринара',
                description: 'Томатный соус, чеснок и базилик',
                price: 400,
                img: '/images/Pizza/pizza_3.jpg',
                id: 'hrthrf'
            },
            {
                title: 'Четыре сезона',
                description: 'Томатный соус, моцарелла, пармезан, яйца, бекон',
                price: 400,
                img: '/images/Pizza/pizza_4.jpg',
                id: 'fewgd'
            },
            {
                title: 'Карбонара',
                description: 'Томатный соус, моцарелла, пармезан, яйца, бекон',
                price: 400,
                img: '/images/Pizza/pizza_5.jpg',
                id: 'gefdwf'
            },
            {
                title: 'Морепродукты',
                description: 'Томатный соус и морепродукты',
                price: 400,
                img: '/images/Pizza/pizza_6.jpg',
                id: 'gegergfd'
            },
            {
                title: 'Четыре сыра',
                description: 'Томатный соус, моцарелла, пармезан, сыр горгонзола, артишоки и орегано',
                price: 400,
                img: '/images/Pizza/pizza_7.jpg',
                id: 'gregfdger'
            },
            {
                title: 'Крудо',
                description: 'Томатный соус, моцарелла и пармская ветчина',
                price: 400,
                img: '/images/Pizza/pizza_8.jpg',
                id: 'jytuhg'
            },
            {
                title: 'Неаполетано',
                description: 'Томатный соус, моцарелла, орегано, анчоусы',
                price: 400,
                img: '/images/Pizza/pizza_9.jpg',
                id: 'cgbedhtr'
            },
            {
                title: 'По-апулийски',
                description: 'Томатный соус, моцарелла, орегано, лук',
                price: 400,
                img: '/images/Pizza/pizza_10.jpg',
                id: 'kyuhgtyrhj'
            },
            {
                title: 'Монтанара',
                description: 'Томатный соус, моцарелла, грибы, пепперони и Страккино (мягкий сыр)',
                price: 400,
                img: '/images/Pizza/pizza_11.jpg',
                id: 'jngfjnthg'
            },
            {
                title: 'Эмилиана',
                description: 'Томатный соус, моцарелла, баклажаны, отварной картофель и колбаса',
                price: 400,
                img: '/images/Pizza/pizza_12.jpg',
                id: 'hgjthgjt'
            },
            {
                title: 'Римская',
                description: 'Томатный соус, моцарелла, анчоусы, каперсы и орегано',
                price: 400,
                img: '/images/Pizza/pizza_13.jpg',
                id: 'jhktghfrd'
            },
            {
                title: 'Красный тигр',
                description: 'Сыр моцарелла, колбаса пепперони, аукцион, сабнавтика и щепотка тупняка',
                price: 400,
                img: '/images/Pizza/pizza_15.jpg',
                id: 'jghdhgd'
            },
            {
                title: 'Скьяччата',
                description: 'Оливковое масло и розмарин',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: 'kjhgtdggh'
            },
            {
                title: 'Прошутто',
                description: 'Томатный соус, моцарелла, ветчина, орегано',
                price: 400,
                img: '/images/Pizza/pizza_14.jpg',
                id: 'hgfjtdhd'
            },
            {
                title: 'Американо',
                description: 'Томатный соус, моцарелла, колбаса и картофель фри',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: 'jryjhgkmk'
            },
            {
                title: 'Прошутто и грибы',
                description: 'Томатный соус, моцарелла, ветчина, грибы',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: 'jgfsertfgh'
            },
            {
                title: 'Папайя',
                description: 'Моцарелла, шпинат, сыр рикотта и пармезан',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: 'kljhgkjg'
            },
            {
                title: 'Сардиния',
                description: 'Томатный соус, моцарелла, сыр пекорино и острая салями',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: 'vcsfdghjghs'
            }
        ];
    }

    getActions() {
        return [
            {
                title: 'Акция',
                description: 'Пепперони x2',
                text: 'Вводите промокод ПЕПЕ для выгодной покупки двух пепперони по цене одной.',
                clickable: true,
                img: '/images/Pizza/action_2.jpg',
                id: 'dwqdqwd'
            },
            {
                title: 'Новинка',
                description: 'Пицца Красный Тигр',
                clickable: false,
                img: '/images/Pizza/action_3.jpg',
                id: 'gegre'
            }
        ];
    }
}