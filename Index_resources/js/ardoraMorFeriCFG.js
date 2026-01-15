//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=150; scoreInc=15; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidadez "; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}

var col=0; row=0; writeDir=0;
var words=["UkVTUE9OU0FCTEU=","SU5URUxJR0VOQ0lB","QVBSRU5ESVpBSkU=","RE9DRU5URQ==","RVRJQ0E=","UEVOU0FNSUVOVE8=","UFJJVkFDSURBRA==","VEVDTk9MT0dJQQ==","SE9ORVNUSURBRA==","RVNUVURJQU5URQ=="];var defs=["Forma correcta y conciente de usar una herramienta tecnologica","Capacidad de pensar, aprender y resolver problemas.","Proceso mediante el cual los estudiantes adquieren conocimientos","Persona que orienta y guia el uso adecuado de la IA en la escuela","Conjunto de valores que orientan el buen uso de la tecnologia","Capacidad de analizar, reflexionar y opinar por uno mismo","Derecho a proteger la informacion personal en internet","Conjunto de herramientas digitales que facilitan el aprendizaje","Valor que implica no copiar tareas ni hacer trampa con la IA","Persona que debe usar la IA como apoyo y no como sustituto del estudio"];
var indexWords=0;var indexAttemps=0;
