function Button(props) {
    return (
        <button onClick={props.onClick} className={props.className} disabled={props.disabled}>{props.innerHTML}</button>
    )
}

export default Button;