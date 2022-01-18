const faker = require("faker");

const heroNames = [
    'Spider Man',	'Captain America',	'Thor',
'Iron Man',	'The Hulk',	'Doctor Strange',
'Daredevil',	'Wolverine',	'Black Panther', 'Gor Vardanyan'
];


let heroes = [];
let villains = [];

let setPower = () => Math.floor((Math.random() * 10) + 1);
let setSpeed = () => Math.floor((Math.random() * 5) + 1);

let winner;

class Fighter {
    constructor(name, team, health, power, speed) {
        this.name = name;
        this.team = team;
        this.health = health;
        this.power = power;
        this.speed = speed;
    }

    chooseEnemyIndex = function(enemy) {
        return Math.floor((Math.random() * enemy.length));
    }

    attack = function(enemy) {
        //check enemy team is not dead
        if (!enemy.length) {
            winner = this.team;
            console.log(`${winner} won`);
            return;
        }

        //check fighter is not dead
        if (this.health <= 0) {
            return;
        }

        //hit enemy
        const enemyIndex = this.chooseEnemyIndex(enemy);
        console.log(`${this.name}[${this.health}] attacked ${enemy[enemyIndex].name}[${enemy[enemyIndex].health}] with power ${this.power}`)
        enemy[enemyIndex].health -= this.power;

        //check if enemy is dead
        if (enemy[enemyIndex].health <= 0) {
            console.log(`${enemy[enemyIndex].name} died`)
            enemy.splice(enemyIndex,1);
        }

        //wait for the next attack
        setTimeout(() => {this.attack(enemy)}, 5000/this.speed);
    }
}

for (let i = 0; i < 10; i++) {
    heroes.push(new Fighter (
        heroNames[i],
        "HEROES",
        100,
        setPower(),
        setSpeed()
    ));

    villains.push(new Fighter (
        faker.name.firstName() + " " + faker.name.lastName(),
        "VILLAINS",
        100,
        setPower(),
        setSpeed()
    ));
}

for (let i = 0; i < 10; i++) {
    villains[i].attack(heroes);
    heroes[i].attack(villains);
}
