//calculate total function:
//creat function take the rate from the user and calculate the avg for each resturent 
//save the rateing data in local storeg in sitting key for each resturent.
//eventlistener: take the rate value and name of the resturent 
// total rates, avg rates , number of user who did a vote.
//way 1: add the number of stars to the total :
//add a counter dividing the total of  stares per 5 .
// add a nother counter represent the number of users who did a vote.
//
//top 3 function:
//creat function that render the higest 3 rated resturent per each categury .
//
//save the for arrais catigories in local storeg.


//creat arrays pased on different categories.
var arrayBurger = [];
var arrayShawarma = [];
var arrayPizza = [];
var arrayKhaliji = [];
var arrayofRest = [];

// creat a constructer
function Resturent(name, categury, img, location) {
    this.name = name;
    this.categury = categury;
    this.img = img;
    this.totalstars = 0;
    this.numUser = 0;
    this.location = location;
    arrayofRest.push(this);

    // totalstars represents:


    // divided the categury into different arrais
    if (categury === "burger") {
        arrayBurger.push(this);

    }
    else if (categury === "shawarma") {
        arrayShawarma.push(this);
        // return (arrayShawarma);
    }
    else if (categury === "pizza") {
        arrayPizza.push(this);

    }
    else {
        arrayKhaliji.push(this);

    }
    //end divided 
    arrayRate = [arrayBurger, arrayShawarma, arrayPizza, arrayPizza];
}
Resturent.prototype.avgRate = function () {
    return (this.totalstars / this.numUser);
}



var burgerMakers = new Resturent("Burger Makers", "burger", "makers.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.159104868022!2d35.9282796211926!3d31.956580081319437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f902a776333%3A0xf8256a49625a85c4!2sBurger%20Makers%20-%20Jabal%20Al%20Waibdeh!5e0!3m2!1sar!2sjo!4v1611142809977!5m2!1sar!2sjo");
var fireflyBurger = new Resturent("Firefly Burger", "burger", "firefly.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54166.18918317413!2d35.95902252089842!3d31.950401000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f8483b00047%3A0x31b1d82d5f45ba5a!2sFirefly%20Burger!5e0!3m2!1sar!2sjo!4v1611144168375!5m2!1sar!2sjo");
var fattyDabsBurger = new Resturent("Fatty Dabs Burger", "burger", "fatty.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.7141798797293!2d35.8850653855054!3d31.941516433422265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0e88115eeff%3A0xec007250807498cf!2sFatty%20Dabs%20Burger%20Shack!5e0!3m2!1sar!2sjo!4v1611144242751!5m2!1sar!2sjo");
var bunsBurger = new Resturent("Buns Burger", "burger", "buns.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54171.38410421023!2d35.91789637638328!3d31.941588998574524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1740451b111%3A0x3885a3673900758a!2sBuns%20Burger!5e0!3m2!1sar!2sjo!4v1611144307035!5m2!1sar!2sjo");
var bashBurger = new Resturent("Bash Burger", "burger", "bash.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.405107595091!2d35.88555738550511!3d31.949904833004013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0f06c4ab9e5%3A0x9ba7594d421f06c0!2sBash%20Burger!5e0!3m2!1sar!2sjo!4v1611144415700!5m2!1sar!2sjo");
var grillBurger = new Resturent("Grill Burger", "burger", "grill.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864109.0866912032!2d35.95440054729713!3d32.21969104963051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b60413cae9701%3A0xd34fc22bda9d784b!2sGrill%20Time%20Burger!5e0!3m2!1sar!2sjo!4v1611144577256!5m2!1sar!2sjo");
//shawarma resturents
var shawermaAdam = new Resturent("Shawerma Adam", "shawarma", "adam.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.3297545249702!2d35.932237050339836!3d31.900059282957187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b597d09620ca5%3A0x6759afd798fb81d6!2sShawerma%20Adam%2003!5e0!3m2!1sen!2sjo!4v1611148385066!5m2!1sen!2sjo");
var shawermaji = new Resturent("Shawermaji", "shawarma", "Shawermaji.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.4695272484764!2d35.85289208548849!3d32.540312103325405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c77f36305a5af%3A0x7cb2ac94b2343fcf!2z2LTYp9mI2LHZhdis2YogMSBTaGF3YXJtYWpl!5e0!3m2!1sar!2sjo!4v1611143539685!5m2!1sar!2sjo");
var shawermaReem = new Resturent("Shawerma Reem", "shawarma", "reem.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26907.744391131997!2d35.868213048273326!3d32.54035157202406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c768b1fbaaedb%3A0xc27cd9d7dcedb431!2z2LTYp9mI2LHZhdinINix2YrZhQ!5e0!3m2!1sar!2sjo!4v1611143625401!5m2!1sar!2sjo");
var shawermaKhanZeed = new Resturent("Shawerma Khan Zeed", "shawarma", "khan.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6727.196052231387!2d35.86401057684258!3d32.53688131910059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c76ea1d24bb21%3A0x76b0efb14c064831!2z2YXYt9i52YUg2K7Yp9mGINiy2YrYryAtIEtoYW4gWmFpZA!5e0!3m2!1sar!2sjo!4v1611143695263!5m2!1sar!2sjo");
var shawermaAlDai3a = new Resturent("Shawerma Al Dai3a", "shawarma", "dai3a.png", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.457038608661!2d35.89424168550525!3d31.94849553307417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0f32275f091%3A0xf7bab7f6fac2b4ff!2zU2hhd2VybWEgQWxkYXlhYSDYtNin2YjYsdmF2Kcg2KfZhNi22YrYudip!5e0!3m2!1sar!2sjo!4v1611143982140!5m2!1sar!2sjo");
var shawermaAsala = new Resturent("Shawerma Asala", "shawarma", "asala.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27095.16146020271!2d35.956990599301115!3d31.909445180072186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57cac9de3c198f2f!2z2LTYp9mI2LHZhdinINin2YTYo9i12KfZhNipICgyKSAtINin2YTZhdmC2KfYqNmE2YrZhg!5e0!3m2!1sar!2sjo!4v1611144051533!5m2!1sar!2sjo");
//khaliji resturents
var babelyemenelsa3ed = new Resturent("Bab elyemen elsa3ed", "khaliji", "yaman.jpg", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54152.426478321526!2d35.8886299!3d31.9737358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1a3c3410419%3A0x6811fbff9b7f8653!2z2YXYt9i52YUg2KjYp9ioINin2YTZitmF2YYg4oGm8J-RkQ!5e0!3m2!1sar!2sjo!4v1611144071420!5m2!1sar!2sjo");
var umaiaReasturant = new Resturent("Umaia Reasturant", "khaliji", "umaia.jpg", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d840.9399253690607!2d35.8786057!3d32.5325643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c766743e6750f%3A0xcb61b1c859f9c0be!2z2YXYt9i52YUg2KPZhdmK2Kk!5e0!3m2!1sar!2sjo!4v1611143932610!5m2!1sar!2sjo");
var eldardarak = new Resturent("Eldar darak", "khaliji", "dar.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1145262032423!2d31.146486884886475!3d29.976138481907196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458458a4f04b185%3A0x4452d4db00529435!2z2YXYt9i52YUg2KfZhNiv2KfYsSDYr9in2LHZgyDYp9mE2YfYsdmF!5e0!3m2!1sar!2sjo!4v1611144104597!5m2!1sar!2sjo");
var hajarAltawahin = new Resturent("Hajar Al-tawahin", "khaliji", "hajar.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.032105288883!2d35.88056148482441!3d32.52528948104869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c765b94ae61d9%3A0x7ee8da7794cf9316!2z2YXYt9i52YUg2K3YrNixINin2YTYt9mI2KfYrdmK2YYt2KfZitiv2YjZhg!5e0!3m2!1sar!2sjo!4v1611144135204!5m2!1sar!2sjo");
var qasrelmandi = new Resturent("Qasr elmandi", "khaliji", "mandi.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.162373506084!2d78.47735598512476!3d17.307713088126427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd7e2e520f29%3A0xf0f0d1903befd4d2!2sQasr%20al%20mandi!5e0!3m2!1sar!2sjo!4v1611144176911!5m2!1sar!2sjo");
var asiyadAlMandi = new Resturent("Asiyad Al Mandi", "khaliji", "asiad.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.7774967702935!2d35.86253528483755!3d31.994046681215483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1c566d722ab%3A0xbc7cebd7b8a7bc6!2sAsiyad%20Al%20Mandi%20Restaurant!5e0!3m2!1sar!2sjo!4v1611144210775!5m2!1sar!2sjo");
//pizza resturents
var pizzaHut = new Resturent("Pizza Hut", "pizza", "hut.jpeg", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27073.481783284544!2d35.8827619!3d31.982994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1b60e02bce7%3A0x75ea56624f3a4536!2sPizza%20Hut!5e0!3m2!1sar!2sjo!4v1611144262867!5m2!1sar!2sjo");
var italienPizzaHome = new Resturent("Italian pizza Home", "pizza", "italian.jpg", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108293.7363999999!2d35.9352931!3d31.9831556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b6186d0364783%3A0x3acd7b954de0cf1b!2z2KjZitiqINin2YTYqNmK2KrYstinINin2YTYp9mK2LfYp9mE2YogSXRhbGlhbiBQaXp6YSBIb21l!5e0!3m2!1sar!2sjo!4v1611144294899!5m2!1sar!2sjo");
// var bunsBurger = new Resturent("Burger Buns", "pizza");
var pizzaAlQaiser = new Resturent("Pizza Al-Qaisar", "pizza", "qaisar.jpg", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108293.43814168865!2d35.9352933!3d31.9834083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1d331c9dc2f%3A0x2d291877baf7b59b!2z2KjZitiq2LLYpyDYp9mE2YLZiti12LEg2KfZhNi12LrZitix!5e0!3m2!1sar!2sjo!4v1611144329930!5m2!1sar!2sjo");
var dominousPizza = new Resturent("Domino's Pizza", "pizza", "dominous.jpeg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.969230055861!2d35.86972668483776!3d31.988849581217075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1cc39ee271b%3A0xcc863e55287a4252!2zRG9taW5vJ3MgUGl6emEg2K_ZiNmF2YrZhtmI2LIg2KjZitiq2LLYpw!5e0!3m2!1sar!2sjo!4v1611144448044!5m2!1sar!2sjo");
var lugisPizza = new Resturent("Luigi's Pizza", "pizza", "lug.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.242622538812!2d35.89447968483866!3d31.954313981228246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0f541b6a2db%3A0x2a3c97a19fa93919!2sLuigi&#39;s%20Pizza!5e0!3m2!1sar!2sjo!4v1611144371028!5m2!1sar!2sjo");
var OliviaPizza = new Resturent("Olivia Pizza", "pizza", "olivia-pizza.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.1451030461176!2d35.928196684838525!3d31.956959981227314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f902b46a5b5%3A0x5a963520bdc36adc!2z2KPZiNmE2YrZgdin!5e0!3m2!1sar!2sjo!4v1611144412579!5m2!1sar!2sjo")
// fill arrays resturents in local storeg.
function storeArray() {
    localStorage.setItem("Burger", JSON.stringify(arrayBurger));
    localStorage.setItem("Shawarma", JSON.stringify(arrayShawarma));
    localStorage.setItem("Pizza", JSON.stringify(arrayPizza));
    localStorage.setItem("Khaliji", JSON.stringify(arrayKhaliji));
}

function checkAndRestore() {

    if (localStorage.length > 0) {

        // arrayBurger = JSON.parse(localStorage.getItem('burger'));
        // arrayShawarma = JSON.parse(localStorage.getItem('shawarma'));
        // arrayPizza = JSON.parse(localStorage.getItem('pizza'));
        // arrayKhaliji = JSON.parse(localStorage.getItem('khaligi'));
        arrayofRest = JSON.parse(localStorage.getItem('rate'));

    }

}

// checkAndRestore();


//
var shawarmadiv = document.getElementById("shawarmaPage");
shawarmadiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("render");
    getDiv.innerHTML = '';
    for (var index = 0; index < arrayShawarma.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayShawarma[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id=" + arrayShawarma[index].img + " src='/img/" + arrayShawarma[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});

var getDiv = document.getElementById("render");
getDiv.addEventListener('click', function (event){

    // console.log(event.target.id);
    for (var i = 0; i < arrayofRest.length; i++) {
        if (arrayofRest[i].img === event.target.id) {
            // console.log(arrayofRest[i]);
            localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});
//
// 
var burgerdiv = document.getElementById("burgerPage");
burgerdiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("render");
    getDiv.innerHTML = '';
    for (var index = 0; index < arrayBurger.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayBurger[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id=" + arrayBurger[index].img + " src='/img/" + arrayBurger[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});

var getDiv = document.getElementById("render");
getDiv.addEventListener('click', function (event){

    // console.log(event.target.id);
    for (var i = 0; i < arrayofRest.length; i++) {
        if (arrayofRest[i].img === event.target.id) {
            // console.log(arrayofRest[i]);
            localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});

// 
// 
var pizzadiv = document.getElementById("pizzaPage");
pizzadiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("render");
    getDiv.innerHTML = '';
    for (var index = 0; index < arrayPizza.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayPizza[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id=" + arrayPizza[index].img + " src='/img/" + arrayPizza[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});

var getDiv = document.getElementById("render");
getDiv.addEventListener('click', function (event){

    // console.log(event.target.id);
    for (var i = 0; i < arrayofRest.length; i++) {
        if (arrayofRest[i].img === event.target.id) {
            // console.log(arrayofRest[i]);
            localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});
// 
// 
var khalijidiv = document.getElementById("khaligiPage");
khalijidiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("render");
    getDiv.innerHTML = '';
    for (var index = 0; index < arrayKhaliji.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayKhaliji[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id=" + arrayKhaliji[index].img + " src='/img/" + arrayKhaliji[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});

var getDiv = document.getElementById("render");
getDiv.addEventListener('click', function (event){

    // console.log(event.target.id);
    for (var i = 0; i < arrayofRest.length; i++) {
        if (arrayofRest[i].img === event.target.id) {
            // console.log(arrayofRest[i]);
            localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});
//


//Rate
