export class Question {
  constructor(data) {
    this.question = data.question;
    this.answers = [data.correct_answer, ...data.incorrect_answers].sort(() => 0.5 - Math.random());
    this.correctAnswer = data.correct_answer;
  }

  get cardHTMLTemplate() {
    return `
      <div>
        <h4>${this.question}</h4>
        ${this.answers
        .map(answer => `<button onclick="app.QuestionsController.answerQuestions('${answer}')">${answer}</button>`)
        .join('')}
        </div>`;
  }
}