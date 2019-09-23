function showModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

$("img").on("click", function() {
  showModal();
});

$("#close").on("click", function() {
  closeModal();
});
