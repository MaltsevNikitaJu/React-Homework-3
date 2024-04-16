export function CreateCardButton({ onClick, showComp, comp }) {
  const handleClick = () => {
    onClick(comp);
  };
  return (
    <button onClick={handleClick}>
      {showComp ? "Отменить создание" : "Создать карточку"}
    </button>
  );
}
export function SaveButtonCard ({onClick}) {
    return <button onClick={onClick}>{"Cохранить"}</button>;
}

export function DeleteCardButton ( {onClick}) {
    return <button onClick={onClick}>{"Удалить"}</button>
}