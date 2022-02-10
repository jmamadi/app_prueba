import '../Button/Button.css'

const CartWidget = ({ backgroundColor = '#C4C4C4', colorText= '#000000', handleClick, children= "0", ...rest}) => {
    return (
        <button className="myButton" style={{ backgroundColor, color: colorText }} onClick={handleClick}>🛒{children}</button>
    )
}

export default CartWidget