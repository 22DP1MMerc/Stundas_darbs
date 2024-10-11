var modals = document.querySelectorAll(".modal");
var btns = document.querySelectorAll(".myBtn");
var spans = document.querySelectorAll(".close");
var cards = document.querySelectorAll(".card1");

btns.forEach(function(btn, index) {
  btn.addEventListener("click", function() {
    modals[index].style.display = "block";
    document.body.classList.add("modal-open");
  });
});

spans.forEach(function(span, index) {
  span.addEventListener("click", function() {
    modals[index].style.display = "none";
    document.body.classList.remove("modal-open");
  });
});

modals.forEach(function(modal, index) {
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      modals[index].style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });

  var modalContent = modal.querySelector(".modal-content");
  modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
  });
});

cards.forEach(function(card, index) {
  card.addEventListener("mouseenter", function() {
    if (modals[index].style.display === "block") {
      modals[index].style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});

document.addEventListener("mousemove", function(event) {
  cards.forEach(function(card, index) {
    var rect = card.getBoundingClientRect();
    var isMouseOutsideCard =
      event.clientX < rect.left || 
      event.clientX > rect.right || 
      event.clientY < rect.top || 
      event.clientY > rect.bottom;
    
    if (isMouseOutsideCard && modals[index].style.display === "block") {
      modals[index].style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});