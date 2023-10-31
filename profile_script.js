document.addEventListener('DOMContentLoaded', function () {
    const portfolioButton = document.querySelector('.very-large-button');

    portfolioButton.addEventListener('click', function () {
        alert('Redirecting to portfolio');
        window.location.href = 'portfolio.html';
    });
  });