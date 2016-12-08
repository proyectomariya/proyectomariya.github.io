navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

navigator.getUserMedia (

   // constraints
   {
      video: false,
      audio: true
   },

   // successCallback
   function(localMediaStream) {
      var audio = document.querySelector(audio);
      audio.src = window.URL.createObjectURL(localMediaStream);
   },
   
   // errorCallback
   function(err) {
    console.log("Ocurrió el siguiente error: " + err);
   }

);