document.getElementById("button").addEventListener("click", loadPage);

function loadPage(){
    var array_Pages = createArrayOfPages();
    var page = getRandomPage(array_Pages);
    window.location.replace(page);
}

function createArrayOfPages(){
    var array_Pages = ["giveUp", "mainPage", "dontMatter", "page"];//get pages
    var newArray = spliceMainPage(array_Pages);
    return newArray;
}

function getRandomPage(array_pages){
    var amountOfPages = array_pages.length;
    var randomNumber = Math.floor((Math.random()*amountOfPages));
    var page = array_pages[randomNumber];
    var link = "../"+ page + "/index.html"; 
    return link;
}

function spliceMainPage(array_Pages){
    var mainPageExists = array_Pages.indexOf('mainPage');
    if (mainPageExists > -1){
        array_Pages.splice(mainPageExists, 1);
    }
    return array_Pages;
}