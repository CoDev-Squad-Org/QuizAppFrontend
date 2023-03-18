import React from "react";
import { Header } from "../../components/Header/Header";
import { ReturnNav } from "../../components/returnNav/ReturnNav";
import { AnswerOption } from "../../components/AnswerOption/AnswerOption";
import "./CreateQuizPage.scss";

const CreateQuizPage = () => {
  return (
    <div className="CreateQuizPage">
      <Header color="orange" />
      <ReturnNav text="Crea" />
      <div className="answerSection">
        <section className="selectSection">
          <select name="nivel" id="nivel" className="selectSection__select">
            <option value="Nivel" selected>
              Nivel
            </option>
            <option value="Facil">Facil</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Dificil">Dificil</option>
          </select>
          <select
            name="lenguaje"
            id="lenguaje"
            className="selectSection__select"
          >
            <option value="Lenguaje" selected>
              Lenguaje
            </option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Pyton</option>
          </select>
        </section>
        <form className="questionForm">
          <input
            type="text"
            placeholder="Escribe un pregunta"
            className="questionForm__input"
          />
          <button type="submit" className="questionForm__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="white"
              className="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>
        </form>
        <section className="optionsSection">
          <p className="optionsSection__text">Respuestas</p>
          <div className="optionsContainer">
            <AnswerOption text="Lorem Ipsum Dolor.." />
            <AnswerOption text="Lorem Ipsum Dolor.." />
            <AnswerOption text="Lorem Ipsum Dolor.." />
            <AnswerOption text="Lorem Ipsum Dolor.." />
            <button className="optionsContainer__button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>

          <div className="actionSection">
            <button className="actionSection__button actionSection__button-anterior">
              Anterior
            </button>
            <button className="actionSection__button actionSection__button-siguiente">
              Siguiente
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateQuizPage;
