const users = [
    {
        id: "23i4g6243",
        name: "Laith Harb",
        email: "harblaith@example.com",
        age: 23,
        weight: 172.4,
        height: 72,
        wantsToLoseWeight: true
    },
    {
        id: "6fkgs849",
        name: "Matteo Wade",
        email: "mattwade@example.com",
        age: 27,
        weight: 152.4,
         height: 70,
        wantsToLoseWeight: false
    },
    {
        id: "hd77s384",
        name: "Emily Jaken",
        email: "emily@example.com",
        age: 19,
        weight: 192.4,
        height: 75,
        wantsToLoseWeight: true
    }
]

const tabs = [
    {
        id: "fasf35",
        name: "Ice Cream",
        calories: 430.5,
        fats: 25.3,
        carbs: 50.2,
        protiens: 5.3,
        sugar: 45.3,
        user: "6fkgs849",
    },
    {
        id: "dasd44a",
        name: "Egg Omelette",
        calories: 530.5,
        fats: 27.3,
        carbs: 5.2,
        protiens: 30.3,
        sugar: 1.3,
        user: "23i4g6243",
    },
    {
        id: "86lfs22",
        name: "Lentil Soup",
        calories: 230.5,
        fats: 1.3,
        carbs: 15.2,
        protiens: 7.5,
        sugar: 0.5,
        user: "23i4g6243",
    },
]

const reactions = [
   {
    id: "65lla2",
    emoji: "proud",
    user: "hd77s384",
    tab: "dasd44a"
   },
   {
    id: "64ggla2",
    emoji: "disappointed",
    user: "hd77s384",
    tab: "dasd44a"
   },
   {
    id: "hd77s384",
    emoji: "suprised",
    user: "23i4g6243",
    tab: "dasd44a"
   },
]

const db = {
    users,
    tabs,
    reactions
}

export default db
