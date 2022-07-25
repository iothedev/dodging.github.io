console.log('%c' + 'STOP!', 'font-size:50px; font-weight:bold; background: #ff0000; border-radius: 5px; padding: 10px')
console.log('%c' + 'If someone told you to copy and paste something in here, they are trying to steal your cookies which they then can use to login to your account!', 'color: #ff0000;font-size:30px; font-weight:bold;')        

async function hidetext() {
    while (true) {
        for (var element of ['h1', 'h2', 'h3']) {
            await new Promise(resolve => setTimeout(resolve, 50));
            var text = document.getElementById(element);
            text.innerText = Math.random().toString(16).substr(2, text.innerHTML.length);
        }
    }
}

function info(div) {
    var obj = document.getElementById(div);
    var tt = document.querySelector(`.${div} .linkinfo`)
    tt.style.opacity = '1';
    obj.classList.add('gradient');
    obj.classList.add('gr-2');
}

function rinfo(div) {
    var obj = document.getElementById(div);
    var tt = document.querySelector(`.${div} .linkinfo`)
    tt.style.opacity = '0';
    obj.classList.remove('gradient');
    obj.classList.remove('gr-2');
}

