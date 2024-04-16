import './button.css'

export function CompetenceButton ({onClick, showComp,comp}) {
    const handleClick = () => {
        onClick(comp)
    }
    return (
        <button  onClick={handleClick}>
            {showComp ? 'Убрать компетенции': 'Показать все компетенции'}
        </button>
    )
}
export function CompetenceButtonMore ({onClick,showComp,comp}) {
    const handleClick = () => {
        onClick(comp)
    }
    return (
        <button  onClick={handleClick}>
            {showComp ? 'Скрыть': 'Показать > 50%'}
        </button>
    )
}
export function CompetenceButtonLess ({onClick, showComp,comp}) {
    const handleClick = () => {
        onClick(comp)
    }
    return (
        <button  onClick={handleClick}>
            {showComp ? 'Скрыть': 'Показать < 50%'}
        </button>
    )
}
