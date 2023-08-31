let data = {
  1:{
    image: '../frontend/asset/goblin.svg'
  },
  2:{
    image: 'foto'
  },
  3:{
    image: '../frontend/asset/goblin.svg'
  },
  4:{
    image: '../frontend/asset/goblin.svg'
  },
  5:{
    image: '../frontend/asset/goblin.svg'
  },
  6:{
    image: 'foto'
  },
  7:{
    image: '../frontend/asset/ork.svg'
  },
  8:{
    image: '../frontend/asset/ork.svg'
  },
  9:{
    image: 'foto'
  },
  10:{
    image: '../frontend/asset/undead.svg'
  },
  11:{
    image: '../frontend/asset/undead.svg'
  },
  12:{
    image: '../frontend/asset/undead.svg'
  },
  13:{
    image: 'foto'
  },
  14:{
    image: '../frontend/asset/dragon.svg'
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
      if (buttonId === obj) {
        console.log(obj)
        newImage.src = data[obj]['image'];
        fightRight.appendChild(newImage);    
      }
    }
//  else if (buttonId === "2") {
//     //   newImage.src = "../frontend/asset/hutan.svg";
//     // }

  }
}

// function clickButton(){
//   let a=document.getElementById('')
// }

function main(){
  document.getElementById("toggleButton").addEventListener("click", clickImage);
  // render();
}

function battle() {

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