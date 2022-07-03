console.log("welcome to spotify");

// initialise the variables
let songIndex = 0;
let audioElement = new Audio('./playlist/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from (document.getElementsByClassName('songItem'));

let songs = [
    {songName: "aamhi veer jhunjar", filePath: "playlist/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jay Bhavani,Jay Shivaji", filePath: "playlist/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Kalu de navi hi katha ata raja", filePath: "playlist/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dev Martanda,Dev Malhari", filePath: "playlist/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Deva amcha ragat", filePath: "playlist/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Asa ha Dahrmveer", filePath: "playlist/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Malhari Malhari", filePath: "playlist/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Shivbache Mavle", filePath: "playlist/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "jay shivaji", filePath: "playlist/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "RAj aal", filePath: "playlist/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kandobacha Khanda ekch bhari", filePath: "playlist/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Bajne de dhadak dhdak", filePath: "playlist/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "RAj aal", filePath: "playlist/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "aale re aale re marathe ale re", filePath: "playlist/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Tanhaji", filePath: "playlist/15.mp3", coverPath: "covers/15.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();


// handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})
// Listen to events 
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        console.log(e)

    })

    

})