import { DeleteCardButton } from '../managementButton/button'
import './card.css'

function Card(props) {
  
  return (
    <>   
      <div className={props.className}>
            <img src={props.src} className={props.imgStyle} />
            <div className={props.textStyle}>{props.text} {props.level && props.level + "%"}</div>
            {props.withDeleteButton && <DeleteCardButton onClick={props.deleteFunction}></DeleteCardButton>}
      </div> 
    </>
  )
}

export default Card
