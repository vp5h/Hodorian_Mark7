
var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var inputText= txtInput.value;
// console.log(txtInput)

var serverURL = "https://api.funtranslations.com/translate/Hodor.json"
function getTranslationURL(text){
        return serverURL + "?" + "text=" + text ;

}


function errorHandler(error){
   
    console.log("Error Occured", error)
   
}

function clickHandler() {
//    outputDiv.innerText = "ajsjsjsjsjs " + txtInput.value;
var inputText= txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        // if(json.status= 429){
        //     var err= json.error.message;
        //     outputDiv.innerText = err;
        //     console.log(err)
       
       
           
        // } 
        // else{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        // }
     })
    
       
    .catch(errorHandler)
    
}


btnTranslate.addEventListener("click", clickHandler)