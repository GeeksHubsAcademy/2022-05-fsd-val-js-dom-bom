 const change = () =>{
    let div1 = document.getElementById("divUno");
    
    console.log(div1.hidden);
    let div2 = document.getElementsByClassName("divDos");
    console.log(div2.hidden);
    
    if (div1.hidden == true && div2[0].hidden == false) {
        div1.hidden = false;
        div2[0].hidden = true;
    } else {
        div1.hidden = true;
        div2[0].hidden = false;
    }
}