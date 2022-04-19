// Перевод

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-title-1': 'Standard',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-title-2': 'Premimum',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-title-3': 'Gold',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'phone': 'Phone',
    'message': 'Message',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-title-1': 'Стандартный',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-title-2': 'Премиум',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-title-3': 'Люкс',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'phone': 'Телефон',
    'message': 'Сообщение',
    'send-message': 'Отправить'
  }
}

const allElementsForTranslate = document.querySelectorAll('[data-i18]');
const lngBtns = document.querySelectorAll('.lng-btn');
let language = 'en';
let theme = 'dark';

lngBtns.forEach((btn) => btn.addEventListener('click', () => {
  // Смена цвета кнопок
  lngBtns.forEach((btn) => btn.classList.remove('active-lng-btn'));
  btn.classList.add('active-lng-btn');
  // Перевод
  const lng = (btn.textContent === 'ru') ? 'ru' : 'en';
  allElementsForTranslate.forEach((element) => {
    element.textContent = i18Obj[lng][element.dataset.i18];
    if (element.placeholder) {
      element.placeholder = i18Obj[lng][element.dataset.i18];
      element.textContent = '';
    }
  })}));


// Реализация адаптивного меню:

const burgerButton = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link')

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-btn-close');
  nav.classList.toggle('nav-open');
  nav.classList.toggle('nav-close');
})

navLink.forEach((link) => link.addEventListener('click', () => {
  burgerButton.classList.remove('burger-btn-close');
  nav.classList.remove('nav-open');
  nav.classList.add('nav-close');
}))


// Смена картинок в блоке Портфолио и смена цвета кнопки

const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-item');

portfolioBtns.forEach((btn) => btn.addEventListener('click', () => {
  portfolioBtns.forEach((btn) => btn.classList.remove('button-gold'));
  btn.classList.add('button-gold')
  portfolioImages.forEach((img, index) => img.src = `assets/img/${btn.dataset.season}/${index + 1}.jpg`);
}));

// Кэширование картинок

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
  seasons.forEach((season) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
  })
}
preloadImages();

// Смена темы
let switchThemeBtn = document.querySelector('.switch-theme');
switchThemeBtn.addEventListener('click', () => {
  switchThemeBtn.classList.toggle('day');
  if (switchThemeBtn.classList.contains('day')) {
    document.documentElement.style.setProperty('--bg-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--title-color', '#000');
    document.documentElement.style.setProperty('--portfolio-btn-color', '#fff');
    document.documentElement.style.setProperty('--portfolio-btn-hover', '#000');
    document.documentElement.style.setProperty('--bg-btn-color', '#BDAE82');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#000');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--title-color', '#BDAE82');
    document.documentElement.style.setProperty('--portfolio-btn-color', '#000');
    document.documentElement.style.setProperty('--portfolio-btn-hover', '#fff');
    document.documentElement.style.setProperty('--bg-btn-color', 'transparent');
  }
})

// Видеоплеер
const videoPlayer = document.querySelector('.video-player')
const viewer = document.querySelector('.video-viewer');
const playButton = document.querySelector('.play-button');
const viewerControls = document.querySelector('.viewer-controls');
const playPauseBtn = document.querySelector('.play-pause-button');
const progressBar = document.querySelector('.progress-bar');
const muteBtn = document.querySelector('.mute');
const volumeControl = document.querySelector('.volume');

function showControls() {
  if (viewer.currentTime > 0) {
    viewerControls.style.bottom = `0`;
    playButton.removeEventListener('click', () => body.style.backgroundColor = `white`);
  }
}


function togglePlay() {
  (viewer.paused) ? viewer.play() : viewer.pause();
}

function endVideo() {
  playButton.classList.remove('hidden');
  viewer.load();
}

function changeIconToPause() {
  playPauseBtn.style.backgroundImage = `url('assets/svg/pause.svg')`;
}

function changeIconToPlay() {
  playPauseBtn.style.backgroundImage = `url('assets/svg/play.svg')`;
}

function getCurrentTime() {
  progressBar.value = viewer.currentTime;
  const value = progressBar.value / progressBar.max * 100;
  progressBar.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #C8C8C8 ${value}%, #C8C8C8 100%)`;
}

function updateProgress() {
  time = setInterval(getCurrentTime, 50);
}

function updateProgressStop() {
  clearInterval(time);
}

function changeProgress() {
  const value = this.value / this.max * 100;
  this.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #C8C8C8 ${value}%, #C8C8C8 100%)`;
  viewer.currentTime = progressBar.value;
}

function switchMute() {
  if (viewer.muted === true) {
    muteBtn.style.backgroundImage = `url('assets/svg/volume.svg')`;
    viewer.muted = false;
  } else {
    muteBtn.style.backgroundImage = `url('assets/svg/mute.svg')`;
    viewer.muted = true;
  }
}

function changeVolume() {
  viewer.volume = volumeControl.value;
  const value = volumeControl.value *100;
  volumeControl.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #C8C8C8 ${value}%, #C8C8C8 100%)`;
}


videoPlayer.addEventListener('mouseenter', showControls);
videoPlayer.addEventListener('mouseleave', () => viewerControls.style.bottom = `-60px`);

viewer.addEventListener('click', togglePlay);
viewer.addEventListener('ended', endVideo);
viewer.onloadedmetadata = () => {
  progressBar.max = viewer.duration;
}
viewer.addEventListener('play', updateProgress);
viewer.addEventListener('play', changeIconToPause);
viewer.addEventListener('pause', updateProgressStop);
viewer.addEventListener('pause', changeIconToPlay);
viewer.addEventListener('play', () => playButton.classList.add('hidden'));
viewer.addEventListener('pause', () => playButton.classList.remove('hidden'));

playButton.addEventListener('click', togglePlay);
playButton.addEventListener('click', () => viewerControls.style.bottom = '0');


playPauseBtn.addEventListener('click', togglePlay);

progressBar.addEventListener('input', changeProgress);

muteBtn.addEventListener('click', switchMute);

volumeControl.addEventListener('input', changeVolume);
volumeControl.addEventListener('input', () => {
  if (viewer.volume === 0) {
    muteBtn.style.backgroundImage = `url('assets/svg/mute.svg')`;
    viewer.muted = true;
  } else {
    muteBtn.style.backgroundImage = `url('assets/svg/volume.svg')`;
    viewer.muted = false;
  }
});





console.log(`Оценка - 61 / 60 баллов\nКритерии:
[X] вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause, прогресс-бар, кнопка Volume/Mute, регулятор громкости звука +5
[X] в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, ссылка на курс (не добавил логотип курса, т.к. в портфолио его нет, мне кажется ссылка с названием курса смотрится лаконичнее, там не менее честно снижаю -1 балл) +4

[X] при клике по кнопке Play/Pause запускается или останавливается проигрывание видео +5
[X] внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли видео в данный момент +5
[X] Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10
[X] При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка +10
[x] При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10

[X] есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления +5
[X] когда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается +5
[X] Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения (добавил скрытие и появление панели управления при наведении / удалении мыши от окна видео, сложно оценивать данный функционал в абсолютных величинах, думаю на +2 тянет) +2
`)