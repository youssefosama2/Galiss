// Start login page
// form sign-in 
function formValidatelogin(){
const email = document.getElementById("youremail").value;
const Password = document.getElementById("yourpass").value;
const erorr = document.getElementById("Erorr");
var text ='';
if(email.indexOf("@") == -1 || email.length < 10){
    text ="please Enter valid email";
    erorr.innerHTML= text;
    youremail.style.border = "1px solid red";
    return false;
}else if(Password.length < 6){
    text ="please Enter valid password";
    erorr.innerHTML= text;
    yourpass.style.border = "1px solid red";
    youremail.style.border = "none";
    return false;
}
else{
    yourpass.style.border = "none";
    return true;
}
}
// form sign-Up 
function formValidatelogup(){
    const Username = document.getElementById("Name").value;
    const youremail = document.getElementById("Email").value;
    const yourPassword = document.getElementById("password").value;
    const confirmPassword = document.getElementById("repeatPassword").value;
    const erorr = document.getElementById("Erorr2");
    var text ='';
    if(Username.length < 5){
        text ="please Enter valid name";
        erorr.innerHTML= text;
        Name.style.border = "1px solid red";
        return false;
    }else if(youremail.indexOf("@") == -1 || youremail.length < 10){
        text ="please Enter valid email";
        erorr.innerHTML= text;
        Email.style.border = "1px solid red";
        Name.style.border = "none";
        return false;
    }else if(yourPassword.length < 6){
        text ="please Enter valid password";
        erorr.innerHTML= text;
        password.style.border = "1px solid red";
        Email.style.border = "none";
        return false;
    }else if(yourPassword !== confirmPassword ) {
        text ="please Enter valid password";
        erorr.innerHTML= text;
        repeatPassword.style.border = "1px solid red";
        password.style.border = "none";
        return false;
    }
    else{
        alert("تم التسجيل بنجاح");
        return true;
    }
}
// end login page
// form Rigester (join Us)
function formValidateRigester(){
    const Username = document.getElementById("Name").value;
    const youremail = document.getElementById("Email").value;
    const yourNamber = document.getElementById("Namber").value;
    const yourAge = document.getElementById("age").value;
    const yourImage = document.getElementById("Image").value;
    const yourImage2 = document.getElementById("Image2").value;
    const yourMessage = document.getElementById("message").value;
    const selectedValue = document.getElementById("Select").value;
    const checkBox = document.getElementById("check");
    const erorr = document.getElementById("Erorr");
    var text ='';
    if(Username.length < 5){
        text ="please Enter valid name";
        erorr.innerHTML= text;
        Name.style.border = "1px solid #FF0000";
        window.scrollTo(0,0)
        return false;
    }else if(youremail.indexOf("@") == -1 || youremail.length < 10){
        text ="please Enter valid email";
        erorr.innerHTML= text;
        Email.style.border = "1px solid red";
        Name.style.border = "1px solid #DDDFE2";
        window.scrollTo(0,0)
        return false;
    }else if(yourNamber.length < 11 || yourNamber.length > 11 ){
        text ="please Enter valid Namber";
        erorr.innerHTML= text;
        Namber.style.border = "1px solid red";
        Email.style.border = "1px solid #DDDFE2";
        window.scrollTo(0,0)
        return false;
    }else if(yourAge.length < 2){
        text ="please Enter valid age";
        erorr.innerHTML= text;
        age.style.border = "1px solid red";
        Namber.style.border = "1px solid #DDDFE2";
        window.scrollTo(0,0)
        return false;
    }else if (yourImage === "") {
        alert("الرجاء اختيار صورة شخصية!");
        text ="please Enter valid Image";
        erorr.innerHTML= text;
        age.style.border = "1px solid #DDDFE2";
        window.scrollTo(0,0)
        return false;
    }else if (yourImage2 === "") {
        alert("الرجاء اختيار صورة البطاقةالشخصية!");
        text ="please Enter valid Image";
        erorr.innerHTML= text;
        age.style.border = "1px solid #DDDFE2";
        window.scrollTo(0,0)
        return false;
    }else if(yourMessage.length < 10){
        text ="please Enter valid message";
        erorr.innerHTML= text;
        message.style.border = "1px solid red";
        window.scrollTo(0,0)
        return false;
    }else if (selectedValue === "") {
        alert("الرجاء اختيار قيمة من القائمة!");
        Select.style.border = "1px solid red";
        message.style.border = "1px solid #DDDFE2";
        return false;
    }else if (!checkBox.checked){
        alert("الرجاء الموافقة علي الشروط!");
        check.style.border = "1px solid red";
        Select.style.border = "1px solid #DDDFE2";
        return false;
    }else {
        alert("تم تسجيل طلبك بنجاح وسوف يتم مراجعة طلبك والتواصل معك");
        return true;
    }
}
// form contact
function formValidateContact(){
    const Username = document.getElementById("Name").value;
    const youremail = document.getElementById("Email").value;
    const yourSubject = document.getElementById("subject").value;
    const yourmessage = document.getElementById("message").value;
    const erorr = document.getElementById("Erorr");
    var text ='';
    if(Username.length < 5){
        text ="please Enter valid name";
        erorr.innerHTML= text;
        Name.style.border = "1px solid #FF0000";
        return false;
    }else if(youremail.indexOf("@") == -1 || youremail.length < 10){
        text ="please Enter valid email";
        erorr.innerHTML= text;
        Email.style.border = "1px solid #FF0000";
        Name.style.border = "1px solid #DDDFE2";
        return false;
    }else if(yourSubject.length < 5){
        text ="please Enter valid Subject";
        erorr.innerHTML= text;
        subject.style.border = "1px solid #FF0000";
        Email.style.border = "1px solid #DDDFE2";
        return false;
    }else if(yourmessage.length < 10){
        text ="please Enter valid message";
        erorr.innerHTML= text;
        message.style.border = "1px solid #FF0000";
        subject.style.border = "1px solid #DDDFE2";
        return false;
    }else {
        alert("تم إرسال الشكوى بنجاح");
        return true;
    }
}
// contact scroll
document.querySelector('nav a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
});
//Start buton scroll top page 
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// form login Admin
function ValidateloginAdmin(){
    const email = document.getElementById("youremail").value;
    const Password = document.getElementById("yourpass").value;
    const erorr = document.getElementById("Erorr");
    var text ='';
    if(email.indexOf("@") == -1 || email.length < 10){
        text ="please Enter valid email";
        erorr.innerHTML= text;
        youremail.style.border = "1px solid red";
        return false;
    }else if(Password.length < 6){
        text ="please Enter valid password";
        erorr.innerHTML= text;
        yourpass.style.border = "1px solid red";
        youremail.style.border = "1px solid #DDDFE2";
        return false;
    }
    else{
        yourpass.style.border = "1px solid #DDDFE2";
        return true;
    }
}
// form sign-Up Admin
function ValidatelogupAdmin(){
    const name = document.getElementById("yourname").value;
    const email = document.getElementById("youremail").value;
    const Password = document.getElementById("yourpass").value;
    const confirmPassword = document.getElementById("repeatPassword").value;
    const erorr = document.getElementById("Erorr");
    var text ='';
        if(name.length < 5){
        text ="please Enter valid name";
        erorr.innerHTML= text;
        yourname.style.border = "1px solid red";
        return false;
    }else if(email.indexOf("@") == -1 || email.length < 10){
        text ="please Enter valid email";
        erorr.innerHTML= text;
        yourname.style.border = "1px solid #DDDFE2";
        youremail.style.border = "1px solid red";
        return false;
    }else if(Password.length < 6){
        text ="please Enter valid password";
        erorr.innerHTML= text;
        yourpass.style.border = "1px solid red";
        youremail.style.border = "1px solid #DDDFE2";
        return false;
    }else if(Password !== confirmPassword ) {
        text ="please Enter valid Password";
        erorr.innerHTML= text;
        repeatPassword.style.border = "1px solid red";
        yourpass.style.border = "1px solid #DDDFE2";
        return false;
    }else{
        yourpass.style.border = "1px solid #DDDFE2";
        alert("تم التسجيل بنجاح");
        return true;
    }
}
// end login page