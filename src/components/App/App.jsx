import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import css from './App.module.css'
import { useState, useEffect } from "react";

export default function App() {

    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

    useEffect(() => {
        const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
        if (storedFeedback) {
            setFeedback(storedFeedback);
        }
    }, []);

    useEffect(() => {
        localStorage.getItem("num-of-clicks", JSON.stringify(feedback))
    }, [feedback])

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };

    return (
        <div className={css.box}>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
            {totalFeedback > 0 ? (
                <Feedback
                    good={feedback.good}
                    neutral={feedback.neutral}
                    bad={feedback.bad}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            ) : (
                <Notification/>
            )}
        </div>
    )
}