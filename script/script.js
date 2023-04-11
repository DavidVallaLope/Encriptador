function checkText(funcion) {
    let texto = document.getElementById('text-crypt').value;
    if (texto.length === 0) {
        document.getElementsByClassName('found')[0].style.visibility='hidden';
        document.getElementsByClassName('not-found')[0].style.visibility='';
    } else {
        switch (funcion) {
            case 'decrypt':
                decrypt(texto);
                break;
            case 'encrypt':
                encrypt(texto);
                break;
        }
    }
}

function encrypt(texto) {
    let encrypted = "";
    console.log(texto)
    
    for (let i in texto) {
        switch(texto[i]) {
            case 'a':
                encrypted+="ai";
                break;
            case 'e':
                encrypted+="enter";
                break;
            case 'i':
                encrypted+="imes";
                break;
            case 'o':
                encrypted+="ober";
                break;
            case 'u':
                encrypted+="ufat";
            default:
                encrypted+=texto[i]
                break;
        }
    }
    console.log(encrypted)
    showMessage(encrypted) 

}

function decrypt(texto) {
    let decrypt = "";
    console.log(texto);
    for (let i = 0; i < texto.length; i++) {
        switch(texto[i]) {
            case 'a':
                if (texto[i + 1] === 'i') {
                    decrypt += 'a'
                } 
                i+=1;
                break;
            case 'e':
                if (texto[i + 1] === 'n' && texto[i + 2] === 't' && texto[i + 3] === 'e' && texto[i + 4] === 'r') {
                    decrypt += 'e'
                }
                i+=4;
                break;
            case 'i':
                if (texto[i + 1] === 'm' && texto[i + 2] === 'e' && texto[i + 3] === 's') {
                        decrypt += 'i'
                    }
                    i+=3;
                    break;
            case 'o':
                if (texto[i + 1] === 'b' && texto[i + 2] === 'e' && texto[i + 3] === 'r') {
                        decrypt += 'o'
                    }
                    i+=3;
                    break;
            case 'u':
                if (texto[i + 1] === 'f' && texto[i + 2] === 'a' && texto[i + 3] === 't') {
                        decrypt += 'u'
                    }
                    i+=3;
                    break;
            default:
                decrypt += texto[i]
                break;    
        }
    }
   console.log(decrypt)
   showMessage(decrypt) 
}

function showMessage(message) {
    document.getElementsByClassName('found')[0].style.visibility='';
    document.getElementsByClassName('not-found')[0].style.visibility='hidden';
    document.getElementById('message').innerText = message;
}

function copy() {
    var copyText = document.getElementById("message");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
}