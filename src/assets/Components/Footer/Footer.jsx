import { TbBrandFacebook, TbBrandYoutube, TbBrandTwitter, TbBrandInstagram } from "react-icons/tb";
import './Footer.css';

function Footer() {
    return (
        <>
            <footer id='footer'>
                <div className="footer-container">
                    <div className="footer-logo">
                        <a href="#"><span>Q</span>uickMart</a>
                        <div className="footer-social">
                            <TbBrandFacebook className="icon" />
                            <TbBrandYoutube className="icon" />
                            <TbBrandTwitter className="icon" />
                            <TbBrandInstagram className="icon" />
                        </div>
                    </div>


                <div className="footer-links">
                    <strong>Product</strong>
                    <ul>
                        <li><a href="#">Clothes</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">New</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <strong>Category</strong>
                    <ul>
                        <li><a href="#">Beauty</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Meats</a></li>
                        <li><a href="#">Goods</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <strong>Contact</strong>
                    <ul>
                        <li><a href="#">Phone : +023786731</a></li>
                        <li><a href="#">Email : Example@gmail.com</a></li>
                    </ul>
                </div>




                </div>
            </footer>
        </>
    );
}

export default Footer;
