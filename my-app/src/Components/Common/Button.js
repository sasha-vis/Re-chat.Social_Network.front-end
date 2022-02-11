function Button(props) {
    return (
        <button onClick={props.onClick} className={props.className}>{props.innerHTML}</button>
    )
}

export default Button;