const text = "Sumit Patel"; // Text to be displayed
const speed = 100; // Typing speed in milliseconds

let i = 0;
const typewriter = document.getElementById('typewriter');

function typeWriter() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
