let vasya = document.querySelector("#vasya")
let character = "vasya"

let language = "en"

let bogdanBuy = false
let antonBuy = false

let codenoe = false

let clicksound = new Audio()
clicksound.src = "./sound/click.mp3"
let hitsound = new Audio()
hitsound.src = "./sound/hit.mp3"
let tada = new Audio()
tada.src = "./sound/tada.mp3"
let vvv = new Audio()
vvv.src = "./sound/vvv.mp3"

let clicks = 0
let coins = 0

function piska(){
    vasya.src = "./img/avatars/avatar.png"
    if(coins == 0){
        coins += 10
        document.getElementsByClassName("coins")[0].innerHTML = coins
    }
}

function vasyaBack(){
    if(character == "vasya"){
        vasya.src = "./img/vasya/vasya.png"
    } else if(character == "bogdan"){
        vasya.src = "./img/bogdan/bogdan.png"
    } else if(character == "anton"){
        vasya.src = "./img/anton/anton.png"
    }
}

function vasyaAngry(){
    hitsound.play()
    clicks += 1
    coins += 0.5
    document.getElementsByClassName("score")[0].innerHTML = clicks
    document.getElementsByClassName("coins")[0].innerHTML = coins
    if(character == "vasya"){
        vasya.src = "./img/vasya/zloyvasya.png"
        setTimeout(vasyaBack, 1000)
    } else if(character == "bogdan"){
        vasya.src = "./img/bogdan/zloybogdan.png"
        setTimeout(vasyaBack, 1000)
    } else if(character == "anton"){
        vasya.src = "./img/anton/zloyanton.png"
        setTimeout(vasyaBack, 1000)
    }
}

function equipVasya(){
    character = "vasya"
}

function equipBogdan(){
    if(bogdanBuy == false){
        if(coins <= 1000){
            alert("no enough vasyacoins go away nooby!!!!1!!")
            document.getElementById("nope").textContent = "no enough vasyacoins go away nooby!!!!1!!"
        } else if(coins == 1000){
            alert("yeeee new character bogdan!!1!!")
            document.getElementById("nope").textContent = "yeee new character bogdan!!!!1!!"
            coins -= 1000
            document.getElementsByClassName("coins")[0].innerHTML = coins
            bogdanBuy = true
            character = "bogdan"
        } else if(coins >= 1000){
            alert("yeeee new character bogdan!!1!!")
            document.getElementById("nope").textContent = "yeee new character bogdan!!!!1!!"
            coins -= 1000
            document.getElementsByClassName("coins")[0].innerHTML = coins
            bogdanBuy = true
            character = "bogdan"
        }
    } else if(bogdanBuy == true){
        character = "bogdan"
    }
}

function equipAnton(){
    if(antonBuy == false){
        if(coins <= 1000){
            alert("no enough vasyacoins go away nooby!!!!1!!")
            document.getElementById("nope").textContent = "no enough vasyacoins go away nooby!!!1!!"
        } else if(coins == 1000){
            alert("yeeee new character anton!!1!!")
            document.getElementById("nope").textContent = "yeee new character anton!!!!1!!"
            coins -= 1000
            document.getElementsByClassName("coins")[0].innerHTML = coins
            antonBuy = true
            character = "anton"
        } else if(coins >= 1000){
            alert("yeeee new character anton!!1!!")
            document.getElementById("nope").textContent = "yeee new character anton!!!!1!!"
            coins -= 1000
            document.getElementsByClassName("coins")[0].innerHTML = coins
            antonBuy = true
            character = "anton"
        }
    } else if(antonBuy == true){
        character = "anton"
    }
}

function annoyingmodetoggle(){
    if(document.getElementById("annoyingmode").textContent == "false"){
        document.getElementById("annoyingmode").textContent = "true"
        coins -= 1000000
        clicks -= 1000000
    } else if(document.getElementById("annoyingmode").textContent == "true"){
        document.getElementById("annoyingmode").textContent = "false"
        coins = 0
        clicks = 0
    }
}

function languagechange(){
    if(document.getElementById("languagetoggle").textContent == "en"){
        document.getElementById("languagetoggle").textContent = "ru"
        document.getElementById("clcks").textContent = "Клики: "
        document.getElementById("vscons").textContent = "ВасяКоины: "
        document.getElementById("settgs").textContent = "Настройки"
        document.getElementById("annoy").textContent = "Надоедливый режим: "
        document.getElementById("mutechang").textContent = "Заглушить звук:  "
        document.getElementById("lang").textContent = "Язык: "
        document.getElementById("rst").textContent = "Сбросить данные."
        document.getElementById("shps").textContent = "Магазин Васи"
        document.getElementById("vsyab").textContent = "Вася. "
        document.getElementById("bogdb").textContent = "Богдан. "
        document.getElementById("antb").textContent = "Антон. "
        document.getElementById("avts").textContent = "Аватары"
    } else if(document.getElementById("languagetoggle").textContent == "ru"){
        document.getElementById("languagetoggle").textContent = "ua"
        document.getElementById("clcks").textContent = "Кліки: "
        document.getElementById("vscons").textContent = "ВасильКоїни: "
        document.getElementById("settgs").textContent = "Налаштування"
        document.getElementById("annoy").textContent = "Набридливий режим: "
        document.getElementById("mutechang").textContent = "Заглушити звук:  "
        document.getElementById("lang").textContent = "Мова: "
        document.getElementById("rst").textContent = "Збросити дані."
        document.getElementById("shps").textContent = "Магазин Василя"
        document.getElementById("vsyab").textContent = "Василь. "
        document.getElementById("bogdb").textContent = "Богдан. "
        document.getElementById("antb").textContent = "Антон. "
        document.getElementById("avts").textContent = "Аватари"
    } else if(document.getElementById("languagetoggle").textContent == "ua"){
        document.getElementById("languagetoggle").textContent = "en"
        document.getElementById("clcks").textContent = "Clicks: "
        document.getElementById("vscons").textContent = "VasyaCoins: "
        document.getElementById("settgs").textContent = "Settings"
        document.getElementById("annoy").textContent = "Annoying mode: "
        document.getElementById("mutechang").textContent = "Mute Sound:  "
        document.getElementById("lang").textContent = "Language: "
        document.getElementById("rst").textContent = "Reset data."
        document.getElementById("shps").textContent = "Vasya Shop"
        document.getElementById("vsyab").textContent = "Vasya. "
        document.getElementById("bogdb").textContent = "Bogdan. "
        document.getElementById("antb").textContent = "Anton. "
        document.getElementById("avts").textContent = "Avatars"
    }
}

function mutechange(){
    if(document.getElementById("mutetoggle").textContent == "false"){
        document.getElementById("mutetoggle").textContent = "true"
        clicksound.src = "./sound/empty.wav"
        hitsound.src = "./sound/empty.wav"
        tada.src = "./sound/empty.wav"
        vvv.src = "./sound/empty.wav"
    } else if(document.getElementById("mutetoggle").textContent == "true"){
        document.getElementById("mutetoggle").textContent = "false"
        clicksound.src = "./sound/click.mp3"
        hitsound.src = "./sound/hit.mp3"
        tada.src = "./sound/tada.mp3"
        vvv.src = "./sound/vvv.mp3"
    }
}

function reset(){
    coins = 0
    clicks = 0
    bogdanBuy = false
    antonBuy = false
    character = "vasya"
}
function codeprompt(){
    clicksound.play()
    let code
    if(document.getElementById("languagetoggle").textContent == "en"){
        code = prompt("enter a code:")
    } else if(document.getElementById("languagetoggle").textContent == "ru"){
        code = prompt("введите код:")
    } if(document.getElementById("languagetoggle").textContent == "ua"){
        code = prompt("введіть код:")
    }
    if(code == 111111111){
        vvv.play()
    } else if(code == 999333666){
        document.querySelector("#sigmascreen").style.display = "block"
    } else if(code == 316978342){
        document.querySelector("#matrixscreen").style.display = "block"
    }
}

document.getElementById("loadscreen").addEventListener('animationend', () => {
    document.getElementById("loadscreen").style.display = 'none';
})
