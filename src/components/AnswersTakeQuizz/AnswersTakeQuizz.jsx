import React from "react";
import "./AnswersTakeQuizz.scss";

export const AnswersTakeQuizz = () => {
  return (
    <form className="formAnswersTakeQuizz">
      <div className="answerContainer">
        
        <label htmlFor="answer1" className="formAnswersTakeQuizz__label"><input
          type="checkbox"
          name="answer1"
          value="HyperText Markup Language"
          className="formAnswersTakeQuizz__input"
          id="answer1"
        />
          HyperText Markup Language
        </label>
        
        <label htmlFor="answer2" className="formAnswersTakeQuizz__label">
        <input
          type="checkbox"
          name="answer2"
          value="Hyper Tool Management Language"
          className="formAnswersTakeQuizz__input"
          id="answer2"
        />Hyper Tool Management Language
        </label>
        
        <label htmlFor="answer3" className="formAnswersTakeQuizz__label">
        <input
          type="checkbox"
          name="answer3"
          value="High-Tech Music Library"
          className="formAnswersTakeQuizz__input"
          id="answer3"
        />High-Tech Music Library
        </label>
        
        <label htmlFor="answer4" className="formAnswersTakeQuizz__label">
        <input
          type="checkbox"
          name="answer4"
          value="Hyper-Textual Meta-Language"
          className="formAnswersTakeQuizz__input"
          id="answer4"
        />Hyper-Textual Meta-Language
        </label>
        
        <label htmlFor="answer5" className="formAnswersTakeQuizz__label">
        <input
          type="checkbox"
          name="answer5"
          value="High-Performance Technical Markup Language"
          className="formAnswersTakeQuizz__input"
          id="answer5"
        />High-Performance Technical Markup Language
        </label>
      </div>
      <button type="submit" className="formAnswersTakeQuizz__button">
        Enviar
      </button>
    </form>
  );
};
