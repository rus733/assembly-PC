const modal = () => {
  const popup = document.querySelector('.modal');
  const btnOpen = document.querySelectorAll('.modal__button');
  const scroll = calcScroll();
  //вычисляем ширину скролла
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  btnOpen.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.style.display = 'flex';

      /* убираем рывок при вызове модалки  */
      document.body.style.marginRight = `${scroll}px`;
      /* блокировка скролла при помощи класса */
      document.body.classList.add('noscroll');
    });
  });

  popup.addEventListener('click', (e) => {
    e.preventDefault();
    const isWindow = e.target.closest('.modal__inner');
    const closeBtn = e.target.closest('.modal__close');

    if (!isWindow || closeBtn) {
      popup.style.display = 'none';
    }
    /* убираем добавочный отступ  */
    document.body.style.marginRight = `0px`;
    /* снятие блокировки скролла  */
    document.body.classList.remove('noscroll');
  });
};
modal();
