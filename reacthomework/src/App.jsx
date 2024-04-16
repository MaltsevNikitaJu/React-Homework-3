import Card from "./components/Card/card";
import faceImg from "./assets/faceImg.svg";
import {
  CompetenceButton,
  CompetenceButtonMore,
  CompetenceButtonLess,
} from "./components/Button/button.jsx";
import {
  CreateCardButton,
  SaveButtonCard,
} from "./components/managementButton/button.jsx";
import cardBase from "./components/Card/cardHolder.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [showComp, setShowComp] = useState(false);
  const [showCompMore, setShowCompMore] = useState(false);
  const [showCompLess, setShowCompLess] = useState(false);
  const [createCard, setCreateCard] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [levelValue, setLevelValue] = useState("");
  const [stateCardBase, setCardBase] = useState(cardBase);

  const toggleComp = (props) => {
    if (props === "Less") {
      setShowCompLess(!showCompLess);
    }
    if (props === "All") {
      setShowComp(!showComp);
    }
    if (props === "More") {
      setShowCompMore(!showCompMore);
    }
    if (props === "Create") {
      setCreateCard(!createCard);
    }
  };

  function SaveCard(event) {
    const newCard = {
      id: stateCardBase.length + 1,
      className: "mediumCard",
      imgStyle: "mediumCardImg",
      textStyle: "mediumCardText",
      text: nameValue,
      level: levelValue,
    };
    const updatedCardBase = [...cardBase, newCard];
    setCardBase(updatedCardBase);
    event.preventDefault();
  }
  function DeleteCard(id) {
    const updatedCardBase = stateCardBase.filter(
      (element) => element.id !== id
    );
    setCardBase(updatedCardBase);
    console.log(updatedCardBase)
    console.log(id)
  }

  return (
    <>
      <Card
        src={faceImg}
        className="mainCard"
        imgStyle="face"
        textStyle="mainCardText"
        text="Мальцев Никита Юрьевич"
      />
      <CompetenceButtonLess
        onClick={toggleComp}
        showComp={showCompLess}
        comp="Less"
      />
      <CompetenceButton onClick={toggleComp} showComp={showComp} comp="All" />
      <CompetenceButtonMore
        onClick={toggleComp}
        showComp={showCompMore}
        comp="More"
      />
      <CreateCardButton
        onClick={toggleComp}
        showComp={createCard}
        comp="Create"
      />

      {createCard && (
        <form>
          Название:
          <input
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          Уровень:
          <input
            type="text"
            value={levelValue}
            onChange={(e) => setLevelValue(e.target.value)}
          />
          <SaveButtonCard onClick={SaveCard} />
        </form>
      )}

      <div className="competenceCards">
        {showCompLess &&
          stateCardBase.map((element) => {
            if (element.level <= 50) {
              return (
                <Card
                  key={element.id}
                  className={element.className}
                  imgStyle={element.imgStyle}
                  textStyle={element.textStyle}
                  text={element.text}
                  level={element.level}
                  deleteFunction={()=>{DeleteCard(element.id)}}
                  withDeleteButton
                ></Card>
              );
            }
          })}
        {showComp &&
          stateCardBase.map((element) => {
            return (
              <Card
                key={element.id}
                className={element.className}
                imgStyle={element.imgStyle}
                textStyle={element.textStyle}
                text={element.text}
                level={element.level}
                deleteFunction={()=>{DeleteCard(element.id)}}
                withDeleteButton
              ></Card>
            );
          })}
        {showCompMore &&
          stateCardBase.map((element) => {
            if (element.level >= 50) {
              return (
                <Card
                  key={element.id}
                  className={element.className}
                  imgStyle={element.imgStyle}
                  textStyle={element.textStyle}
                  text={element.text}
                  level={element.level}
                  deleteFunction={()=>{DeleteCard(element.id)}}
                  withDeleteButton
                ></Card>
              );
            }
          })}
      </div>
      <div className="whantToLearnCards">
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Алгоритмические навыки"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Умение работать с базами данных"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Умение работать с веб-технологиями"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Тестирование и отладка"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Опыт работы с инструментами разработки"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Опыт работы с операционными системами"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Умение работать в команде"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Проектирование и архитектура"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Знание сетевых технологий"
        />
        <Card
          className="smallCard"
          textStyle="smallCardText"
          text="Умение изучать новые технологии"
        />
      </div>
    </>
  );
}

export default App;
