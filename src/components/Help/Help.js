import React from "react";
import XCircle from '../../assets/x-circle.svg'
import './styles.css'

export default function Help() {
    return(
        <section className="asked-questions-section">
            <div className="asked-questions-div">
                <h1 className="asked-questions-title">Frequently Asked Questions</h1>
                <p className="user-support">Can't able to find answers you're looking for? reach out to <a href="#">our team</a></p>
            </div>
            <div className="credit-card-div">
                <div className="credit-card-question-div">
                    <h2 className="credit-card-question">Will we be charged when the free trial is over?</h2>
                    <img src={XCircle} alt="" className="question-icon" />
                </div>
                <p className="credit-card-answer">
                    We do not collect credit card information during your free trial or if you decide to use Hive Solo. If you choose the upgrade, we will then collect credit card information and bill based on your subscription type.
                </p>
            </div>
        </section>
    )
}