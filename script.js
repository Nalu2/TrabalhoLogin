var arr = []
function addItem() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('dadosArr'));
  }

  let Usuarioreg = document.getElementById("usuario").value;
  let Emailreg = document.getElementById("email").value;
  let Senhareg = document.getElementById("senha").value;
  arr.push(Usuarioreg);
  arr.push(Emailreg);
  arr.push(Senhareg);
  document.getElementById("usuario").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  localStorage.dadosArr = JSON.stringify(arr);

}

function clearItems() {
  arr = [];
  localStorage.dadosArr = JSON.stringify(arr);
}

window.addEventListener("load", function(){
  const email = this.document.getElementById("email")
  const senha = this.document.getElementById("senha")
  const senha2 = this.document.getElementById("senha2")
  const cadastrar = this.document.getElementById("cadastrar")
  const entrar = this.document.getElementById("entrar")

  let Usuarioreg = this.document.getElementById("Usuarioreg")
  let senhareg = this.document.getElementById("senhareg")

  cadastrar.addEventListener("click", function(){
    let email = email.value
    let chave = senha.value
    let chaveconfir = senha2.value
    if(chave == chaveconfir && chave !="" ){
      localStorage.setItem(email, chave )
    }
    else{
      alert("Usuario ou Senha incorreto, tente novamente")
    }
  })

  entrar.addEventListener("click", function(e){
    e.preventDefault()
    let email = emailreg.value
    let senha = senhareg.value
    var confirm = 0
    for(len i = 0, len = localStorage.length; i<len; i++ ){
      let confkey = localStorage.key(i)
      let confresult = localStorage.getItem(confkey)
      if(email == confkey && senha ==confresult){
        confirm = 1;
        break
      }
    }
    if (confirm == )

  })





})



