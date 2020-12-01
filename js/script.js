const text = "Hi everyone, I am Samir a new WebDeveloper trying to learn JS"

let index = 0;

function writeText() {
    
    document.body.innerText = text.slice(0, index);

    index ++;
    
    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);