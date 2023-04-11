function checkText(funcion) {
    let texto = document.getElementById('text-crypt').value;
    if (texto.length === 0) {
        showPanel(false)
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

function showPanel(panel) {
    if (panel) {
        found()
    } else {
        notFound()
    }
}

function notFound() {
    let html = '<div><img src="img/no_find.svg" alt="No se pudo encontrar"> <h3>Ningún mensaje fue encontrado</h3> <p>Ingresa el texto que desees encriptar o desencriptar.</p></div>'
    document.getElementById('found').innerHTML = '';
    document.getElementById('found').classList.add('non-active')
    document.getElementById('not-found').classList.remove('non-active')
    document.getElementById('not-found').innerHTML = html;
}

function found() {
    let html = '<div><p id="message">Lorem ipsum</p> <input type="button" value="Copiar" onclick="copy()" class="button b2"></div>';
    document.getElementById('found').innerHTML = html;
    document.getElementById('not-found').classList.add('non-active')
    document.getElementById('found').classList.remove('non-active')
    document.getElementById('not-found').innerHTML = '';
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
    showPanel(true)
    document.getElementById('message').innerText = message;
}

function copy() {
    let copyText = document.getElementById("message");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
}

function setTextArea() {
    let text = document.getElementById("text-crypt");
    if (text.textContent === "") {
        document.getElementById("text-crypt").textContent = 'Ingresa el texto aqui';
    }else {
        document.getElementById("text-crypt").textContent = '';
    }
}