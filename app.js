// initialize the github class
 const github =  new Github;
// instantiate ui class
const ui = new UI;
// get the search input 
const searchUser = document.getElementById('searchUser');

// search input event listener

searchUser.addEventListener('keyup', (e)=>{
    // get input text
    const userText  = e.target.value;
    if (userText !== '') {
     // make http call to get profile using github js
     
     github.getUser(userText)
     .then(data =>{
        if (data.profile.message === 'Not Found') {
            // show alert   
            ui.showAlert('User Not Found', 'alert alert-danger');        
        } else {
            // show profile
            ui.showProfile(data.profile);
            // show repos
            ui.showRepos(data.repos);
        }
        
     })
    }else{
        //clear profile div
        ui.clearProfile();
    }
});