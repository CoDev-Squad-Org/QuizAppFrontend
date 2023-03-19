import React from 'react'
import "./Question.scss";

export const Question = ({lenguage, question, level}) => {
  return (
    <div className='Question'>
        <span className='Question__lenguage'>{lenguage}</span>
        <span className='Question__text'>{question}</span>
        <span className='Question__level'>{level}</span>
    </div>
  )
}
