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
let goblin = {
    power: 2,
    rewardGold: 5,
    rewardPower: 1
}

let orc = {
    power: 5,
    rewardGold: 7,
    rewardPower: 2
}

let undead = {
    power: 7,
    rewardGold: 10,
    rewardPower: 4
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
let senjata = {
    price: 30,
    extraPower: 1
}
// PRICE 30 BIAR AWAL GAME GA LANGSUNG UPGRADE

let potion = {
    price: 10,
    extraHealth: 1
}
//ITEM-----------------------------------