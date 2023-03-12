import './styles.css'

export default function Footer() {
    return(
        <footer className='footer'>
            <div className='footer-container'> {/* nada     impede de se usar container-footer.... */}
            <div className="footer-div">
                <h2 className='footer-logo'>Logo Here</h2>
                <p className='footer-text'>Automate your entire healthcare hiring, onboarding and compilance with a true technology platform</p>
                <div className="subscribe-healthcare"> {/* o de cima é x */}
                    <input className='subscribe-input' type="email" placeholder="Email Address" />
                    <button className="healthcare-subscribe-btn">Register</button> {/* esse é y? */}
                </div>
            </div>
            <div className="footer-div">
                <h2 className='h2-tag'>CATEGORIES</h2>
                <a href="#" className="link">Product Management</a>
                <a href="#" className="link">Design / Creatives</a>
                <a href="#" className="link">Education & Training</a>
            </div>
            <div className="footer-div">
                <h2 className='h2-tag'>ABOUT</h2>
                <a href="#" className="link">About Us</a>
                <a href="#" className="link">Partnerships</a>
                <a href="#" className="link">Finance Experts</a>
                <a href="#" className="link">Project Management</a>
            </div>
            <div className="footer-div">
                <h2 className='h2-tag'>FOLLOW US</h2>
                <a href="#" className="link">Facebook</a>
                <a href="#" className="link">Twitter</a>
                <a href="#" className="link">Instagram</a>
                <a href="#" className="link">LinkedIn</a>
            </div>
            </div>
            <div className="div2">
                <p className='copyright-text'>Copyright © 2023 All Rights Reserved</p>
            </div>
        </footer>

        //DRY Dont Repeat Yourself...ok eu admito, poderia ter usado um grid aqui kkkkkkkkkkkkkkk
    ) 
}