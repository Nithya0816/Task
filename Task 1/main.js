function submitButton() {
  // getting the data
  const username = document.getElementById("uname").value.trim();
  const gmail = document.getElementById("mail").value.trim();
  const phone = document.getElementById("num").value.trim();

  //error message for each inputs
  const error1Div = document.getElementById("error1");
  const error2Div = document.getElementById("error2");
  const error3Div = document.getElementById("error3");

  //clears the previous error
  error1Div.textcontent = "";
  error2Div.textcontent = "";
  error3Div.textcontent = "";

  //to track if there is error
  let errorText= false;

  //Validation

  if (!username || /[^a-zA-Z]/.test(username)) {
    error1Div.textContent = "User Name should contain only alphabets";
    errorText=true;
   
  }
  if (!gmail.includes("@") || !gmail.includes(".")) {
    error2Div.textContent = "Please enter vaild gmail id";
    errorText=true;
  }
  if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
    error3Div.textContent = "Please enter Vaild Phone Number";
    errorText=true;
  }

  //stop and return error text
if(errorText){
    return;
}

// if no error then add data to table
  const Users = document.getElementById("userList").value;
  const newRow = document.createElement("tr");

  newRow.innerHTML = `<td>${username}</td> 
    <td>${gmail}</td>
    <td>${phone}</td>`;
  userList.appendChild(newRow);

  //clear after submission
  cancelButton();
}
function cancelButton() {
  document.getElementById("userForm").reset();

  //clear error text after reset
  const error1Div = document.getElementById("error1");
  error1Div.textContent = "";

  const error2Div = document.getElementById("error2");
  error2Div.textContent = "";

  const error3Div = document.getElementById("error3");
  error3Div.textContent = "";
}

//event  listeners to clear error text
 document.getElementById("uname").addEventListener("input",function(){
    const error1Div = document.getElementById("error1");
    error1Div.textContent="";
 });

 document.getElementById("mail").addEventListener("input",function(){
    const error2Div = document.getElementById("error2");
    error2Div.textContent="";
 });

 document.getElementById("num").addEventListener("input",function(){
    const error3Div = document.getElementById("error3");
    error3Div.textContent="";
 });