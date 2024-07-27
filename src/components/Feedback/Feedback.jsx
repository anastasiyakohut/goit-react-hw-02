import css from './Feedback.module.css'

export default function Feedback({good, neutral, bad, totalFeedback, positiveFeedback}) {
    return (
        <div className={css.feedback}>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total feedback: {totalFeedback}</li>
                <li>Positive feedback: {positiveFeedback}%</li>
            </ul>
        </div>
    )
}