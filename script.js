function clicksubmitbutton(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent='Welcome, ' +username + ' my dear';
    welcomeMessage.style.display= 'block';
}
