document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);

    const initialState = window
      .getComputedStyle(targetDiv)
      .getPropertyValue("display");

    if (initialState === "none") {
      targetDiv.style.display = "block";
    } else {
      if (targetDiv.style.display === "none") {
        targetDiv.style.display = "block";
      } else {
        targetDiv.style.display = "none";
      }
    }
  });
});
