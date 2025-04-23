const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const afterYes = document.getElementById('afterYes');
const loveText = document.getElementById('loveText');
const loveTooBtn = document.getElementById('loveTooBtn');
const heartsContainer = document.getElementById('hearts-container');
let clickCount = 0;
yesBtn.addEventListener('click', () => {
 afterYes.classList.remove('hidden');
 loveText.textContent = "I love you more than words can say!";
 createFloatingHearts();
});
noBtn.addEventListener('mouseover', () => {
 const maxX = window.innerWidth - noBtn.offsetWidth;
 const maxY = window.innerHeight - noBtn.offsetHeight;
 const randomX = Math.floor(Math.random() * maxX);
 const randomY = Math.floor(Math.random() * maxY);
 noBtn.style.left = `${randomX}px`;
 noBtn.style.top = `${randomY}px`;
});
loveTooBtn.addEventListener('click', () => {
 loveText.textContent = "Awww! You just made my heart dance!";
});
function createFloatingHearts() {
 setInterval(() => {
   const heart = document.createElement('div');
   heart.classList.add('heart');
   heart.style.left = `${Math.random() * 100}%`;
   heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
   heartsContainer.appendChild(heart);
   setTimeout(() => {
     heart.remove();
   }, 5000);
 }, 300);
}
