import { Link } from "react-router-dom";
import css from "./ReusableButton.module.css";

const ReusableButton = ({ text, linkPath, onClick = () => {}, type = "button", customWidth, customPadding, variant, target = "_self" }) => {
    const buttonClass = variant === "reset" ? css.resetButton : css.button;

    if (linkPath) {
        return (
            <Link
                to={linkPath}
                className={buttonClass}
                style={{ width: customWidth, padding: customPadding }}
                target={target}
            >
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type || "button"}
            onClick={onClick}
            className={buttonClass}
            style={{ width: customWidth, padding: customPadding }}
        >
            {text}
        </button>
    );
};

export default ReusableButton; 