<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


//FUNCIÓN PRINICIPAL
function validarCampos(){
    validarEmail('email');
}



//EXPRESIONES REGULARES
var erCorreo= "^([A-Z]+)";


//FUNCIÓN DE ALERTA CON SWEET ALERT


//FUNCIONES VALIDAS
function validarEmail(txt) {
    //obteniendo el valor que se puso en campo text del formulario
    miCampoTexto = document.getElementById(txt).value;
    //la condición
    //if(miCampoTexto.match(erCorreo)!=null)
    if (miCampoTexto.length == 0) {
        Swal.fire('Any fool can use a computer');
        
        return false;
        
    }
    if(miCampoTexto.match(erCorreo)!=null){
        return true;
    }
    else{
        alert('Invalido');
    }
    
}


