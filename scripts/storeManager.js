function saveUser(user){
    //load the old data
    let data= readUsers();
    //merge
    data.push(user);
    let val = JSON.stringify(data);
    localStorage.setItem("users",val);
    
}
function readUsers(){
    let data=localStorage.getItem("users");
    if(!data){//NOT data
    return [] // create the array 
    
    }else{
        let list=JSON.parse(data); //parse the string back into object
        return list; // this is an object
    }

}
