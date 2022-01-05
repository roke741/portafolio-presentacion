//modificar el valor de una etiqueta innerHTML  = "100%"; window.addEventListener('load', function(){
//window.document.getElementById("barraHTML");
//document.getElementById("myBtn").addEventListener("mouseover", myFunction);
//window.addEventListener('scroll', function(){
/*
//SI CORRE
document.addEventListener('scroll', inc);
//window.onscroll = function() {inc()};
function inc(){
  var mos = document.getElementById('num');
  var nu = 0;
  var id = setInterval(frame, 100);
  function frame(){
    if(nu >= 80){
      clearInterval(id);
    }else{
      nu++;
      mos.innerHTML = nu;  
    }
    document.removeEventListener("scroll",inc);
  }
} */
/* 
/// PRIMER EJEMPLO FUNCIONA XD
window.addEventListener('load', function(){
    var bar = this.document.getElementById('barraHTML');
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
}); */

////// PRUEBASSS FIN ///////

//HTML BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero')
    var bar = this.document.getElementById('barraHTML');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});
//CSS BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero1')
    var bar = this.document.getElementById('barraCSS');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 35) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//JAVASCRIPT BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero2')
    var bar = this.document.getElementById('barraJAVASCRIPT');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//PHP BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero3')
    var bar = this.document.getElementById('barraPHP');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 20) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//PYTHON BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero4')
    var bar = this.document.getElementById('barraPYTHON');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//JAVA BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero5')
    var bar = this.document.getElementById('barraJAVA');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});


//MYSQL BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero6')
    var bar = this.document.getElementById('barraMYSQL');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//photoshop BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero7')
    var bar = this.document.getElementById('barraPHOTO');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});


//xd BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero8')
    var bar = this.document.getElementById('barraXD');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//////////////Librerias / FrameWork//////////////

//LARAVEL BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero9')
    var bar = this.document.getElementById('barraLARAVEL');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//REACT BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero10')
    var bar = this.document.getElementById('barraREACT');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
    }
});

//BOOTSTRAP BARRA
window.addEventListener('scroll', function progreso(){
    var mostrar = this.document.getElementById('numero11')
    var bar = this.document.getElementById('barraBOOTSTRAP');
    var width = 0;
    var num = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            num++;
            mostrar.innerHTML = num;  
        }
        window.removeEventListener("scroll",progreso);
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