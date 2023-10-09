export class Question {
  constructor(data) {
    this.question = data.question
    this.category = data.category
    this.difficulty = data.difficulty
    this.type = data.type
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers

  }


  get questionTemplate() {
    return `<section class="row" id="scoreBoard"> </section>
    <section class="row"> 
    <div class="col-12 text-center mt-5">
      <h1>${this.question}</h1>
    </div>
  </section>
  <section class="row justify-content-around mt-5 border border-4 border-dark mb-3">
    <div class="col-3 border border-2 border-primary rounded bg-secondary text-center my-3">
      <h2 role="button" type="button" onclick="app.QuestionsController.setAnswer('TrueBtn', '${this.correctAnswer}')">True</h2>
    </div>
    <div class="col-3 border border-2 border-primary rounded bg-secondary text-center my-3">
      <h2 role="button" type="button" onclick="app.QuestionsController.setAnswer('FalseBtn', '${this.correctAnswer}')">False</h2>
    </div>
  </section>
    `
  }



}