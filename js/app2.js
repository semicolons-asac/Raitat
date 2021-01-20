var getDiv = document.getElementById("renderhere1");
// getDiv.innerHTML=JSON.parse(localStorage.getItem('last'));;
var last=JSON.parse(localStorage.getItem('last'));
console.log(last.name);
var nameRender=document.getElementById("rName");
nameRender.textContent=last.name;

var nameRender=document.getElementById("rImg");
nameRender.src="/img/"+last.img;

var Form = document.getElementById('star_rating');
Form.addEventListener('submit', function (event){
event.preventDefault();
var rating = parseInt(event.target.rating.value);
last.totalstars=last.totalstars+rating;
last.numUser++;
console.log(last);
localStorage.setItem("last", JSON.stringify(last));

for(var i=0;i<arrayofRest.length;i++){
    if(arrayofRest[i].id===last.id){
            // console.log(arrayofRest[i]);
            arrayofRest[i]=last;
            break;
    }
}
localStorage.setItem("rate", JSON.stringify(arrayofRest));
});
