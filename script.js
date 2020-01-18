/*

this will get us our lower case characters
function getRamLow(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

this will get us our upper case characters
function getRamUp(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}
 
function getRamNum(){
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function getRamSymbol(){
    const symbols = "`!@#$%^&*(){}[]=<>";
    return symbols[Math.floor(Math.random() * symbols.lenght)];
}
*/


function generate() { 
    //set password length
//passwrod values
    
    var complexity = parseInt(document.getElementById("slider").value);
    // password characters
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"; 
    var password = "";

    // creaate for loop to chose password characters

    for (var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
        console.log(password)
    }
     //add password to textbox/display area

    document.getElementById("display").values = password;

    //add password to previously generated passwords section

    document.getElementById("lastNums").innerHTML += password +  "<br/>";

}

// set default lenght display of 68

document.getElementById("length").innerHTML = "length: 68";

// function for lenght  of password based on slider pick

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length:" + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "length: 1";
    }
}

//function to copy to clipboard
function copyPass(){

    document.getElementById("display").select();
    document.execCommand("copy");
    alert("Your password has been copied to clipboard")
}




// need random characters
// upper and lower case
// random numbers
// random symbol
// copy clipboard


//forloop
//