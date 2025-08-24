import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = ({ error }) => {
    
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className={styles.container}>
                <h1 className={styles.title}>Something went wrong</h1>
                <p className={styles.message}>
                    {error?.message || "An unexpected error occurred."}
                </p>
                <button onClick={handleRetry} className={styles.button}>
                    Try Again
                </button>
        </div>
    );
};

export default ErrorPage;