import Logo from '../../resources/images/qr_logo_sm.png'
import SocialMediaIcons from './SocialMediaIcons';


const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <div className='footer_title'>
        <img src={Logo} alt='Quality Refrigeration Logo' />
        <SocialMediaIcons />
      </div>

      <div className='footer_divider'></div>

      <div className='footer_links'>
        <ul>
          <li>About Us</li>
          <li>Products</li>
          <li>Services</li>
          <li>Go Green</li>
        </ul>
      </div>

      <div className='footer_contact'>
        <p>Phone: (973) 372-0220 </p>
        <p>OFFICE@QUALITYREFRIGERATIONNJ.COM</p>
        <p>806 Co Rd 579</p>
        <p>Pittstown, NJ 08867</p>
      </div>
    </div>
  )
};

export default Footer;