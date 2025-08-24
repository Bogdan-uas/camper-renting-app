import { Suspense } from "react";
import Header from '../Header/Header';
import Loader from "../reusables/Loader/Loader";

export default function Layout({ children }) {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Header />
            </Suspense>
            <main>
                <Suspense fallback={<Loader />}>
                    {children}
                </Suspense>
            </main>
        </>
    );
}

