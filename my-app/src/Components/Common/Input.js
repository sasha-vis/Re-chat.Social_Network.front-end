function Input(props) {
    return (
        <input value={props.value} onChange={props.func} placeholder={props.placeholder} type={props.type} maxLength={props.maxLength} minLength={props.minLength} ></input>
    )
}

export default Input;