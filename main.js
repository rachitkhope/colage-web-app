var SpeechRecognition = window.webkitSpeechRecognition;
var content;
var recognition = new SpeechRecognition();

function start()
{
   console.log("start call")
       recognition.start();
}

recognition.onresult = function(event){
    console.log (event);
    content = event.results[0][0].transcript.toLowerCase();
     console.log(content);
     if(content == "selfie"){
        speak();
     }

}

function speak(){
 var synth = window.speechSynthesis;
 Webcam.attach(camera);

 speak_data ="taking your next srlfie in 5 seconds";
 var utterthis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterthis);

 setTimeout(function()
 {
  img_id = "selfiel";
  take_snapshot();
  speak_data ="taking your next srlfie in 5 seconds";
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
 } ,5000);

 setTimeout(function()
 {
  img_id = "selfie2";
  take_snapshot();
  speak_data ="taking your next srlfie in 5 seconds";
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
 } ,10000);

 setTimeout(function()
 {
  img_id = "selfie3";
  take_snapshot();
 } ,15000);

}

camera = document.getElementById("camera");
Webcam.set({
   width:500,
   height :400,
   image_format : 'jpeg',
   jpeg_quanty:90
});

function take_snapshot()
{
   console.log(img_id);

   Webcam.snap(function(data_uri){
      if(img_id == "selfie1"){
      document.getElementById("Result1").innerHTML = '<img id="selfie1" src="' +data_uri+'"/>';
      }
      if(img_id=="selfie2"){
         document.getElementById("Result2").innerHTML = '<img id="selfie2" src="' +data_uri+'"/>';
      }
         if(img_id=="selfie1"){
            document.getElementById("Result3").innerHTML = '<img id="selfie3" src="' +data_uri+'"/>';
      }
   })
}