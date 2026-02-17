console.log("JS connected");
<script src="main.js"></script>
<button id="toggleAbout">Toggle About</button>
const aboutBtn = document.getElementById("toggleAbout");
const aboutSection = document.getElementById("about");

aboutBtn.addEventListener("click", () => {
  aboutSection.classList.toggle("hidden");
});
.hidden {
  display: none;
}
