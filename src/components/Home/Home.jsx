import css from "./Home.module.css";
import ReusableButton from "../reusables/ReusableButton/ReusableButton";

const Home = () => {
    return (
        <div className={css.home_container}>
            <div className={css.text_container}>
                <h1 className={css.main_title}>Campers of your dreams</h1>
                <p className={css.home_text}>You can find everything you want in our catalog</p>
                <ReusableButton text="View Now" linkPath="/catalog" customWidth={'173px'} />
            </div>
        </div>
    );
};

export default Home;