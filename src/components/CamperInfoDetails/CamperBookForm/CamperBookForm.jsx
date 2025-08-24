import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

import css from './CamperBookForm.module.css';
import ReusableButton from '../../reusables/ReusableButton/ReusableButton';

const CamperBookForm = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success(
            <div>
                <strong>Successfully booked!</strong>
                <div>We will contact you soon. Have a great day!</div>
            </div>,
            {
                duration: 4000,
                position: "top-center"
            }
        );

        setDateRange([null, null]);
        e.currentTarget.reset();
    };

    return (
        <>
            <Toaster position="top-right" />
            <form className={css.booking_form} onSubmit={handleSubmit}>
                <div className={css.booking_form_content}>
                    <h2 className={css.booking_form_title}>Book your campervan now</h2>
                    <span className={css.booking_form_subtitle}>
                        Stay connected! We are always ready to help you.
                    </span>
                </div>

                <div className={css.input_container}>
                    <input
                        className={css.input}
                        type="text"
                        placeholder="Name*"
                        required
                        name="name"
                    />
                    <input
                        className={css.input}
                        type="email"
                        placeholder="Email*"
                        required
                        name="email"
                    />
                    <DatePicker
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => setDateRange(update)}
                        placeholderText="Select booking dates"
                        dateFormat="dd/MM/yyyy"
                        className={css.input}
                        minDate={new Date()}
                    />
                    <textarea
                        className={css.textarea}
                        name="comment"
                        placeholder="Comment"
                    />
                    <ReusableButton text="Send" customPadding="16px 63px" type="submit" />
                </div>
            </form>
        </>
    );
};

export default CamperBookForm;