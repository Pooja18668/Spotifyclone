console.log("welcome to spotify");

// initialise the variables
let songIndex = 0;
let audioElement = new Audio('./playlist/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "RAj aal", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
]


// audioElement.play();


// handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }

})
// Listen to events 
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // update seekbar
    
})