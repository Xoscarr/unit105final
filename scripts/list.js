function displayUsers(users){
    //travel the array
    for(let i=0;i<users.length;i++){
    //get each user
        let user = users[i];
    //display the user
        let sytax=`
            <tr>
                <td> ${user.email} </td>
                <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.payment}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td style="background-color:${user.color}"> </td>
            </tr>
        `;
    $("#tblUsers").append(sytax);
    //append the user to the DOM
    }
}
function init(){
    let users=readUsers();
    displayUsers(users);
}
window.onload=init;