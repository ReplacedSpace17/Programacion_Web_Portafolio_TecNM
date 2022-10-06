//errores er
var errorTxt = "[0-9!\"\#\$\%\&\/\(\)\=\?\¿\¡\+\*\~\}\\[\\]\^\\-\_\.\:\,\;\<\>\|\°\'\¨\´\¬]";
var errorNum = "[ÁÉÍÓÚáéíóúñ0!\"\$\%\&\/\(\)\=\?\¿\¡\+\*\~\}\\[\\]\^\\-\_\.\:\,\;\<\>\|\°\'\¨\´\¬]";
var errorcp = "[0-9A-Za-zÁÉÍÓÚáéíóúñ0!\"\$\%\&\/\(\)\=\?\¿\¡\+\*\~\}\\[\\]\^\\-\_\.\:\,\;\<\>\|\°\'\¨\´\¬]{6,1000}";
var errorAlfanum = "[!\"\#\$\%\&\/\(\)\=\?\¿\¡\+\*\~\}\\[\\]\^\\-\_\.\:\,\;\<\>\|\°\'\¨\´\¬]";
var errornss = "[0-9A-Za-zÁÉÍÓÚáéíóúñ0!\"\$\%\&\/\(\)\=\?\¿\¡\+\*\~\}\\[\\]\^\\-\_\.\:\,\;\<\>\|\°\'\¨\´\¬]{12,1000}";

//ER
var erTxt = "[A-Za-zÁÉÍÓÚáéíóúñ\s ]{1,20}"; //para textocortos (20 caracteres)
var num_casa = /#[0-9]{1,4}[a-zA-Z]{0,1}/; //para numero de casa #126
var codigo_p = "[0-9]{5}";//para codigo postal de 5 digitos
var txt_alfanumerico = "[0-9A-Za-zÁÉÍÓÚáéíóúñ]{1,40}"; //txt alfanumerico
var nss = "[0-9]{11}"; //nss de 11 digitos
var edad = "[0-9]{2}" // edad a 2 digitos
var erTel = "[0-9]{10}"; //telefono a 10 digitos
var salario = "[0-9]{1,7}"; // salario 
var horas_laborales = "[0-9]{2}"; //verifica que sea menor de 84 hrs semanales
var txtLargo = "[A-Za-zÁ.ÉÍÓÚáéíóúñ0-9 ]{1,200}"; //txt largo

//mensajes de error
var MSJerTxt = " Por favor utilice solo letras.";
var MSJnum_casa = "Por favor especificque el numero de casa con formato #nnn. Ejemplo: #123";
var MSJcodigo_p = "Por favor escriba el código postal con valores numericos y con 5 dígitos";
var MSJtxt_alfanumerico = "Por favor ingrese valores alfanumeros, máximo 40 caracteres";
var MSJnss = "Por favor indique su Numero de Seguridad Social con valores numericos y 11 dígitos positivos";
var MSJedad = "Por favor indique su edad con valores numéricos. Debe tener por lo menos 2 cifras"
var MSJerTel = "Por favor indique su número telefonico a 10 digitos numericos positivos";
var MSJsalario = "Por favor indique el salario con valores numericos. Máximo 7 dígitos positivos";
var MSJhoras_laborales = "Por favor especifique las horas laborales con digitos numericos"; //verifica que sea menor de 84 hrs semanales
var MSJtxtLargo = "Evite usar signos y síbolos,el máximo es de 200 caracteres";


//Alerta
function alerta_error(nombre_campo, mensaje_error) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: nombre_campo + mensaje_error
  });
}

//evento
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener('submit', validarFormulario);
});

//function 
function validarCheckDias(){
  var sum=8;
  
  //evalua sin preferencia
  valor = document.getElementById("chsin").checked;
  
  if(valor==false){
    //alert(valor);
    sum--;
  }
  
  //evalua lunes
  valor = document.getElementById("chl").checked;
  if(valor==false){
    //alert(valor);
    sum--;
  }
  

  //evalua martes
  valor = document.getElementById("chma").checked;
  if(valor==false){
    //alert(valor);
    sum--;
  }

    //evalua miercoles
  valor = document.getElementById("chmi").checked;
  if(valor==false){
    //alert(valor);
    sum--;
  }
  

  //evalua jueves
  valor = document.getElementById("chj").checked;
  if(valor==false){
    //alert(valor);
    sum--;
  }
  
  
  //evalua viernes
  valor = document.getElementById("chv").checked;
  if(valor==false){
    //alert(valor);
    sum--;
  }
  
  
  //evalua sabado
  valor = document.getElementById("chs").checked;
  if(valor==false){
    //alert(valor);
    sum--;
  }
  
  //evalua domingo
  valor = document.getElementById("chd").checked;
  if(valor==false){
    //alert(valor);
    sum--;
  }
  return sum;
}


//FUNCION REUTILIZABLE PARA VALIDAR
function validarCampo(id_campo, regex, msjcampo, mensaje_error, error_verificar) {
  dato = document.getElementById(id_campo).value;
  if (dato.match(regex) != null) {//dato es diferente de false
    if (dato.match(error_verificar) == null) { //si no hay errores
      return true;
    }
    else {
      alerta_error(msjcampo, mensaje_error);
      
    }
  }
  else {
    alerta_error(msjcampo, mensaje_error);
    
  }
  
}


//FUNCION REUTILIZABLE PARA VALIDAR numero de casa
function ValNumCasa(msjcampo, mensaje_error, errorNum) {
  dato = document.getElementById('numero').value;
  test= num_casa.test(dato);
  if(test==false){
    alerta_error(msjcampo, mensaje_error);
  }
  return test;
  
}





//funcion principal para validar campos
function validarFormulario(evento) {
  evento.preventDefault();

  //validar apellido paterno
  valido = validarCampo('ap_p', erTxt, '[Apellido Paterno] ', MSJerTxt, errorTxt);
  if (valido == true) {//validar ap materno
    valido = validarCampo('ap_m', erTxt, '[Apellido Materno] ', MSJerTxt, errorTxt);
    if (valido == true) {//validar nombre
      valido = validarCampo('nombre', erTxt, '[Nombre] ', MSJerTxt, errorTxt);
      if (valido == true) {//validar numero

        valido = ValNumCasa(num_casa, '[Numero] ', MSJnum_casa);
      

        if (valido == true) {//validar calle
          valido = validarCampo('calle', erTxt, '[Calle] ', MSJerTxt, errorTxt);
          
          if (valido == true) {//validar ciudad
            valido = validarCampo('ciudad', erTxt, '[Ciudad] ', MSJerTxt, errorTxt);
            if (valido == true) {//validar provincia
              valido = validarCampo('provincia', erTxt, '[Provincia] ', MSJerTxt, errorTxt);
              if (valido == true) {//validar codigo postal
                valido = validarCampo('codigopostal', codigo_p, '[Codigo Postal] ', MSJcodigo_p, errorcp);
                if (valido == true) {//tiempo residencia
                  valido = validarCampo('tiempo', txt_alfanumerico, '[Tiempo de residencia] ', MSJtxt_alfanumerico, errorAlfanum);
                  if (valido == true) {//nss
                    valido = validarCampo('nss', nss, '[NSS] ', MSJnss, errornss);
                    if (valido == true) {//validar telefono
                      valido = validarCampo('telefono', erTel, '[Telefono] ', MSJerTel, errorNum);
                      if (valido == true) {//validar edad
                        valido = validarCampo('edad', edad, '[Edad] ', MSJedad, errorNum);
                        if (valido == true) {//validar puesto
                          valido = validarCampo('puesto', erTxt, '[Puesto] ', MSJerTxt, errorTxt);
                          if (valido == true) {//validar salario
                            valido = validarCampo('salario', salario, '[Salario] ', MSJsalario, errorNum);
                            if (valido == true) { //validar 1er bloque

                              valido = validarCampo('tipo_sec', txt_alfanumerico, '[Tipo_Secundaria] ', MSJtxt_alfanumerico, errorAlfanum);
                              if (valido == true) {//validar 1er bloque
                                valido = validarCampo('nombre_sec', txt_alfanumerico, '[Nombre_Secunadaria] ', MSJtxt_alfanumerico, errorAlfanum);
                                if (valido == true) {//validar 1er bloque
                                  valido = validarCampo('direccion_sec', txt_alfanumerico, '[Direccion_Secundaria] ', MSJtxt_alfanumerico, errorAlfanum);
                                  if (valido == true) {//validar 1er bloque
                                    valido = validarCampo('tiempo_sec', txt_alfanumerico, '[Tiempo_Secunadaria] ', MSJtxt_alfanumerico, errorAlfanum);
                                    if (valido == true) {//validar 1er bloque
                                      valido = validarCampo('esp_sec', txt_alfanumerico, '[Esp_Secunadaria] ', MSJtxt_alfanumerico, errorAlfanum);
                                      if (valido == true) {//validar 2DO bloque

                                        valido = validarCampo('tipo_fac', txt_alfanumerico, '[Tipo_Facultad] ', MSJtxt_alfanumerico, errorAlfanum);
                                        if (valido == true) {//validar 2DO bloque
                                          valido = validarCampo('nombre_fac', txt_alfanumerico, '[Nombre_Facultad] ', MSJtxt_alfanumerico, errorAlfanum);
                                          if (valido == true) {//validar 2DO bloque
                                            valido = validarCampo('direccion_fac', txt_alfanumerico, '[Direccion_Facultad] ', MSJtxt_alfanumerico, errorAlfanum);
                                            if (valido == true) {//validar 2DO bloque
                                              valido = validarCampo('tiempo_fac', txt_alfanumerico, '[Tiempo_Facultad] ', MSJtxt_alfanumerico, errorAlfanum);
                                              if (valido == true) {//validar 2DO bloque
                                                valido = validarCampo('esp_fac', txt_alfanumerico, '[Esp_Facultad] ', MSJtxt_alfanumerico, errorAlfanum);
                                                if (valido == true) {//validar 2DO bloque

                                                  valido = validarCampo('tipo_esc', txt_alfanumerico, '[Tipo_Comercio] ', MSJtxt_alfanumerico, errorAlfanum);
                                                  if (valido == true) {//validar 3ro bloque
                                                    valido = validarCampo('nombre_esc', txt_alfanumerico, '[Nombre_Comercio] ', MSJtxt_alfanumerico, errorAlfanum);
                                                    if (valido == true) {//validar 3ro bloque
                                                      valido = validarCampo('direccion_esc', txt_alfanumerico, '[Direccion_Comercio] ', MSJtxt_alfanumerico, errorAlfanum);
                                                      if (valido == true) {//validar 3ro bloque
                                                        valido = validarCampo('tiempo_esc', txt_alfanumerico, '[Tiempo_Comercio] ', MSJtxt_alfanumerico, errorAlfanum);
                                                        if (valido == true) {//validar 3ro bloque
                                                          valido = validarCampo('esp_esc', txt_alfanumerico, '[Esp_Comercio] ', MSJtxt_alfanumerico, errorAlfanum);
                                                          if (valido == true) {//validar 3ro bloque

                                                            valido = validarCampo('tipo_for', txt_alfanumerico, '[Tipo_Profesional] ', MSJtxt_alfanumerico, errorAlfanum);
                                                            if (valido == true) {//validar 4to bloque
                                                              valido = validarCampo('nombre_for', txt_alfanumerico, '[Nombre_Profesional] ', MSJtxt_alfanumerico, errorAlfanum);
                                                              if (valido == true) {//validar 4to bloque
                                                                valido = validarCampo('direccion_for', txt_alfanumerico, '[Direccion_Profesional] ', MSJtxt_alfanumerico, errorAlfanum);
                                                                if (valido == true) {//validar 4to bloque
                                                                  valido = document.getElementById('fecha').value;
                                                                  if (valido != "") {
                                                                    valido = document.getElementById('fechatrabajo').value;
                                                                    if (valido != "") {

                                                                      //validar los check de día
                                                                      a= validarCheckDias();
                                                                     
                                                                      if(a==0){
                                                                        alerta_error("[Días de preferencia]", "Debe seleccionar al menos un check")

                                                                      }
                                                                      else{


                                                                      //mostrar y confirmar info
                                                                      Swal.fire({
                                                                        title: 'Antes de continuar...',
                                                                        text: '¿Estás seguro que tu información es correcta?',
                                                                        icon: 'warning',
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: '#3085d6',
                                                                        cancelButtonColor: '#d33',
                                                                        confirmButtonText: 'Sí claro, enviarla!'
                                                                      }).then((result) => {
                                                                        if (result.isConfirmed) {
                                                                          this.submit();


                                                                          //alerta de confirmación
                                                                          Swal.fire(
                                                                            'Enviada!',
                                                                            'Tu solicitud ha sido enviada correctamente',
                                                                            'success'
                                                                          )
                                                                        }
                                                                      })

                                                                      }

                                                                    }
                                                                    else {
                                                                      alerta_error('[Fecha para trabajar] ', 'Por favor incluya una fecha')
                                                                    }
                                                                  }
                                                                  else {
                                                                    alerta_error('[Fecha actual] ', 'Por favor incluya una fecha')
                                                                  }



                                                                }
                                                              }
                                                            }

                                                          }
                                                        }
                                                      }
                                                    }
                                                  }

                                                }
                                              }
                                            }
                                          }
                                        }
                                      }

                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

