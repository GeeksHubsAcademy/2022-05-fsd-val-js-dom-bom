
let escrito = document.getElementById("input1");
console.log(escrito);
let objetoDiv = document.getElementById("lista");


const getValue = () => {
    let p = document.createElement("p");
    p.innerHTML = escrito.value;
    objetoDiv.appendChild(p);
    escrito.value = "";
}


const delValue = () => escrito.value = '';