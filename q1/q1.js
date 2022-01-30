function validate(){
const fName = document.getElementById("firstName").value;
const lName = document.getElementById("lastName").value;
if(!(fName)||!(lName)||fName.length<3||lName.length<3) {
    return false;
}
else{
    return true
}
}
function delay(delaytime) {
    myTimeout = setTimeout(div_hide, delaytime);
    console.log();
    return myTimeout
    
}
function div_show(e) {
    e.preventDefault()
    if(validate()){
      document.getElementById('popUp').style.display = "block";
      delay(8000);
    }
    else{
        alert("validation failed");
    }
}
function div_hide(){
    console.log();
    // document.getElementById('popUp').style.display = "none";
    document.getElementById('popUp').style.setProperty("display", "none");
}
 