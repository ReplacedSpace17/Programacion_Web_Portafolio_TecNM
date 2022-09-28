<?php
include("config.php");
include("firebaseRDB.php");

########################### -------->  DECLARARCIÓN DE VARIABLES

######  (INFORMACIÓN PERSONAL)
$fa = $_POST['fecha_actual'];                   #FECHA ACTUAL
$ap = $_POST['ap_p'];                           #APELLIDO PATERNO
$am = $_POST['ap_m'];                           #APELLIDO MATERNO
$nombre = $_POST['nom'];                        #NOMBRE

######  (DIRECCIÓN)
$numero = $_POST['numero'];                     #NUMERO DE CASA
$calle = $_POST['calle'];                       #CALLE
$ciudad = $_POST['ciudad'];                     #CIUDAD
$provincia = $_POST['provincia'];               #PROVINCIA
$cp = $_POST['cp'];                             #CÓDIGO POSTAL
$tiempo_residencia = $_POST['tiempo_vive'];     #TIEMPO DE RESIDENCIA
$nss = $_POST['nss'];                           #NUMERO DE SEGURIDAD SOCIAL
$telefono = $_POST['phone'];                    #TELEFONO
$edad = $_POST['edad'];                         #EDAD
$dias = $_POST['preferencia'];                  #DÍAS DISPONIBLES PARA TRABAJAR
$salario = $_POST['salario'];                   #SALARIO DESEADO
$horaslab = $_POST['horas_laborales'];          #HORAS LABORALES DISPONIBLES PARA TRABAJAR
$trabajanoche = $_POST['trabaja_noche'];        #PUEDE TRABAJAR DE NOCHE 
$turno = $_POST['empleo_deseado'];              #TURNO
$fechdisp = $_POST['disponible_trabajar'];      #FECHA DISPONIBLES PARA TRABAJAR

#######  (INFORMACIÓN DE EDUCACIÓN)
$tipo_sec = $_POST['tipo_sec'];              #TIPO DE INSTITUCIÓN EDUCATIVA (SECUNADARIA)
$nombre_sec = $_POST['nombre_sec'];          #NOMBRE DE LA INSTITUCIÓN (SECUNADARIA)
$direccion_sec = $_POST['direccion_sec'];              #DIRECCIÓN COMPLETA  (SECUNADARIA)
$tiempo_sec = $_POST['tiempo_sec'];              #AÑOS COMPLETADOS (SECUNADARIA)
$esp_sec = $_POST['esp_sec'];              #ESPECIALIZACIÓN Y TITULO (SECUNADARIA)

$tipo_fac = $_POST['tipo_fac'];              #TIPO DE INSTITUCIÓN EDUCATIVA (FACULTAD)
$nombre_fac = $_POST['nombre_fac'];          #NOMBRE DE LA INSTITUCIÓN (FACULTAD)
$direccion_fac = $_POST['direccion_fac'];              #DIRECCIÓN COMPLETA  (FACULTAD)
$tiempo_fac = $_POST['tiempo_fac'];              #AÑOS COMPLETADOS (FACULTAD)
$esp_fac = $_POST['esp_fac']; 

$tipo_esc = $_POST['tipo_esc'];              #TIPO DE INSTITUCIÓN EDUCATIVA (ESCUELA DE NEGOCIOS)
$nombre_esc = $_POST['nombre_sec'];          #NOMBRE DE LA INSTITUCIÓN (ESCUELA DE NEGOCIOS)
$direccion_esc = $_POST['direccion_esc'];              #DIRECCIÓN COMPLETA  (ESCUELA DE NEGOCIOS)
$tiempo_esc = $_POST['tiempo_esc'];              #AÑOS COMPLETADOS (ESCUELA DE NEGOCIOS)
$esp_esc = $_POST['esp_esc']; 

$tipo_for = $_POST['tipo_for'];              #TIPO DE INSTITUCIÓN EDUCATIVA (ESCUELAD DE FORMACIÓN PROFESIONAL )
$nombre_for = $_POST['nombre_for'];          #NOMBRE DE LA INSTITUCIÓN (ESCUELA DE FORMACIÓN PROFESIONAL)
$direccion_for = $_POST['direccion_for'];              #DIRECCIÓN COMPLETA  (ESCUELA DE FORMACIÓN PROFESIONAL)
$tiempo_for = $_POST['tiempo_for'];              #AÑOS COMPLETADOS (ESCUELA DE FORMACIÓN PROFESIONAL)
$esp_for = $_POST['esp_for'];

################## ------------> FIN DE DECLARACIÓN DE VARIABLES


$insert = $rdb->insert("/SOLICITUD",[
      "name" => $name,
      "email" => $email,
      "password" => $password
   ]);
   $result = json_decode($insert, 1);
   if(isset($result['name'])){
     echo " Signup success , please login " ;
   }else{
       echo " Signup failed " ;
	}
   

