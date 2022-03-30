const popup = document.querySelector('.modal');
const btnOpen = document.querySelectorAll('.modal__button');
const body = document.querySelector('body');

btnOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.style.display = 'flex';
    /* блокировка скролла при помощи класса */
    body.classList.add('noscroll');
  });
});

popup.addEventListener('click', (e) => {
  e.preventDefault();
  const isWindow = e.target.closest('.modal__inner');
  const closeBtn = e.target.closest('.modal__close');

  if (!isWindow || closeBtn) {
    popup.style.display = 'none';
  }
  /* снятие блокировки скролла  */
  body.classList.remove('noscroll');
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = document.querySelector('.days');
  var hoursSpan = document.querySelector('.hours');
  var minutesSpan = document.querySelector('.minutes');
  var secondsSpan = document.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 621); // for endless timer
initializeClock('countdown', deadline);
