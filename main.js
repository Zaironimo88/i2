prediction_1=""; //guardar la inf de modelo y almacenarlo
prediction_2="";


//codigo para activar camara
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
})

camera= document.getElementById("camera");//actualice html

Webcam.attach('#camera');

function take_snapshot() { Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'; }); }




console.log('Ml5.version',ml5.version);


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SXbAakvwg/model.json',modelLoaded);