import { Suspense } from "react";
import Header from '../Header/Header';

export default function Layout({ children }) {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    {children}
                </Suspense>
            </main>
        </>
    );
}

