function calc(m){
    let x = document.getElementById('txt1');
            x.value += m;
}

function equal(){
   
    let x = document.getElementById('txt1').value;
    let result = eval(x);
    document.getElementById('txt2').value = result;
}

function Delete(){
    document.getElementById('txt1').value='';
    document.getElementById('txt2').value=''
    
}