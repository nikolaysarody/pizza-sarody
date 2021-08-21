export default class PizzaService {
    getPizza() {
        return [
            {
                title: 'Пепперони',
                description: 'Сыр моцарелла, колбаса пепперони, перец чили, помидоры, орегано, базилик, чеснок',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Маргарита',
                description: 'Томатный соус, моцарелла и орегано',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Маринара',
                description: 'Томатный соус, чеснок и базилик',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Четыре сезона',
                description: 'Томатный соус, моцарелла, пармезан, яйца, бекон',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Карбонара',
                description: 'Томатный соус, моцарелла, пармезан, яйца, бекон',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Морепродукты',
                description: 'Томатный соус и морепродукты',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Четыре сыра',
                description: 'Томатный соус, моцарелла, пармезан, сыр горгонзола, артишоки и орегано',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Крудо',
                description: 'Томатный соус, моцарелла и пармская ветчина',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Неаполетано',
                description: 'Томатный соус, моцарелла, орегано, анчоусы',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'По-апулийски',
                description: 'Томатный соус, моцарелла, орегано, лук',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Монтанара',
                description: 'Томатный соус, моцарелла, грибы, пепперони и Страккино (мягкий сыр)',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Эмилиана',
                description: 'Томатный соус, моцарелла, баклажаны, отварной картофель и колбаса',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Римская',
                description: 'Томатный соус, моцарелла, анчоусы, каперсы и орегано',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Красный тигр',
                description: 'Сыр моцарелла, колбаса пепперони, аукцион, сабнавтика и щепотка тупняка',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Скьяччата',
                description: 'Оливковое масло и розмарин',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Прошутто',
                description: 'Томатный соус, моцарелла, ветчина, орегано',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Американо',
                description: 'Томатный соус, моцарелла, колбаса и картофель фри',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Прошутто и грибы',
                description: 'Томатный соус, моцарелла, ветчина, грибы',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Папайя',
                description: 'Моцарелла, шпинат, сыр рикотта и пармезан',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            },
            {
                title: 'Сардиния',
                description: 'Томатный соус, моцарелла, сыр пекорино и острая салями',
                price: 400,
                img: '/images/Pizza/pizza_1.png',
                id: Math.floor(Math.random() * 1000)
            }
        ];
    }

    getActions() {
        return [
            {
                title: '2 по цене 1',
                description: 'Пепперони x2',
                text: 'Вводите промокод ПЕПЕ для выгодной покупки двух пепперони по цене одной.',
                clickable: true,
                img: '/images/Pizza/action_2.jpg',
                id: 'dwqdqwd'
            },
            {
                title: 'Новинка',
                description: 'Пицца Красный Тигр',
                clickable: true,
                img: '/images/Pizza/action_2.jpg',
                id: 'gegre'
            },
            {
                title: 'Новинка',
                description: 'Пицца Красный Тигр',
                clickable: true,
                img: '/images/Pizza/action_2.jpg',
                id: 'jytjtyr'
            }
        ];
    }
}