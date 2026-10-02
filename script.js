document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar");
  const totalSegments = 5;

  bars.forEach((bar) => {
    const level = parseInt(bar.dataset.level, 10) || 0;

    for (let i = 1; i <= totalSegments; i++) {
      const segment = document.createElement("span");
      if (i <= level) segment.classList.add("filled");
      bar.appendChild(segment);
    }
  });

  // One gentle, orchestrated moment: grow the bars in after they've rendered.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bars.forEach((bar) => bar.classList.add("is-grown"));
    });
  });
});
