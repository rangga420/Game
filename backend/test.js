let user = {
    power: 5
}
let monster={
    power :3
}

function battleuser(user){
    let totalpowerUser = 0
    let randomNumber = Math.floor(Math.random()*6)+1
    totalpowerUser = randomNumber + user.power
    return totalpowerUser
}
// console.log(battleuser(user))

function battlemonster(monster){
    let totalpowerMonster = 0
    let randomNumber = Math.floor(Math.random()*6)+1
    totalpowerMonster = randomNumber + monster.power
    return totalpowerMonster
}
// console.log(battlemonster(monster))

function battle(user , monster){
    
    let userPower =battleuser(user)
    let monsterPower =battlemonster(monster)
    
    console.log(userPower , monsterPower )
    if(userPower > monsterPower){
        return "Menang"
    }else if(userPower < monsterPower){
        return "Kalah"
    }else if(userPower === monsterPower){
        return 'Draw'
    }

    
}
let Gilbert = {
    power: 5
}
let Goblin={
    power :3
}
console.log(battle(Gilbert , Goblin))