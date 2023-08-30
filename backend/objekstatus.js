let human = {
    health: 10,
    power: 5,
    gold: 20
}

/*
PAKAI REWARD POWER KALAU SHOPNYA GAJADI
JADI REWARD BATTLENYA LANGSUNG EXTRA POWER
*/

//MONSTER--------------------------------
let monster = {
    goblin: {
        power: 2,
        rewardGold: 5,
        rewardPower: 1
    },
    
    orc: {
        power: 5,
        rewardGold: 7,
        rewardPower: 2
    },
    
    undead: {
        power: 7,
        rewardGold: 10,
        rewardPower: 4
    }
}

/*
    KHUSUS BOSS ADA HEALTHNYA JADI SELAMA HEALTH BOSS MASIH ADA, BATTLE TERUS SISTEMNYA TURN BASED
    SAMA KAYAK HUMAN (HEALTH AKHIR = HEALTH - SELISIH POWER)
*/
let boss = {
    health: 15,
    power: 12,
}
//MONSTER--------------------------------

//ITEM-----------------------------------
let item = {
    // PRICE 30 BIAR AWAL GAME GA LANGSUNG UPGRADE
    senjata: {
        price: 30,
        extraPower: 1
    },

    potion: {
        price: 10,
        extraHealth: 1
    }
}
//ITEM-----------------------------------



function render() {
  let nama = prompt("Silahkan masukkan nama user")
  let userName = document.getElementById("userName");
  userName.innerText = nama;

  let health = document.getElementById("health");
  health.innerText = human.health;

  let gold = document.getElementById("gold");
  gold.innerText = human.gold;

  let power = document.getElementById("power");
  power.innerText = human.power;
}

window.addEventListener("load", function() {
  render();
});


