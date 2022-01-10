const sunSvg = document.querySelector('#sun');
const moonSvg = document.querySelector('#moon');

sunSvg.addEventListener('click', () => {

  Array.from(document.querySelectorAll('.bg-dark')).forEach(function (dark) {
    dark.classList.remove('bg-dark');
  });

  Array.from(document.querySelectorAll('.text-light')).forEach(function (light) {
    light.classList.add('text-dark');
    light.classList.remove('text-light');
  });

  Array.from(document.querySelectorAll('i')).forEach(function (iconColor) {
    iconColor.style.color = '#343a40';
  });

  sunSvg.classList.remove('show');
  sunSvg.classList.add('hide');
  moonSvg.classList.add('show');
});

moonSvg.addEventListener('click', () => {

  Array.from(document.querySelectorAll('body')).forEach(function (dark) {
    dark.classList.add('bg-dark');
  });

  Array.from(document.querySelectorAll('.text-dark')).forEach(function (light) {
    light.classList.add('text-light');
    light.classList.remove('text-dark');
  });

  Array.from(document.querySelectorAll('i')).forEach(function (iconColor) {
    iconColor.style.color = '#FFFFFF';
  });


  sunSvg.classList.add('show');
  sunSvg.classList.remove('hide');
  moonSvg.classList.remove('show');
});