import styling from './Button.module.css';

const Button = ({children, styles, onClick, type, disabled, title}) => {
    return (
        <button title={title} disabled={disabled} type={type} onClick={onClick} style={styles} className={styling.btn}>{children}</button>
    )
}

export default Button;