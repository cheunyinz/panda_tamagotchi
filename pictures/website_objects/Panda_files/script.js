//VAR

var pandaImg, bambooImg
pandaImg = document.querySelector('#panda')
bambooImg = document.querySelector('#bamboo')
redtshirtImg = document.querySelector('#red_tshirt')

var naamInput = document.querySelector('#name_input')

var greetingText = document.querySelector('#greeting_text')

var textBox = document.querySelector('#food_thanks_text')

var foreGround = document.querySelector('#foreground')

var tutorialButton = document.querySelector('#question_mark')

var tutorialText = document.querySelector('#tutorial')

var standingTimer = false


// Hunger bar
var hungerBarsImg = ['hunger_bar_0.png', 'hunger_bar_1.png', 'hunger_bar_2.png', 'hunger_bar_3.png', 'hunger_bar_4.png', 'hunger_bar_5.png', 'hunger_bar_6.png', 'hunger_bar_7.png', 'hunger_bar_8.png', 'hunger_bar_9.png', 'hunger_bar_10.png']
var hungerBar = document.querySelector('#hunger_bar')
var hungerPoints = 1
hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]
var hupText = document.querySelector('#hupoints')
var hungerbarInterval = null
var eatingAudio = document.querySelector('#eating_audio')

//Happennis bar
var happennisBarsImg = ['happennis_bar_0.png', 'happennis_bar_1.png', 'happennis_bar_2.png', 'happennis_bar_3.png', 'happennis_bar_4.png', 'happennis_bar_5.png', 'happennis_bar_6.png', 'happennis_bar_7.png', 'happennis_bar_8.png', 'happennis_bar_9.png', 'happennis_bar_10.png']
var happennisBar = document.querySelector('#happennis_bar')
var happennisPoints = 1
happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
var hapText = document.querySelector('#hapoints')
var happennisInterval = null

//FUNCTIONS

function addingtextbox() {
    textBox.classList.add("text_box")
    textBox.classList.remove("disappear")
}

function pandaeating() {
    hungerPoints = hungerPoints + 1
    if (hungerPoints > 10) {
        hungerPoints = hungerBarsImg.length - 1
        pandarefusingfood();
    } else {
        pandaImg.src = './pictures/panda/panda_eating.png';
        setTimeout(pandathankingfood, 1800)
        bambooImg.classList.add ('disappear')
        setTimeout (showbamboo, 1800)
        eatingAudio.currentTime = 0;
        eatingAudio.play();
        hupText.textContent = hungerPoints
    }

    hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]

    if (hungerbarInterval == null) {
        hungerbarInterval = setInterval(() => {
            pandagettinghungry();
        }, 100000);
    }
}

function showbamboo(){
    bambooImg.classList.remove ('disappear')
    setTimeout
}

function pandagettinghungry() {
    hungerPoints = hungerPoints - 1
    if (hungerPoints < 0) {
        hungerPoints = 0
    }
    if (hungerPoints == 0) {
        textBox.textContent = 'Ik lus wel wat bamboo' + ' ' + naamInput.value + '!'
        addingtextbox();
        pandaImg.src = './pictures/panda/panda_test.png'
    }
    hungerBar.src = './pictures/website_objects/hunger_bar/' + hungerBarsImg[hungerPoints]
    hupText.textContent = hungerPoints
}

function pandathankingfood() {
    pandaImg.src = './pictures/panda/panda_default.png'
    textBox.textContent = 'Thanks voor de bamboo' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(pandastoptalking, 3000)
}

function pandarefusingfood() {
    pandaImg.src = './pictures/panda/panda_default.png'
    textBox.textContent = 'Ik ben vol' + ' ' + naamInput.value + ' ' + '!';
    addingtextbox();
    setTimeout(pandastoptalking, 3000)
}

function pandastoptalking() {
    textBox.classList.add('disappear')
}

function pandadefault() {
    pandaImg.src = './pictures/panda/panda_default.png';
    textBox.classList.add('disappear')
}

function pandagreeting() {
    textBox.textContent = 'Hallo' + ' ' + naamInput.value + ' ' + '!';
    textBox.classList.add('text_box');
    pandaImg.src = './animated/panda_waving.png';
    naamInput.classList.add('disappear')
    setTimeout(pandadefault, 1800)
    foreGround.classList.remove('foregroundstyle')

}

function keyevents(event) {
    var key = event.key;
    if (key == 'w') {
        if (hungerPoints == 0) {
            textBox.textContent = 'Ik heb geen energie!'
            addingtextbox();
        } else {
            pandajumping();
            pandagettinghappy();
            pandagettinghungry();
            pandaImg.src = './pictures/panda/panda_jumping.png'
        }
    }
    //TIJDELIJK//
    if (key == '-') {
        pandagettinghungry();
    }

    if (key == '=') {
        pandaeating();
    }

    if (key == 'p') {
        pandagettinghappy();
    }

    if (key == 'o') {
        pandagettingbored();
    }
}
//TIJDELIJK//

function pandagettinghappy() {
    happennisPoints = happennisPoints + 1
    hapText.textContent = happennisPoints
    if (happennisPoints > 9) {
        happennisPoints = happennisBarsImg.length - 1
        console.log("test")
    }

    if (happennisInterval == null) {
        happennisInterval = setInterval(() => {
            pandagettingbored();
        }, 100000);
    }
    happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
}

function pandagettingbored() {
    happennisPoints = happennisPoints - 1
    hapText.textContent = happennisPoints
    happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
    if (happennisPoints < 0) {
        happennisPoints = 0
        happennisBar.src = './pictures/website_objects/happennis_bar/' + happennisBarsImg[happennisPoints]
    }

    if (happennisPoints == 0) {
        textBox.textContent = 'Ik verveel me' + ' ' + naamInput.value + '!'
        addingtextbox();
        pandaImg.src = './pictures/panda/panda_test.png'
    }
}


function pandajumping() {
    if (hungerPoints == 0) {
        pandadefault();
    } else {
        pandaImg.src = './pictures/panda/panda_jumping.png';
        setTimeout(() => pandaImg.src = './pictures/panda/panda_standing_default.png', 800);
        pandastanding();
        pandaImg.classList.add('jump')
        setTimeout(() => pandaImg.classList.remove('jump'), 800);
    }
}

function pandastanding() {
    if (standingTimer == false) {
        standingTimer = true
        setTimeout(() => pandaImg.src = './pictures/panda/panda_default.png', 8000);
        setTimeout(() => standingTimer = false, 8000);
        console.log(standingTimer)
    }
}

function showtutorial() {
    tutorialText.classList.toggle('disappear')
    if (tutorialButton.getAttribute('src') === "./pictures/website_objects/tutorial_button/question_button.png") {
        tutorialButton.src = "./pictures/website_objects/tutorial_button/close_button.png"
    } else {
        tutorialButton.src = "./pictures/website_objects/tutorial_button/question_button.png"
    }
}

//ADDEVENTLISTENER

naamInput.addEventListener('change', pandagreeting);

bambooImg.addEventListener('dragend', pandaeating);

document.addEventListener('keypress', keyevents)

tutorialButton.addEventListener('click', showtutorial)