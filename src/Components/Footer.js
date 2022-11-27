import './Footer.css';

const Footer = () => {
  return (<div id='Footer'>

    <div className="Footer-title">
        Contact me
    </div>
    <div className="socialLinks">
        <a href="https://www.instagram.com/naveenchaudhary1402/"><i class="fa-brands fa-instagram"></i></a>
        <a href="mailto:navi1419naveen@gmail.com"><i class="fa-regular fa-envelope"></i></a>
        <a href="https://www.facebook.com/samrat.navi.52"><i class="fa-brands fa-facebook"></i></a>
        {/* <a href="https://wa.me/916395590860"><i class="fa-brands fa-whatsapp"></i></a> */}
    </div>
    <p>You can contact me at any social media platform i am active on all of those</p>
    </div>
  )
}

export default Footer;
