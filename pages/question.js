const questions = document.querySelectorAll(".accordion-item");
questions.forEach(function (question) {
  const btn = question.querySelector(".accordion-button");
  btn.addEventListener("click", function (e) {
    e.target.parentNode.nextElementSibling.classList.toggle("show-text");
    var element = document.querySelector(".accordion-flush");
    var siblings = Array.from(element.querySelectorAll(":scope > *")).filter(
      (child) => child !== element && child !== e.target.parentNode.parentNode
    );
    // console.log(siblings[0]);
    siblings.forEach((e) =>
      e.querySelector(".card-body").classList.remove("show-text")
    );
  });
});
