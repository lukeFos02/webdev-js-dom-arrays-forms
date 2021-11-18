(function(){

    var url = window.location.href;
    var fileName = url.split("/").pop();
    console.info(fileName);
    var allLinks = document.querySelectorAll("nav ul li");
    for (var i = 0; i < allLinks.length; i++)
    {
        if (allLinks[i].querySelector("a").getAttribute("href") == fileName)
        {
            allLinks[i].setAttribute("class", "currentPage");
            break;
        }
    }
    
    
})();