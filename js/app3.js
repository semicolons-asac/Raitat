var renderDiv = document.getElementById("renderTop");

function topR(array, idx) {
    var top = 0;
    var topR = [];
    for (var i = 0; i < array.length; i++) {
        var top2 = parseInt(array[i].totalstars) / parseInt(array[i].numUser);
        if (top2 >= top) {
            top = top2;
            topR = array[i];
        }
    }
    var index = array.indexOf(topR);
    array.splice(index, 1);
    var rateRender = document.getElementById("renderTop");

    var container = document.createElement('div');
    console.log(index);
    if (idx === 0) {
        container.className = 'top-container';
    }
    var name = document.createElement('h1');
    var rimg = document.createElement('img');
    rimg.src = "/img/" + topR.img;

    name.textContent = topR.name;
    container.appendChild(name);
    var br = document.createElement('br');
    for (var j = 0; j < top; j++) {
        console.log("in");
        var img = document.createElement('img');
        img.src = '/img/star.png';
        img.style.width = '50px';
        container.appendChild(img);
    }
    container.appendChild(br);
    container.appendChild(rimg);

    rateRender.appendChild(container);
}

// 
if (localStorage.getItem("rate") != null) {
    arrayofRest2 = JSON.parse(localStorage.getItem('rate'));
    for (let index = 0; index < 10; index++) {
        topR(arrayofRest2, index);
    }
}
