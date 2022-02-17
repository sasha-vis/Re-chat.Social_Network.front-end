function Input(props) {
    return (
        <input value={props.value} onChange={props.func} placeholder={props.placeholder} type={props.type}></input>
    )
}

export default Input;