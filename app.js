
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
            {
                name: "Pietro",
                attack: "Urlo Euforico",
                image: "images/pietro.png",
            },
        ],
        chose: "-1",
        players: [
            {
                name: "",
                attack: "",
                image: "",
                health: 100,
            },

            {
                name: "",
                attack: "",
                image: "",
                health: 100,
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
        },

        fight: function() {
            setInterval(function(){

            }, 2000);
            while(this.players[1].health>0 && this.players[0].health>0)
            {
                //Player 1 attacks Player 2
                var life = Math.floor(Math.random() * 60) + 1;
                this.players[1].health -= life;
                alert(this.players[0].name + " ha utilizzato " + this.players[0].attack + " contro " + this.players[1].name + "!");

                //Player 2 attacks Player 1
                var life = Math.floor(Math.random() * 60) + 1;
                this.players[0].health -= life;
                alert(this.players[1].name + " ha utilizzato " + this.players[1].attack + " contro " + this.players[0].name + "!");

                if(this.players[0].health<0)
                    this.players[0].health = 0;

                if(this.players[1].health<0)
                    this.players[1].health = 0;
                
            }

            if(this.players[0].health<=0)
            {
                alert(this.players[1].name + " ha vinto una canna da Filippo!");
            }
            else if(this.players[1].health<=0)
            {
                alert(this.players[0].name + " ha vinto una canna da Filippo!");
            } 
        },

        nascondi: function() {
            $("#choose").addClass("nascondi");
            $("#startGame").addClass("nascondi");
            $("#reset").addClass("nascondi");
        },

        togliNascondi: function(){
            $(".health-bar").removeClass("nascondi");
        }
    }
});

