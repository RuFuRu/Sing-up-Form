const passwd = document.getElementById('password');
const confirmpasswd = document.getElementById('confirmPassword');
const divs = document.querySelectorAll('.pass-div');
const submit = document.querySelector('button');

submit.addEventListener('click', (e) => {
    if(passwd.value !== confirmpasswd.value) {
        passwd.classList.add('error');
        confirmpasswd.classList.add('error');
        divs.forEach(div => {div.classList.add('div-error');console.log(div)});
        e.preventDefault();
    }
})


console.log(passwd, confirmpasswd);