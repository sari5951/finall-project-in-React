import React, { useState } from "react";
import { Link } from 'react-router-dom';
export const Order = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [kindEvent, setkindEvent] = useState();
    const handaleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setName('');
        setPhone('');
        setkindEvent('');
    };
    return (
        <div>
            <h1>בארים מתוקים</h1>
            <h2>בואו להזניק את האירוע שלכם עם בר מתוק וממותג, שיקפיץ כל אירוע לליגה הבאה.<br>
            </br>הבארים שלנו מעוצבים וממותגים עם אקססוריז מלא סטייל וניחוח יוקרתי ותואם לאופי האירוע,<br>
                </br>מה שהופך את האירוע שלכם ליוצא דופן ומעורר השראה.</h2>
            {/* תמונות להזמנות */}
            <h2>רוצים לרגש ולהתרגש<br></br>
                באירוע פרימיום ממותג ?
            </h2>
            <form onSubmit={handaleSubmit}>

                <label>name<input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></label>
                <label>email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                <label>phone<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required /></label>
                <label>kindEvent<input type="text" value={kindEvent} onChange={(e) => setkindEvent(e.target.value)} required /></label>
                <br></br>
                <br></br>
                <button type="submit">כזה ארוע אני רוצה!💗</button>



            </form>
        </div>
    )
}