

 function generate() { 
    //set password length
//passwrod values
    
    var complexity = document.getElementById("slider").nodeValue;
    // password characters
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"; 
    var password = "";

    // creaate for loop to chose password characters

    for (var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
     //add password to textbox/display area

    document.getElementById("display").values = password;

    //add password to previously generated passwords section

    document.getElementById("lastNums").innerHTML += password +  "<br/>";

}

// set default lenght display of 64
document.getElementById("length").innerHTML = "length: 64";

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