document.addEventListener('DOMContentLoaded', function() {
  var messageCard = document.querySelector('.carddd');

  // Show message
  messageCard.style.opacity = 1;
  messageCard.style.transition = 'opacity 0.5s';

  // Hide message after 5 seconds
  setTimeout(function() {
      messageCard.style.opacity = 0;
      setTimeout(function() {
          messageCard.style.display = 'none';
      }, 500);
  }, 5000);
});