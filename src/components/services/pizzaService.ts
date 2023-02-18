interface GeneralInterface {
    title: string;
    description: string;
    img: string;
    _id: string;
}

interface PizzaInterface extends GeneralInterface {
    price: number;
}

interface ActionInterface extends GeneralInterface  {
    text?: string;
    clickable: boolean;
}

export default class PizzaService {
    private readonly _apiBase = 'http://localhost:3000/api'

    // async getPizza(): Promise<PizzaInterface> {
    //     const res = await fetch(this._apiBase + '/pizza');
    //
    //     if(!res.ok){
    //         throw new Error('Что то пошло не так' + res.status);
    //     }
    //     return await res.json();
    // }
    // getPizza(): PizzaInterface[] {
    //     return [
    //         {
    //             title: "Пепперони",
    //             description: "Сыр моцарелла, колбаса пепперони, перец чили, помидоры, орегано, базилик, чеснок",
    //             price: 400,
    //             img: "/images/Pizza/pizza_1.png",
    //             _id: "sdqdsfg"
    //         },
    //         {
    //             title: "Маргарита",
    //             description: "Томатный соус, моцарелла и орегано",
    //             price: 400,
    //             img: "/images/Pizza/pizza_2.jpg",
    //             _id: "gregerf"
    //         },
    //         {
    //             title: "Маринара",
    //             description: "Томатный соус, чеснок и базилик",
    //             price: 400,
    //             img: "/images/Pizza/pizza_3.jpg",
    //             _id: "hrthrf"
    //         },
    //         {
    //             title: "Четыре сезона",
    //             description: "Томатный соус, моцарелла, пармезан, яйца, бекон",
    //             price: 400,
    //             img: "/images/Pizza/pizza_4.jpg",
    //             _id: "fewgd"
    //         },
    //         {
    //             title: "Карбонара",
    //             description: "Томатный соус, моцарелла, пармезан, яйца, бекон",
    //             price: 400,
    //             img: "/images/Pizza/pizza_5.jpg",
    //             _id: "gefdwf"
    //         },
    //         {
    //             title: "Морепродукты",
    //             description: "Томатный соус и морепродукты",
    //             price: 400,
    //             img: "/images/Pizza/pizza_6.jpg",
    //             _id: "gegergfd"
    //         },
    //         {
    //             title: "Четыре сыра",
    //             description: "Томатный соус, моцарелла, пармезан, сыр горгонзола, артишоки и орегано",
    //             price: 400,
    //             img: "/images/Pizza/pizza_7.jpg",
    //             _id: "gregfdger"
    //         },
    //         {
    //             title: "Крудо",
    //             description: "Томатный соус, моцарелла и пармская ветчина",
    //             price: 400,
    //             img: "/images/Pizza/pizza_8.jpg",
    //             _id: "jytuhg"
    //         },
    //         {
    //             title: "Неаполетано",
    //             description: "Томатный соус, моцарелла, орегано, анчоусы",
    //             price: 400,
    //             img: "/images/Pizza/pizza_9.jpg",
    //             _id: "cgbedhtr"
    //         },
    //         {
    //             title: "По-апулийски",
    //             description: "Томатный соус, моцарелла, орегано, лук",
    //             price: 400,
    //             img: "/images/Pizza/pizza_10.jpg",
    //             _id: "kyuhgtyrhj"
    //         },
    //         {
    //             title: "Монтанара",
    //             description: "Томатный соус, моцарелла, грибы, пепперони и Страккино (мягкий сыр)",
    //             price: 400,
    //             img: "/images/Pizza/pizza_11.jpg",
    //             _id: "jngfjnthg"
    //         },
    //         {
    //             title: "Эмилиана",
    //             description: "Томатный соус, моцарелла, баклажаны, отварной картофель и колбаса",
    //             price: 400,
    //             img: "/images/Pizza/pizza_12.jpg",
    //             _id: "hgjthgjt"
    //         },
    //         {
    //             title: "Римская",
    //             description: "Томатный соус, моцарелла, анчоусы, каперсы и орегано",
    //             price: 400,
    //             img: "/images/Pizza/pizza_13.jpg",
    //             _id: "jhktghfrd"
    //         },
    //         {
    //             title: "Красный тигр",
    //             description: "Сыр моцарелла, колбаса пепперони, аукцион, сабнавтика и щепотка тупняка",
    //             price: 400,
    //             img: "/images/Pizza/pizza_15.jpg",
    //             _id: "jghdhgd"
    //         },
    //         {
    //             title: "Скьяччата",
    //             description: "Оливковое масло и розмарин",
    //             price: 400,
    //             img: "/images/Pizza/pizza_1.png",
    //             _id: "kjhgtdggh"
    //         },
    //         {
    //             title: "Прошутто",
    //             description: "Томатный соус, моцарелла, ветчина, орегано",
    //             price: 400,
    //             img: "/images/Pizza/pizza_14.jpg",
    //             _id: "hgfjtdhd"
    //         },
    //         {
    //             title: "Американо",
    //             description: "Томатный соус, моцарелла, колбаса и картофель фри",
    //             price: 400,
    //             img: "/images/Pizza/pizza_1.png",
    //             _id: "jryjhgkmk"
    //         },
    //         {
    //             title: "Прошутто и грибы",
    //             description: "Томатный соус, моцарелла, ветчина, грибы",
    //             price: 400,
    //             img: "/images/Pizza/pizza_1.png",
    //             _id: "jgfsertfgh"
    //         },
    //         {
    //             title: "Папайя",
    //             description: "Моцарелла, шпинат, сыр рикотта и пармезан",
    //             price: 400,
    //             img: "/images/Pizza/pizza_1.png",
    //             _id: "kljhgkjg"
    //         },
    //         {
    //             title: "Сардиния",
    //             description: "Томатный соус, моцарелла, сыр пекорино и острая салями",
    //             price: 400,
    //             img: "/images/Pizza/pizza_1.png",
    //             _id: "vcsfdghjghs"
    //         }
    //     ];
    // }

    getActions(): ActionInterface[] {
        return [
            {
                title: "Акция",
                description: "Пепперони x2",
                text: "Вводите промокод ПЕПЕ для выгодной покупки двух пепперони по цене одной.",
                clickable: true,
                img: "/images/Pizza/action_2.jpg",
                _id: "dwqdqwd"
            },
            {
                title: "Новинка",
                description: "Пицца Красный Тигр",
                clickable: false,
                img: "/images/Pizza/action_3.jpg",
                _id: "gegre"
            }
        ];
    }
}