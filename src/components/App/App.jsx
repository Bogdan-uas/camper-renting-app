import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import Loader from "../reusables/Loader/Loader";
import { selectIsLoading, selectError } from "../../redux/selectors";

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage/ErrorPage"));

function App() {
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);

    return (
        <>
            {isError && <ErrorPage error={isError} />}
            {isLoading && <Loader />}
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/catalog/:id" element={<CamperPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Layout>
            </Suspense>
        </>
    );
}

export default App;