function Button({ onbuttonclick }) {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'c', '+', '-', '*', '/', '=']
    return (
        <>
            {
                buttons.map((buttons) => (
                    <button onClick={() => onbuttonclick(buttons)}>{buttons}</button>
                ))
            }
        </>
    )
}
export default Button;