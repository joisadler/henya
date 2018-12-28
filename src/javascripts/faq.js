export default () => {
  const faqCircles = document.querySelectorAll('.faq-circle');
  
  /* eslint-disable no-param-reassign */
  faqCircles.forEach((circle) => {
    const questionContainer = circle.parentElement;

    questionContainer.addEventListener('click', (event) => {
      if (!circle.parentElement.classList.contains('faq-action-container')) {
        const question = event.currentTarget;
        const answer = question.nextElementSibling;
        const circleIsRotated = circle.style.transform === 'rotate(90deg)';

        if (circleIsRotated) {
          circle.style.transform = 'rotate(0deg)';
          if (answer) answer.style.display = 'none';
        } else {
          circle.style.transform = 'rotate(90deg)';
          if (answer) answer.style.display = 'flex';
        }
      }

    });
  });

  const moreQuestions = document.getElementById('more-questions');
  moreQuestions.firstElementChild.firstElementChild.style.transform = 'rotate(90deg)';
  const hiddenQuestions = document.querySelectorAll('.hidden-question');
  moreQuestions.addEventListener('click', () => {
    hiddenQuestions.forEach((q) => {
      q.style.display = 'flex';
      moreQuestions.style.display = 'none';
      const hideQuestions = document.getElementById('hide-questions');
      hideQuestions.style.display = 'flex';
    });
  });

  const hideQuestions = document.getElementById('hide-questions');
  hideQuestions.firstElementChild.firstElementChild.style.transform = 'rotate(270deg)';
  hideQuestions.style.display = 'none';
  hideQuestions.addEventListener('click', () => {
    hiddenQuestions.forEach((q) => {
      q.style.display = 'none';
      moreQuestions.style.display = 'flex';
      hideQuestions.style.display = 'none';
    });
    const answers = document.querySelectorAll('.answer-container');
    answers.forEach((a) => {
      if (a.style.display === 'flex') {
        a.style.display = 'none';
        a.previousElementSibling.firstElementChild.style.transform = 'rotate(0deg)';
      }
    });
  });
};
