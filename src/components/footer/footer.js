import './footer.css';
import { Link } from 'react-router-dom';



const Footer = () => {
  const homePress = () => {
      window.scrollTo(0, 0)
  }

    return (
        <div className="footer">
            <div className="footerMenu">
                    <div className="footerColumn">
                        <Link className="link" onClick={homePress} to="/">Home</Link>
                        <Link className="link" to="/">Hello</Link>
                        <Link className="link" to="/">My Name</Link>
                        <Link className="link" to="/">Is Nikita</Link>
                    </div>
                    <div className="footerColumn">
                        <Link className="link" to="/">About us</Link>
                        <Link className="link" to="/">FAQ</Link>
                        <Link className="link" to="/">More Sites</Link>
                        <Link className="link" to="/">Pravacy policy</Link>
                    </div>
                    <div className="footerColumn">
                        <Link className="link" to="/">Top Apple</Link>
                        <Link className="link" to="/">Top Netflix</Link>
                        <Link className="link" to="/">Term of services</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
