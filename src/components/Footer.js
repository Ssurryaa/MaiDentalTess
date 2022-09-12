import logo from '../assets/Logo.png';
import Facebook from '../assets/sosmed/Facebook.svg';
import Twitter from '../assets/sosmed/Twitter.svg';
import Instagram from '../assets/sosmed/Instagram.svg';
import Line from '../assets/sosmed/Line.svg';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 z-50 bg-bgfooter shadow-sm backdrop-blur-lg text-black lg:px-24">
                <div>
                    <img src={logo} alt="Logo" />
                    <p className='text-start mt-4 mb-4'>best quality treatment and patient <br></br>care by professionals.</p>
                    <div className='flex flex-wrap'>
                        <a className='transition duration-300 ease-in-out hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Facebook}/>
                        </a>
                        <a className='transition duration-300 ease-in-out hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Twitter}/>
                        </a>
                        <a className='transition duration-300 ease-in-out hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Instagram}/>
                        </a>
                        <a className='transition duration-300 ease-in-out hover:shadow-xl mr-6 rounded-md scale-125'>
                            <img src={Line}/>
                        </a>
                    </div>  
                </div> 
                <div className='mt-3'>
                    <span className="footer-title">Treatment</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div className='mt-3'>
                    <span className="footer-title">Blog</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div className='mt-3'>
                    <span className="footer-title">Tentang</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div>
            </footer>
            <hr></hr>
            <div className='bg-bgfooter'>
                <p className='text-black py-2'>©2022 Mai Dental. All rights reserved.</p>
            </div>
        </div>
    );
  };
  
  export default Footer;
  