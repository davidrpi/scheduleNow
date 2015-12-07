/* Lab 5 JavaScript File
   Place variables and functions in this file */

function validate(formObj) {
  // put your validation code here
  // it will be a series of if statements

  if (formObj.eventTitle.value == "") {
    alert("You must enter an Event Title");
    formObj.eventTitle.focus();
    var div = document.getElementById('eventTitle');
    div.innerHTML = div.innerHTML + '<i class="fa fa-check-square-o"></i>';
    return false;
  }
  if (formObj.dateStart.value == "") {
    alert("You must specify a starting date for the date range");
    formObj.dateStart.focus();
    return false;
  }
  if (formObj.dateEnd.value == "") {
    alert("You must specify an end date for the date range");
    formObj.dateEnd.focus();
    return false;
  }
  if (formObj.timeStart.value == "") {
    alert("You must specify a starting time for the time range");
    formObj.timeStart.focus();
    return false;
  }
  if (formObj.timeEnd.value == "") {
    alert("You must specify an end time for the time range");
    formObj.timeEnd.focus();
    return false;
  }
  // if (formObj.eventDesc.value == "" || formObj.eventDesc.value == "Please enter your comments") {
  //   alert("You must leave a comment");
  //   formObj.comments.focus();
  //   return false;
  // }
  else{
    alert("Succesfully submitted!");
  }
  return true;
}

function clearContents(element){
  if(element.value == "Add a description (optional)"){
    element.value = '';
  }
}

function setFocusToFirstBox(){
  document.getElementById("eventTitle").focus();
}

function sendMail() {
    var link = "mailto:scheduleNowTeam@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
