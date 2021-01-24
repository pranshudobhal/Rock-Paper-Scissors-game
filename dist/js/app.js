const btnRules = document.querySelector('.rules__btn');
const btnRulesClose = document.querySelector('.close-btn');

btnRules.addEventListener('click', function () {
  document.querySelector('.rules-modal').style.display = 'block';
});

btnRulesClose.addEventListener('click', function () {
  document.querySelector('.rules-modal').style.display = 'none';
});
