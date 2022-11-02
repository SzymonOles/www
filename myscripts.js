window.addEventListener("load", function () {
  var dark = false;
  document.getElementById("nightmode").addEventListener("click", togglen);

  function night() {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "rgb(20,20,20)";
    dark = true;
  }

  function day() {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "#2f80ed";
    dark = false;
  }

  function togglen() {
    dark ? day() : night();
  }
});
