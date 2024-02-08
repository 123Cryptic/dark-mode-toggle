const body = document.body;
const light_mode = document.getElementById("light_mode");
const dark_mode = document.getElementById("dark_mode");

const lightToggle = () => {
  body.style.background = 'white';
  body.style.color = 'black';
};

const darkToggle = () => {
  body.style.background = 'black';
  body.style.color = 'white';
};

light_mode.addEventListener("change", function() { lightToggle(); });
dark_mode.addEventListener("change", function() { darkToggle(); });
