
(function(){

document.getElementById("myHeading").innerHTML = "Sir Frags alot";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
document.getElementById("myTestEvent").addEventListener("click", myFuntion);

function myFuntion(){
    console.info("i see it it wan it i click it");
}

document.querySelector(".red").addEventListener('click', function (){
    document.querySelector('body').setAttribute('class', "redBack")
})

document.querySelector(".green").addEventListener('click', function (){
    document.querySelector('body').setAttribute('class', "greenBack")
})

document.querySelector(".blue").addEventListener('click', function (){
    document.querySelector('body').setAttribute('class', "blueBack")
})

document.querySelector(".reset").addEventListener('click', function (){
    document.querySelector('body').removeAttribute('class')
})

})();

