let data = {
  1:{
    image: '../frontend/asset/goblin.svg',
    monster: {
        power: 2,
        rewardGold: 5,
        rewardPower: 1
    },
  },
  2:{
    image: 'foto'
  },
  3:{
    image: '../frontend/asset/goblin.svg',
    monster: {
        power: 2,
        rewardGold: 5,
        rewardPower: 1
    },
  },
  4:{
    image: '../frontend/asset/goblin.svg',
    monster: {
        power: 2,
        rewardGold: 5,
        rewardPower: 1
    },
  },
  5:{
    image: '../frontend/asset/goblin.svg',
    monster: {
        power: 2,
        rewardGold: 5,
        rewardPower: 1
    },
  },
  6:{
    image: 'foto'
  },
  7:{
    image: '../frontend/asset/ork.svg',
    monster: {
        power: 5,
        rewardGold: 7,
        rewardPower: 2
    },
  },
  8:{
    image: '../frontend/asset/ork.svg',
    monster: {
        power: 5,
        rewardGold: 7,
        rewardPower: 2
    },
  },
  9:{
    image: 'foto'
  },
  10:{
    image: '../frontend/asset/undead.svg',
    monster: {
        power: 7,
        rewardGold: 10,
        rewardPower: 4
    }
  },
  11:{
    image: '../frontend/asset/undead.svg',
    monster: {
        power: 7,
        rewardGold: 10,
        rewardPower: 4
    }
  },
  12:{
    image: '../frontend/asset/undead.svg',
    monster: {
        power: 7,
        rewardGold: 10,
        rewardPower: 4
    }
  },
  13:{
    image: 'foto'
  },
  14:{
    image: '../frontend/asset/dragon.svg',
    monster: {
        health: 15,
        power: 12
    }
  },
}


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

var monsterPower = 0

function clickImage(event) {
  if (event.target.tagName === "IMG") {
    let buttonId = event.target.parentElement.id;
    let fightRight = document.getElementById('fight-right');
    fightRight.innerHTML = '';
    for(let obj in data){
      let newImage = document.createElement("img");
      if (buttonId == obj) {
        newImage.src = data[obj]['image'];
        fightRight.appendChild(newImage);
        let powerBattleHTML = `
          <div class="powerBattle">
            <div class="power">Power: ${data[obj]['monster']['power']}</div>
            <div class="roll">Roll: <span id="rollMonster">0</span></div>
            <div class="totalPower">TotalPower: <span id="totalMonster">0</span></div>
          </div>
        `;
        fightRight.insertAdjacentHTML('beforeend', powerBattleHTML);
        monsterPower = data[obj]["monster"]["power"]
        break
      }
    }
  }
}
console.log(monsterPower)
/// INI FUNCTION BATTLE
// let user = {
//   power: 5
// }
// let monster={
//   power :3
// }

function rollUser(){
  let randomNumber = Math.floor(Math.random()*6)+1
  return randomNumber
}

function rollMonster(){
  let randomNumber = Math.floor(Math.random()*6)+1
  return randomNumber
}

// function battle(user , monster){
  
//   let userPower =battleuser(user)
//   let monsterPower =battlemonster(monster)
  
//   console.log(userPower , monsterPower )
//   if(userPower > monsterPower){
//       return "Menang"
//   }else if(userPower < monsterPower){
//       return "Kalah"
//   }else if(userPower === monsterPower){
//       return 'Draw'
//   }
// }

let humanPower = human["power"]

function totalUser(humanPower, userRoll) {
  let totalHuman = humanPower + userRoll
  return totalHuman
}

function totalMonster(monsterPower, monsterRoll) {
  let totalMonster = monsterPower + monsterRoll
  return totalMonster
}

function combat(event) {
  let monsterRoll = document.getElementById("rollMonster")
  let monsterInput = rollMonster()
  monsterRoll.innerHTML = monsterInput

  let userRoll = document.getElementById("rollUser") 
  let userInput = rollUser()
  userRoll.innerHTML = userInput
  
  let userTotal = document.getElementById("totalUser")
  userTotal.innerHTML = totalUser(humanPower, userInput)

  let monsterTotal = document.getElementById("totalMonster") 
  monsterTotal.innerHTML = totalMonster(monsterPower, monsterInput)

  let resultDisplay = document.getElementById("display")
  let powerBattleHTML = `
    
      <div class="info">
        <div>TOTAL HUMAN</div>
        <div>vs</div>
        <div>TOTAL GOBLIN</div>
      </div>
      <div class="result">
        <div id="result">MENANG</div>
        <div id="reward">GOLD + 5</div>
      </div>

`;  
resultDisplay.insertAdjacentHTML('beforeend', powerBattleHTML);
console.log(monsterRoll);
}
/// INI FUNCTION BATTLE

function main(){
  document.getElementById("toggleButton").addEventListener("click", clickImage);
  document.getElementById("battle").addEventListener("click", combat);
  document.getElementById("powerUser").innerHTML = human["power"]
}



window.addEventListener("load", function() {
  main()
});



// function addImage(){
//   let image = document.getElementById('fight-right')
//   console.log(image)
// }
let found = false
// function addImageOnce() {
//   let image = document.getElementById('fight-right');
//   let newImage = document.createElement("img");
//   newImage.src = "../frontend/asset/shop.svg";
//   image.appendChild(newImage);

//   // Hapus event listener setelah dijalankan
//   document.getElementById("toggleButton2").removeEventListener("click", addImageOnce);
//   let buttonElement = document.querySelector("#toggleButton2 button");
//   let buttonId = buttonElement.getAttribute("id");
//   console.log("Nilai id dari elemen button:", buttonId);
// }

// document.getElementById("toggleButton").addEventListener("click", addImageOnce);
// document.getElementById("toggleButton2").addEventListener("click", addImageOnce);

// document.getElementById("toggleButton").addEventListener("click", function(event) {
//   if (event.target.tagName === "IMG") {
//     let buttonId = event.target.parentElement.id;
//     let fightRight = document.getElementById('fight-right');
//     fightRight.innerHTML = '';
//     let newImage = document.createElement("img");
//     if (buttonId === "1") {
//       newImage.src = "../frontend/asset/shop.svg";
//     } else if (buttonId === "2") {
//       newImage.src = "../frontend/asset/hutan.svg";
//     }
//     fightRight.appendChild(newImage);
//   }
// });






