const cardsDiv = document.querySelector(".cards");

cardsDiv.addEventListener("click", (e) => {
  const classes = e.target.classList;
  if (classes.contains("clicked")) classes.remove("clicked");
  else classes.add("clicked");

  setTimeout(
    () =>
      (e.target.src = classes.contains("clicked") ? "card2.jpg" : "card.png"),
    200
  );
});
