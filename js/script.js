function Ver_Hora() {
    var hora = new Date();
    var horas = hora.getHours().toString();
    var minutos = hora.getMinutes().toString();
    if (minutos.length == 1) minutos = "0" + minutos;
    var segundos = hora.getSeconds().toString();
    if (segundos.length == 1) segundos = "0" + segundos;
    document.forms[0].mireloj.value = horas + ":" + minutos + ":" + segundos;
}
var r = setInterval("Ver_Hora()", 500);