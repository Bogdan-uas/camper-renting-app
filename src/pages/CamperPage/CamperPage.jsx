import CamperInfo from "../../components/CamperInfo/CamperInfo";
import CamperInfoDetails from "../../components/CamperInfoDetails/CamperInfoDetails";

import css from './CamperPage.module.css';

const CamperPage = () => {
    return (
        <section className={css.camper_page}>
            <CamperInfo />
            <CamperInfoDetails />
        </section>
    );
};

export default CamperPage;
