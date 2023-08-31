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
    image: '../frontend/asset/merchent.svg'
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
    image: '../frontend/asset/merchent.svg'
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
    image: '../frontend/asset/merchent.svg'
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
    image: '../frontend/asset/merchent.svg'
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
            <div class="power">Power: <span id="powerMonster">${data[obj]['monster']['power']}</span></div>
            <div class="roll">Roll: <span id="rollMonster">0</span></div>
            <div class="totalPower">TotalPower: <span id="totalMonster">0</span></div>
          </div>
        `;
        fightRight.insertAdjacentHTML('beforeend', powerBattleHTML);
        let rollUsr = document.getElementById("rollUser")
        rollUsr.innerHTML = 0
        let powerMan = document.getElementById("totalUser")
        powerMan.innerHTML = 0
        break
      }
    }
  }
}

function randomRoll(){
  let randomNumber = Math.floor(Math.random()*6)+1
  return randomNumber
}

function totalPower(power, roll) {
  let totalPower = power + roll
  return totalPower
}

function combat(event) {
  let randomUser = randomRoll()
  let randomMonster = randomRoll()
  
  // get roll value
  let rollMan = document.getElementById("rollUser")
  rollMan.innerHTML = randomUser
  let rollMon = document.getElementById("rollMonster")
  rollMon.innerHTML = randomMonster

  // get result totalPower
  let getPowerMon = document.getElementById("powerMonster")
  let powerMan = totalPower(human['power'],randomUser)
  let powerMon = totalPower(Number(getPowerMon.innerText),randomMonster)
  
  // update totalPower
  let updatePowerMan = document.getElementById("totalUser")
  updatePowerMan.innerHTML = powerMan
  let updatePowerMon = document.getElementById("totalMonster")
  updatePowerMon.innerHTML = powerMon






  // let monsterRoll = document.getElementById("rollMonster")
  // let monsterInput = rollMonster()
  // monsterRoll.innerHTML = monsterInput

  // let userRoll = document.getElementById("rollUser") 
  // let userInput = rollUser()
  // userRoll.innerHTML = userInput
  
  // let userTotal = document.getElementById("totalUser")
  // userTotal.innerHTML = totalUser(humanPower, userInput)

  // let monsterTotal = document.getElementById("totalMonster") 
  // monsterTotal.innerHTML = totalMonster(monsterPower, monsterInput)

  // let resultDisplay = document.getElementById("display")
  // let powerBattleHTML = `
  //     <div class="info">
  //       <div>TOTAL HUMAN</div>
  //       <div>vs</div>
  //       <div>TOTAL GOBLIN</div>
  //     </div>
  //     <div class="result">
  //       <div id="result">MENANG</div>
  //       <div id="reward">GOLD + 5</div>
  //     </div>
  // `;  
  // resultDisplay.insertAdjacentHTML('beforeend', powerBattleHTML);
  // document.getElementById("battle").removeEventListener("click", combat);

}
/// INI FUNCTION BATTLE

function main(){
  document.getElementById("toggleButton").addEventListener("click", clickImage);
  document.getElementById("battle").addEventListener("click", combat);
  document.getElementById("powerUser").innerHTML = human['power']
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






