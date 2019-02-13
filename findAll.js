//This function gets triggered upn clicking Find it button
function myFunction() {
    var sentence = document.getElementById("paragraph").value.split("\n");
    //To store split paragraph
    
    var word = document.getElementById("word").value.split(" ");
    //To store split word
    
    var output = "";
    //For storing output
    
    for (let j = 0; j < word.length; j++) {
        for (let i = 0; i < sentence.length; i++) {
            if (findThem(sentence[i], word[j])) {
                output += "<b>Line " + (i + 1) + ":  </b>";
                output += sentence[i];
                output += "<br />";
            }
        }
    }

    //Not found messsage when no match is there
    if (output == "") {
        output = "Not found :(";
    }

    //This renders the found lines to DOM in webpage
    document.getElementById("demo").innerHTML = output;

    //Finds the match using RegExp() function
    function findThem(input, check) {
        let pattern = new RegExp("\\b" + (check) + "\\b", "gi"); 
        //using RegExp to match regular expressions in paragraph
        //Source used : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        
        return input.match(pattern);
        //returns true if a match is found
    }
}