let nomeusuario = prompt("Qual o seu nome?");
let elemento = document.querySelector ("#nome-usuário");

while(nomeusuario== ""){
    nomeusuario= prompt("Qual o seu nome?");
}

if(nomeusuario== null){
    elemento.textContent = "companheira";
}else{
    elemento.textContent = nomeusuario; 
}

