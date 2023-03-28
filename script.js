const panelss = document.querySelectorAll(".panel");

panelss.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClass();
    panel.classList.add("active");
  });
});

const removeClass = () => {
  panelss.forEach((panel) => {
    panel.classList.remove("active");
  });
};
