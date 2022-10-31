jQuery('document').ready(function($){
    var cuestionario = document.getElementsByName('informacion')[0],
        respuestas = cuestionario.elements,
        boton = document.getElementById('benviar');

        var validarnombre = function(e){
            if (cuestionario.nombre.value == "") {
                 alert("Debes ingresar tu nombre para poder dirigirnos a ti");
                 e.preventDefault();
                }
        };
        var validarcorreo = function(e){
            if ((cuestionario.email.value == "") || (cuestionario.email.value.indexOf("@") == -1) || (cuestionario.email.value.indexOf(".") == -1)) {
                alert("Debes ingresar un email para enviarte la información");
                e.preventDefault();
            }
        };
        var validaractividad = function(e){
            if (cuestionario.actividades.value == "Selecciona una")  {
                 alert("Debes marcar alguna actividad de la lista");
                 e.preventDefault();
                }
        };

        var validar = function(e){
              validarnombre(e);
              validarcorreo(e);
              validaractividad(e);
            };
    cuestionario.addEventListener("submit", validar);
    }())
    function borrartodo() {
        document.getElementById("nombre").value = "";
        localStorage.setItem("nombre", "");
        document.getElementById("email").value = "";
        localStorage.setItem("email", "");
};       