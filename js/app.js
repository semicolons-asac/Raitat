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

// creat a constructer
function Resturent(name, categury) {
    this.name = name;
    this.categury = categury;
  
        if (categury === "burger") {
            arrayBurger.push(this);
            
        }
        else if (categury === "shawarma") {
            arrayShawarma.push(this);
            
        }
        else if (categury === "pizza") {
            arrayPizza.push(this);
            
        }
        else {
            arrayKhaliji.push(this);
           
        }
 
}
//burgers resturents
var burgerMakers = new Resturent("Burger Makers", "burger");
var fireflyBurger = new Resturent("Firefly Burger", "burger");
var fattyDabsBurger = new Resturent("Fatty Dabs Burger", "burger");
var bunsBurger = new Resturent("Buns Burger", "burger");
var bashBurger = new Resturent("Bash Burger", "burger");
var grillBurger = new Resturent("Grill Burger", "burger");

//shawarma resturents
var shawermaAdam = new Resturent("Shawerma Adam", "shawarma");
var shawermaji = new Resturent("Shawermaji", "shawarma");
var shawermaReem = new Resturent("Shawerma Reem", "shawarma");
var shawermaKhanZeed = new Resturent("Shawerma Khan Zeed", "shawarma");
var shawermaAlDai3a = new Resturent("Shawerma Al Dai3a", "shawarma");
var shawermaAsala = new Resturent("Shawerma Asala", "shawarma");

//khaliji resturents
var babelyemenelsa3ed = new Resturent("Bab elyemen elsa3ed", "khaliji");
var umaiaReasturant = new Resturent("Umaia Reasturant", "khaliji");
var eldardarak = new Resturent("Eldar darak", "khaliji");
var hajarAltawahin = new Resturent("Hajar Al-tawahin", "khaliji");
var qasrelmandi = new Resturent("Qasr elmandi", "khaliji");
var asiyadAlMandi = new Resturent("Asiyad Al Mandi", "khaliji");

//pizza resturents
var pizzaHut = new Resturent("Pizza Hut", "pizza");
var italienPizzaHome = new Resturent("Italian pizza Home", "pizza");
var bunsBurger = new Resturent("Burger Buns", "pizza");
var pizzaAlQaiser = new Resturent("Pizza Al-Qaisar", "pizza");
var dominousPizza = new Resturent("Domino's Pizza", "pizza");
var lugisPizza = new Resturent("Luigi's Pizza", "pizza");

// fill arrays resturents in local storeg.
localStorage.setItem("Burger",JSON.stringify(arrayBurger));
localStorage.setItem("Shawarma",JSON.stringify(arrayShawarma));
localStorage.setItem("Pizza",JSON.stringify(arrayPizza));
localStorage.setItem("Khaliji",JSON.stringify(arrayKhaliji));
console.log(arrayBurger);
//

 