import './css/Style2.css';
import 'video.js/dist/video-js.css';
import 'videojs-markers/dist/videojs.markers.css';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-markers';
import Video from './Javascript en dos minutos.mp4';

function componente(){

    const MainDiv = document.createElement('div');




    const videoDiv = document.createElement('div');
    videoDiv.id = 'main';

    // Create the video container
    const videoContainer = document.createElement('span');
    const centerDiv = document.createElement('center');
    // Create the video element
    const videoElement = document.createElement('video');
    videoElement.id = 'test-video';
    videoElement.className = 'video-js vjs-default-skin';
    videoElement.setAttribute('controls', true);
    videoElement.setAttribute('preload', 'auto');
    videoElement.setAttribute('width', '1282');
    videoElement.setAttribute('height', '602');
    // Create the video source element
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', Video);
    sourceElement.setAttribute('type', 'video/mp4');
    videoElement.appendChild(sourceElement);
    centerDiv.appendChild(videoElement);
    videoContainer.appendChild(centerDiv);
    videoDiv.appendChild(videoContainer);

    MainDiv.appendChild(videoDiv);

    // Create the open menu button
    const openMenuButton = document.createElement('button');
    openMenuButton.className = 'menubtn right';
    openMenuButton.id = 'open-menu-btn';
    openMenuButton.onclick = openNavigationBar;
    openMenuButton.textContent = '\u2630'; // Using the Unicode character for the menu icon
    videoDiv.appendChild(openMenuButton);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'mySidenav';
    buttonsDiv.className = 'sidenav';
    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.onclick = closeNavigationBar;
    closeButton.className = 'closebtn';
    closeButton.textContent = '×';
    buttonsDiv.appendChild(closeButton);
    // Create the title paragraph
    const titleParagraph = document.createElement('p');
    titleParagraph.id = 'Title-nav';
    const titleSpan = document.createElement('span');
    titleSpan.textContent = 'Video Sections';
    titleParagraph.appendChild(titleSpan);
    buttonsDiv.appendChild(titleParagraph);
    // Create buttons for video sections
    function createVideoSectionButton(text, time) {
      const button = document.createElement('button');
      button.onclick = () => setTimeVideo(time);
      const span = document.createElement('span');
      span.style.fontSize = '30px';
      span.style.textAlign = 'center';
      span.textContent = '•';
      button.appendChild(span);
      button.appendChild(document.createTextNode(text));
      buttonsDiv.appendChild(button);
    }
    createVideoSectionButton('Marker 1', 0);
    createVideoSectionButton('Marker 2', 20);
    createVideoSectionButton('Marker 3', 48);
    createVideoSectionButton('Marker 4', 70);
    createVideoSectionButton('Marker 5', 100);
    MainDiv.appendChild(buttonsDiv);

    function openNavigationBar() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        document.getElementById("open-menu-btn").style.color = "#272727";
        document.getElementById("footer-element").style.height = "0px";
        document.getElementById("footer-element").style.backgroundColor = "#272727";
    }

    function closeNavigationBar() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight= "0";
        document.getElementById("open-menu-btn").style.color = "#ffffff";
        document.getElementById("footer-element").style.height = "50px";
        document.getElementById("footer-element").style.backgroundColor = "black";
    }

    function setTimeVideo(time){
        Video_player.currentTime(time);
        Video_player.play();
        closeNavigationBar();
    }

    let Video_player;
    document.addEventListener("DOMContentLoaded", function(){
        let videoElement = document.getElementById('test-video');
        videoElement.addEventListener('loadeddata', () => {
            console.log('Video data loaded (metadata and first frame).');
            loadVideo();
        });
    });
    function loadVideo()
    {
        Video_player = videojs("test-video");
        Video_player.markers({
        markers: [
            {time: 0, text: "Marker 1"},
            {time: 20, text: "Marker 2"},
            {time: 48,text: "Marker 3"},
            {time: 70, text: "Marker 4"},
            {time: 100, text: "Marker 5"},
        ]
        });
    }


    return MainDiv;
}


document.body.appendChild(componente());