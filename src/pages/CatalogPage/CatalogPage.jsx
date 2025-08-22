import CamperList from "../../components/CamperList/CamperList";
import SortControl from "../../components/SortControl/SortControl";
import css from './CatalogPage.module.css';

const CatalogPage = () => {
    return (
        <>
            <section className={css.catalog_page}>
                <SortControl />
                <CamperList />
            </section>
        </>
    );
};

export default CatalogPage;
