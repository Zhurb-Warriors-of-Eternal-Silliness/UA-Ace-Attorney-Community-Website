// Плавна прокрутка до розділів при кліку на посилання навбару
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      const headerHeight = document.querySelector('header').offsetHeight;
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetOffset = targetSection.getBoundingClientRect().top;
      const totalOffset = targetOffset - headerHeight - navHeight;

      window.scrollBy({
        top: totalOffset,
        behavior: 'smooth'
      });
    });
  });
});

// Анімація для кнопки у розділі "Зв'язок"
const subscribeBtn = document.querySelector('#contact button');

subscribeBtn.addEventListener('mouseover', function () {
  this.style.backgroundColor = '#fff';
  this.style.color = '#3d424e';
});

subscribeBtn.addEventListener('mouseout', function () {
  this.style.backgroundColor = '#3d424e';
  this.style.color = '#fff';
});
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});