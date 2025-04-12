// Paste in console of page where you have an <audio> blob. 

var audioElement = document.querySelector("audio");
if (audioElement) {
  var blobURL = audioElement.src;
  fetch(blobURL)
    .then(response => response.blob())
    .then(blob => {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;     
      a.download = 'downloaded-audio.ogg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);      
      setTimeout(() => URL.revokeObjectURL(url), 100);
    })
    .catch(error => console.error('Error fetching the audio blob:', error));
} else {
  console.error('Audio element not found.');
}