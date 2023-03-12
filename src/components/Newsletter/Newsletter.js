import './styles.css'

export default function Newsletter() {
    return(
        <section className="newsletter-section">
            <div className='newsletter-container'>
            <div className="newsletter">
                <h1 className='newsletter-title'>Subscribe to get updated</h1>
                <p className='newsletter-paragraph'>At vero eos at accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque.</p>
            </div>
            <div className="subscribe-newsletter">
                <button className="subscribe-btn">Get start</button>
            </div>
            </div>
        </section>
    )
}