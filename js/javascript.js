//modificar el valor de una etiqueta innerHTML  = "100%";
//HTML BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraHTML');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});

//CSS BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraCSS');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});

//PHP BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraPHP');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 20) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});

//JAVASCRIPT BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraJAVASCRIPT');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});

//PYTHON BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraPYTHON');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});

//JAVA BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraJAVA');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});
//////////////Librerias / FrameWork//////////////

//LARAVEL BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraLARAVEL');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});

//REACT BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraREACT');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});

//BOOTSTRAP BARRA
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraBOOTSTRAP');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            bar.style.backgroundColor ='#6f42c1'
        }
    }
});
function toast(){
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) 
}

/*     document.getElementById("toastbtn").onclick = function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) 
  }
} */
/*window.addEventListener('load', function(){
    var bar = this.document.getElementById('barra');
    var width = 0;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
});*/