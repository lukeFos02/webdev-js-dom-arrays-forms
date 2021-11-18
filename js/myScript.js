
(function(){

document.getElementById("myHeading").innerHTML = "Sir Frags alot";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
document.getElementById("myTestEvent").addEventListener("click", myFuntion);

function myFuntion(){
    console.info("i see it it wan it i click it");
}

//document.querySelector(".red").addEventListener('click', function (){
//    document.querySelector('body').setAttribute('class', "redBack")
//})

//document.querySelector(".green").addEventListener('click', function (){
 //   document.querySelector('body').setAttribute('class', "greenBack")
//})

//document.querySelector(".blue").addEventListener('click', function (){
//    document.querySelector('body').setAttribute('class', "blueBack")
//})

//document.querySelector(".reset").addEventListener('click', function (){
//    document.querySelector('body').removeAttribute('class')
//})

var colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (var i = 0; i < colourButtons.length; i++)
{
    colourButtons[i].addEventListener("click", chgColour)
}

function chgColour(ev)
{
    console.dir(ev.target.classList);
    var colourPicked = ev.target.classList[0] + "Back";
    document.querySelector("body").setAttribute("class", colourPicked);
}

//image rotator

var imageAr = [
    "images/view1.jpg",
    "images/view2.jpg",
    "images/view3.jpg",
    "images/view4.jpg",
    "images/view5.jpg",
    "images/view6.jpg"
];
console.dir(imageAr);
document.getElementById("myImages").setAttribute("src", imageAr[0])

setInterval(chgImage, 1000)
var imageCounter = 0

function chgImage()
{
    document.getElementById("myImages").setAttribute("src", imageAr[imageCounter])
    imageCounter = imageCounter + 1
    if (imageCounter == 5)
    {
        imageCounter = 0
    }
    console.info("called")
}

})();

