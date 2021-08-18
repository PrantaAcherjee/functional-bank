document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check validation 
    if (userEmail == 'baperBank@tk.com' && userPassword == 'takaden') {
        window.location.href = 'banking.html'
    }

})