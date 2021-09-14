var inputText = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/yoda.json";



function geturl(text){
   return serverURL + "?" + "text=" + text
};

function clickHandler (){
    var input = inputText.value;
    fetch(geturl(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        console.log(translatedText);
        output.innerText = translatedText;
    })
}
btnTranslate.addEventListener("click", clickHandler);