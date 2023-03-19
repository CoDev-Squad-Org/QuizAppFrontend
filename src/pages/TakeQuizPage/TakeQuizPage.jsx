import React from 'react'
import { AnswersTakeQuizz } from '../../components/AnswersTakeQuizz/AnswersTakeQuizz';
import { HeaderTakeQuiz } from '../../components/HeaderTakeQuiz/HeaderTakeQuiz';
import { Question } from '../../components/Question/Question';
import "./TakeQuizPage.scss";

const TakeQuizPage = () => {
  return (
    <div className='TakeQuizPage'>

      <HeaderTakeQuiz actualQuestion="4" totalQuetions="10" />
      <Question lenguage="HTML" question="¿Que significa las siglas HTML?" level="Fácil"/>
      <AnswersTakeQuizz/>
    </div>
  )
}

export default TakeQuizPage