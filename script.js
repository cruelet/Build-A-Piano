// Variables for keyboard keys
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// Select all keys
const keys = document.querySelectorAll('.key');

// -- Listeners -- //
// Add an event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// -- Handlers -- //
function playNote(key) {
  // Get the note's letter value
  const noteAudio = document.getElementById(key.dataset.note);

  // Reset the current note's time to 0
  noteAudio.currentTime = 0;
  
  // Play the note
  noteAudio.play();

  // Add active class for styling purposes
  key.classList.add('active');
  
  // Listen for when the sound has ended & remove 'active' class
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

// Keyboard input
document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

    // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
  
  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});