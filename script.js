
var loginLayout =  document.getElementsByClassName("loginContainer")[0];
var homeContainer = document.getElementsByClassName("homeContainer")[0];
var newUserRegister = document.getElementsByClassName("newUserInputForm")[0];
var newUserCkeckStatus = document.getElementsByClassName("referenceBody")[0];

function loginPage(){
    homeContainer.style.display = "none";
    loginLayout.style.display = "flex";
}

function checkRequestStatus(){
    
    homeContainer.innerHTML = "";
    // homeContainer.style.display = "block";
    homeContainer.appendChild(newUserCkeckStatus);
    newUserCkeckStatus.style.display = "flex";

}

function newUserForm(){
    homeContainer.innerHTML = "";
    homeContainer.style.display = "block";
    homeContainer.appendChild(newUserRegister);
    newUserRegister.style.display = "block";
}

function newUserLayout(){
    loginLayout.style.display = "none";
    homeContainer.style.display = "block";
    homeContainer.appendChild(newUserRegister);
    newUserRegister.style.display = "block";
}

var inConsumerNoDisplay = true;

function alreadyHaveAccount(isUser){
    console.log(isUser.value);
     var userAccount = '<div class="newUserInputContainer"><label class="newUserText">Consumer No</label> <input type="text" id="street" required> </div>';
     var isAlreadyUser = isUser.value;
     if(isAlreadyUser == "yes" && inConsumerNoDisplay == true){
        var divElement = document.createElement("div");
        divElement.setAttribute("id","newUserConsumerInput"); 
        divElement.innerHTML = userAccount;
        var newUserContainer = document.getElementsByClassName("newUserInputContainer1")[0];
        newUserContainer.insertAdjacentElement('afterend', divElement);
        inConsumerNoDisplay = false;
     }else{
        inConsumerNoDisplay = true;
        document.getElementById("newUserConsumerInput").style.display = "none";
     }
}

