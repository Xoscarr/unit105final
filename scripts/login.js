function login(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let userList = readUsers();
    let found=false;
    for(let i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===email && user.password ===password){
            found=true;
            console.log("you are now signed in");
            window.location="user.html";
        }
    }
    if(!found){
        alert("The Email or Password were incorrect!");
    }

    console.log(email,password);

}
function init(){
    console.log("home page");
    $("#btnLogin").click(login);
}
window.onload=init;