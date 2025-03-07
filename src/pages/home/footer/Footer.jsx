import logo from '../../../../public/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-32' src={logo} alt="" />
                    <p className='ms-6 font-semibold text-lg'>TRAVEL</p>
                </div>
                <div>
                    <span className="footer-title">Travel</span>
                    <a className="link link-hover">cox bazar</a> 
                    <a className="link link-hover">Thailand</a>
                    <a className="link link-hover">Sylhet</a>
                    <a className="link link-hover">Sajek valley</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;