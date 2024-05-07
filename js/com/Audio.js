Audio = function()
{
   var audio = document.createElement('audio'); 
   audio.canPlayType('audio/ogg');
   document.body.appendChild(audio);
   
   this.canType = function(type)
   {
     audio.canPlayType(type);  
   };   
   this.loadAudioFile = function(audioFile)
   {
     audio.src = audioFile;  
   };
   
   this.play = function()
   {
     audio.play();  
   };
   this.pause = function()
   {
     audio.pause();  
   };
   this.volume = function(vol)
   {
     audio.volume = vol;  
   };
   this.stop = function()
   {
     audio.pause();
     audio.currentTime=0;  
   };
   this.forward = function()
   {
     audio.currentTime +=30.0;  
   }
};
