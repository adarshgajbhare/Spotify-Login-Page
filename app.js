const toggle = document.querySelector(".toggle");
const toggleP = document.querySelector(".toggleParent");

function handleElementClick() {
    toggle.style.paddingLeft = toggle.style.paddingLeft === "0.1rem" ? "1.5rem" : "0.1rem";
    toggle.style.transition = "all 0.2s";
}

toggleP.addEventListener("click", handleElementClick);
