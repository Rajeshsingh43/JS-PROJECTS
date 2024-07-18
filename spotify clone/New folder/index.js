console.log("welcome to spotify");

//Intalize the variables
let songIndex=0;
let audioElement=new Audio('D:\songs');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gifr');


let songs=[
       {songName: "salam-e-ishq ",filepath: "D:\songs\mp3",
       }
    // {songName: "salam-e-ishq", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    // {songName:"salam-e-ishq",  filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    // {songName: "salam-e-ishq", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    // {songName: "salam-e-ishq", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    // {songName: "salam-e-ishq", filepath:"song/1.mp3", coverPath:"covers/1.jpg"}, 
    // {songName: "salam-e-ishq", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
 ]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
}
    else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;

    }  
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     
     myprogressBar.value=progress;

})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBarvar.value*audioElement.duration/100;

})