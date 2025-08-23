import { Link } from "react-router-dom";
import css from "./ReusableButton.module.css";

const ReusableButton = ({ text, linkPath, onClick, type, customWidth, customPadding }) => {
    if (linkPath) {
        return (
            <Link to={linkPath} className={css.button} style={{ width: customWidth, padding: customPadding }}>
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type || "button"}
            onClick={onClick}
            className={css.button}
            style={{ width: customWidth, padding: customPadding }}
        >
            {text}
        </button>
    );
};

export default ReusableButton;