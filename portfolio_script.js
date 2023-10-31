document.addEventListener('DOMContentLoaded', function () {
    const portfolioButton = document.querySelector('.very-large-button');

    portfolioButton.addEventListener('click', function () {
        alert('Redirecting back to home page');
        window.location.href = 'profile.html';
    });
  });