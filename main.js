let outputscreen = document.getElementById ('output-screen');

function display(num){
    outputscreen.value += num;
}

function calculate(){
    try{
        outputscreen.value =eval(outputscreen.value);
    }

    //exibe comando inválido ao solicitar um comando inexistente
    catch(err){
        alert('Comando inválido, tente de outra forma');
    }
}

function del(){
    outputscreen.value = outputscreen.value.slice(0, -1);
}

function clearr() {
    outputscreen.value = "";
}

