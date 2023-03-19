import React from 'react'
import "./HeaderTakeQuiz.scss";

export const HeaderTakeQuiz = ({actualQuestion, totalQuetions}) => {
  return (
    <div className='HeaderTakeQuiz'>
        <span>{actualQuestion}/{totalQuetions}</span>
        <span>Score</span>
        <span>9 seg</span>
    </div>
  )
}
