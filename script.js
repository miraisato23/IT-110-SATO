
const darkModeToggle = document.getElementById("darkMode");
const likeBtn = document.getElementById("likeBtn");
const likeCountDisplay = document.getElementById("likeCount");
const resetBtn = document.getElementById("resetBtn");

let count = 24;

// Dark mode
darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});

// Like button
likeBtn.addEventListener("click", function() {
    count++;
    likeCountDisplay.textContent = count;
});

// Reset button
resetBtn.addEventListener("click", function() {
    count = 0;
    likeCountDisplay.textContent = count;
});

