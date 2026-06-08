  // Simple welcome alert pag nag-load yung page
window.onload = function() {
  console.log("Portfolio loaded successfully!");
};

// Smooth scroll effect pag pinindot yung button
function scrollToProjects() {
  document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
}
let currentMusic = null;
let currentBtn = null;

function toggleMusic(musicId, btnId) {
    const music = document.getElementById(musicId);
    const btn = document.getElementById(btnId);
    
    // Stop yung ibang music na tumutugtog
    if (currentMusic && currentMusic !== music) {
        currentMusic.pause();
        currentBtn.innerHTML = '🔇 Play';
    }
    
    if (music.paused) {
        music.play();
        btn.innerHTML = '🔊 Pause';
        currentMusic = music;
        currentBtn = btn;
    } else {
        music.pause();
        btn.innerHTML = '🔇 Play';
        currentMusic = null;
        currentBtn = null;
    }
}