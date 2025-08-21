import { Link } from "react-router-dom";
import css from "./ReusableButton.module.css";

const ReusableButton = ({ text, linkPath, onClick, customWidth }) => {
    if (linkPath) {
        return (
            <Link to={linkPath} className={css.button} style={{ width: customWidth }}>
                {text}
            </Link>
        );
    }

    if (onClick) {
        return (
            <button onClick={onClick} className={css.button}>
                {text}
            </button>
        );
    }
};

export default ReusableButton;