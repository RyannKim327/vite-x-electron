import { inputs } from '../interfaces'
import './input.css'

export default function Input(props: inputs) {
  return (
    <span className={`${props.className ?? ""} p-2 border-2 border-solid border-current rounded box-border w-full mpop-input`}>
      <span>{props.children}</span>
      <input type={props.type} id={props.name} name={props.name} placeholder=" " />
    </span>
  )
}
