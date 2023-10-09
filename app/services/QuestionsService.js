import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { Pop } from "../utils/Pop.js";

class QuestionsService {
  setAnswer(button, answer) {
    let correctAnswer = null
    let btnInput = null
    if (answer == 'True') {
      correctAnswer = true
    } else {
      correctAnswer = false
    }
    if (button == 'TrueBtn') {
      btnInput = true

    } else {
      btnInput = false
    }
    if (correctAnswer == btnInput) {
      Pop.success('Great Job')
      AppState.points++
    } else {
      Pop.toast('Nice Try')
      AppState.points--
    }
  }

  async getQuestions() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
    console.log('retrieved questions', response.data.results);

    const newQuestions = response.data.results.map(question => new Question(question))

    AppState.questions = newQuestions
    console.log('[QuestionsService] getQuestions questions in appstate', AppState.questions);
  }



}



export const questionsService = new QuestionsService()