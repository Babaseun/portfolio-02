document.addEventListener('scroll', () => {
 const summary = document.querySelector('.personal-summary');
 const secondSummary = document.querySelector('.education-section');

 const position = summary.getBoundingClientRect().top;
 if (position <= 435.265625) {
  summary.classList.add('display');
 }
 if (position <= 47) {
  secondSummary.classList.add('display');
 }
});
