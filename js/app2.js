var getDiv = document.getElementById("renderhere1");
// getDiv.innerHTML=JSON.parse(localStorage.getItem('last'));;
var last = JSON.parse(localStorage.getItem('last'));
console.log(last.numUser);
console.log(last.totalstars);
var nameRender = document.getElementById("rName");
nameRender.setAttribute('class', 'textstyle2');
nameRender.textContent = last.name;
var map = document.getElementById("map");
map.innerHTML = "<iframe src='" + last.location + " frameborder='0' style='border:0;' allowfullscreen=' aria-hidden='false' tabindex='0'></iframe>'"


var nameRender = document.getElementById("rImg");
nameRender.src = "../img/" + last.img;

var rateRender = document.getElementById("rRate");
if (last.totalstars) {
    var ratenum = parseFloat(last.totalstars) / parseFloat(last.numUser);
    for (var i = 0; i < ratenum; i++) {
        var img = document.createElement('img');
        img.src = '/img/star.png';
        img.style.width = '50px';
        rateRender.appendChild(img);
    }
}
var Form = document.getElementById('star_rating');
Form.addEventListener('submit', function (event) {
    // event.preventDefault();
    if (localStorage.getItem("rate") != null) {
        arrayofRest = JSON.parse(localStorage.getItem('rate'));
    } var rating = parseInt(event.target.rating.value);
    last.totalstars = last.totalstars + rating;
    last.numUser++;
    // console.log(last);
    localStorage.setItem("last", JSON.stringify(last));

    for (var i = 0; i < arrayofRest.length; i++) {
        if (arrayofRest[i].img === last.img) {
            // console.log(arrayofRest[i]);
            // arrayofRest[i].numUser = last.numUser;
            // arrayofRest[i].totalstars = last.totalstars;
            arrayofRest[i] = last;
            localStorage.setItem("rate", JSON.stringify(arrayofRest));
            // console.log(arrayofRest[i]);
            // console.log(arrayofRest);

            break;
        }
    }


});