new Vue({
    el: '#app',
    data: {
        //players
        foxes: [
            {
                name: "Matteo",
                attack: "Hype Lamento",
                image: "images/matteo.png",
            },

            {
                name: "Daniele",
                attack: "Tecnica Marketing Superiore",
                image: "images/daniele.png",
            },
        ],
        chose: "-1",
        players: [
            {
                name: "",
                attack: "",
                image: "",
            },

            {
                name: "",
                attack: "",
                image: "",
            },
        ]
    },
    methods: {
        mostra: function(fox) {
            this.chose++;
            if(this.chose===0)
            {
                this.players[0].name = fox.name; 
                this.players[0].attack = fox.attack;
                this.players[0].image = fox.image; 
            }
            if(this.chose===1)
            {
                this.players[1].name = fox.name; 
                this.players[1].attack = fox.attack;
                this.players[1].image = fox.image; 
            }
        },
        reset: function() {
            this.players = [
                {
                    name: "",
                    attack: "",
                    image: "",
                },
    
                {
                    name: "",
                    attack: "",
                    image: "",
                },
            ];
            this.chose = "-1";
        }
    }
});