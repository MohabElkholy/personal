const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElemnts = document.querySelectorAll(".hidden");

hiddenElemnts.forEach((element) => {
  observer.observe(element);
});
