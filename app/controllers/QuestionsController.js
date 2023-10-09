import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawQuestions() {
  let content = ''
  AppState.questions.forEach(question => content += question.questionTemplate)
  setHTML('questions', content)

}

function _drawPoints() {
  let point = 0
  point = AppState.points
  setText('points', point)
}

function _drawScore() {
  let content = `<div class="col-12 sticky">
  <p class="fs-2 fw-bolder">Points: <span id="points">0</span></p>
</div>`
  setHTML('scoreBoard', content)
}


export class QuestionsController {
  constructor() {
    this.getQuestions()
    AppState.on('points', _drawPoints)
  }

  drawQuestions() {
    _drawQuestions()
    _drawScore()
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
      console.log('[QuestionsController] getQuestions Questions Got!');

    } catch (error) {
      console.error(error)
    }
  }
  async setAnswer(button, answer) {
    await questionsService.setAnswer(button, answer)
    _drawPoints

  }
}
