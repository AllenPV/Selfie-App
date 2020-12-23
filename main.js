var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function Start()
 {
    document.getElementById("Text_box").innerHTML = "";
Recognition.Start();
}
Recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("Text_box").innerHTML = Content;
    console.log(Content);
    speak();
}

function speak() {
    var Synth = window.speechSynthesis;
    speak_data = document.getElementById("Text_box").innerHTML;
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    Synth.speak(UtterThis);
    Webcam.attach(camera);
}
camera = document.getElementById("Camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format:'jpeg',
    jpeg_quality :90
});