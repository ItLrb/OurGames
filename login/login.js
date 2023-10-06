const signButton = document.getElementById('signup')
const loginButton = document.getElementById('login')
const title = document.getElementById('login-signup')
const cfmPassBox = document.querySelectorAll('.cfm-password')[0]
const cfmPassP = document.querySelectorAll('.cfm-password')[1]


const loginExplain = document.getElementById('login-p')
const signExplain = document.getElementById('signup-p')

function abreCadastro() {
    title.innerText = 'Sign Up'
    cfmPassBox.style.display = 'flex'
    cfmPassP.style.display = 'flex'
    loginButton.style.display = 'none'
    signButton.style.display = 'block'

    signExplain.style.display = 'none'
    loginExplain.style.display = 'block'
}
function abreLogar() {
    title.innerText = 'Login Here'
    cfmPassBox.style.display = 'none'
    cfmPassP.style.display = 'none'
    loginButton.style.display = 'block'
    signButton.style.display = 'none'

    signExplain.style.display = 'block'
    loginExplain.style.display = 'none'
}

function doLogin() {
    const email = document.getElementById("iemail").value
    const password = document.getElementById("ipassword").value
    const confirmPassword = document.getElementById('confirm-password')

    // Verifique se os campos de usuário e senha estão preenchidos
    
    if (email == "" || password == "" && confirmPassword.value == password) {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }else if (email.length < 10 && password.length < 3) {
        alert("Email ou senha inválidos, pois não atende os requisitos")
        return false
    }

    window.location.href = './discover.html'
    return false
}