let data = {
  1:{
    image: '../frontend/asset/shop.svg'
  }
  2:{
    image: 'foto'
  }
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

function handleImageButtonClick(event) {
  if (event.target.tagName === "IMG") {
    let buttonId = event.target.parentElement.id;
    let fightRight = document.getElementById('fight-right');
    fightRight.innerHTML = '';
    let newImage = document.createElement("img");
    if (buttonId === "1") {
      newImage.src = "../frontend/asset/shop.svg";
    } else if (buttonId === "2") {
      newImage.src = "../frontend/asset/hutan.svg";
    }
    fightRight.appendChild(newImage);
  }
}

function main(){
  document.getElementById("toggleButton").addEventListener("click", handleImageButtonClick);
}

window.addEventListener("load", function() {
  // render();
  // addImage()
  main()
});


