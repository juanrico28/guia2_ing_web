function onclickenbutton(msj){
    saludo ="Hola \n Bienvenido a javascript: "+msj;
    alert(saludo);
}
$(document).ready(function(){
$( ".miclase" ).click(function(){
        let text= $(this).val();
        onclickenbutton( text );
    });
});