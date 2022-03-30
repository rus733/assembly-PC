const navLinks = document.querySelectorAll('.header__nav>a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1); //отрежем #
    const section = document.getElementById(id); // найдем секцию

    if (section) {
      // Нативный scrollIntoView - работает в Хроме
      // section.scrollIntoView({
      //   block: 'start',
      //   behavior: 'smooth',
      // });
      // scrollIntoView через полифилл, работает также в Сафари
      seamless.scrollIntoView(section, {
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  });
});
