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
var arrayofRest=[];

// creat a constructer
function Resturent(name, categury, img) {
    this.name = name;
    this.categury = categury;
    this.img = img;
    this.totalstars = 0;
    this.numUser = 0;
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



var burgerMakers = new Resturent("Burger Makers", "burger", "makers.jpg");
var fireflyBurger = new Resturent("Firefly Burger", "burger", "firefly.jpg");
var fattyDabsBurger = new Resturent("Fatty Dabs Burger", "burger", "fatty.jpg");
var bunsBurger = new Resturent("Buns Burger", "burger", "buns.jpg");
var bashBurger = new Resturent("Bash Burger", "burger", "bash.jpg");
var grillBurger = new Resturent("Grill Burger", "burger", "grill.jpg");
//shawarma resturents
var shawermaAdam = new Resturent("Shawerma Adam", "shawarma", "adam.jpg");
var shawermaji = new Resturent("Shawermaji", "shawarma", "Shawermaji.jpg");
var shawermaReem = new Resturent("Shawerma Reem", "shawarma", "reem.jpg");
var shawermaKhanZeed = new Resturent("Shawerma Khan Zeed", "shawarma", "khan.jpg");
var shawermaAlDai3a = new Resturent("Shawerma Al Dai3a", "shawarma", "dai3a.png");
var shawermaAsala = new Resturent("Shawerma Asala", "shawarma", "asala.jpg");
//khaliji resturents
var babelyemenelsa3ed = new Resturent("Bab elyemen elsa3ed", "khaliji", "yaman.jpg");
var umaiaReasturant = new Resturent("Umaia Reasturant", "khaliji", "umaia.jpg");
var eldardarak = new Resturent("Eldar darak", "khaliji", "dar.jpg");
var hajarAltawahin = new Resturent("Hajar Al-tawahin", "khaliji", "hajar.jpg");
var qasrelmandi = new Resturent("Qasr elmandi", "khaliji", "mandi.jpg");
var asiyadAlMandi = new Resturent("Asiyad Al Mandi", "khaliji", "asiad.jpg");
//pizza resturents
var pizzaHut = new Resturent("Pizza Hut", "pizza", "hut.jpeg");
var italienPizzaHome = new Resturent("Italian pizza Home", "pizza", "italian.jpg");
// var bunsBurger = new Resturent("Burger Buns", "pizza");
var pizzaAlQaiser = new Resturent("Pizza Al-Qaisar", "pizza", "qaisar.jpg");
var dominousPizza = new Resturent("Domino's Pizza", "pizza", "dominous.jpeg");
var lugisPizza = new Resturent("Luigi's Pizza", "pizza", "lug.jpg");
var OliviaPizza = new Resturent("Olivia Pizza", "pizza", "olivia-pizza.jpg")
// fill arrays resturents in local storeg.
function storeArray() {
    localStorage.setItem("Burger", JSON.stringify(arrayBurger));
    localStorage.setItem("Shawarma", JSON.stringify(arrayShawarma));
    localStorage.setItem("Pizza", JSON.stringify(arrayPizza));
    localStorage.setItem("Khaliji", JSON.stringify(arrayKhaliji));
}

function checkAndRestore() {

    if (localStorage.length > 0) {

        arrayBurger = JSON.parse(localStorage.getItem('burger'));
        arrayShawarma = JSON.parse(localStorage.getItem('shawarma'));
        arrayPizza = JSON.parse(localStorage.getItem('pizza'));
        arrayKhaliji = JSON.parse(localStorage.getItem('khaligi'));

    }

}

// checkAndRestore();


//
var shawarmadiv = document.getElementById("shawarmaPage");
shawarmadiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("shawrmarender");
    for (var index = 0; index < arrayShawarma.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayShawarma[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id="+arrayShawarma[index].img+" src='/img/" + arrayShawarma[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});
var getDiv = document.getElementById("shawrmarender");
getDiv.addEventListener('click', function (event){
    // console.log(event.target.id);
    for(var i=0;i<arrayofRest.length;i++){
        if(arrayofRest[i].img===event.target.id){
                // console.log(arrayofRest[i]);
                localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});
//
// 
var burgerdiv = document.getElementById("burgerPage");
burgerdiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("burgerrender");
    for (var index = 0; index < arrayBurger.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayBurger[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id="+arrayBurger[index].img+" src='/img/" + arrayBurger[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});
var getDiv = document.getElementById("burgerrender");
getDiv.addEventListener('click', function (event){
    // console.log(event.target.id);
    for(var i=0;i<arrayofRest.length;i++){
        if(arrayofRest[i].img===event.target.id){
                // console.log(arrayofRest[i]);
                localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});

// 
// 
var pizzadiv = document.getElementById("pizzaPage");
pizzadiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("pizzarender");
    for (var index = 0; index < arrayPizza.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayPizza[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id="+arrayPizza[index].img+" src='/img/" + arrayPizza[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});
var getDiv = document.getElementById("pizzarender");
getDiv.addEventListener('click', function (event){
    // console.log(event.target.id);
    for(var i=0;i<arrayofRest.length;i++){
        if(arrayofRest[i].img===event.target.id){
                // console.log(arrayofRest[i]);
                localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});
// 
// 
var khalijidiv = document.getElementById("khaligiPage");
khalijidiv.addEventListener('click', function (event) {
    var getDiv = document.getElementById("khalijirender");
    for (var index = 0; index < arrayKhaliji.length; index++) {
        var div1 = document.createElement("div");
        div1.setAttribute('class', 'row');
        div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + arrayKhaliji[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id="+arrayKhaliji[index].img+" src='/img/" + arrayKhaliji[index].img + "' width='405' height='200'></a></div>";
        getDiv.appendChild(div1);

    }
});
var getDiv = document.getElementById("khalijirender");
getDiv.addEventListener('click', function (event){
    // console.log(event.target.id);
    for(var i=0;i<arrayofRest.length;i++){
        if(arrayofRest[i].img===event.target.id){
                // console.log(arrayofRest[i]);
                localStorage.setItem("last", JSON.stringify(arrayofRest[i]));
        }
    }

});
// 


//Rate

// 
// 
// https://www.w3.org/WAI/tutorials/forms/custom-controls/
// 
// 