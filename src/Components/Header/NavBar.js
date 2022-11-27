import './NavBar.css';
import logoDay from './2.svg'
import {useRef} from 'react';
const NavBar = (e) => {

  const light = useRef();
  const dark = useRef();
  
  const light2 = useRef();
  const dark2 = useRef();


  function changeThemDark()
  {
    console.log("run");
    document.documentElement.style.setProperty('--sbg', '#201f1f');
    document.documentElement.style.setProperty('--bg', 'black');
    document.documentElement.style.setProperty('--bbg', 'rgb(167, 167, 167)');

    e.area();
    light.current.style.display = "none";
    dark.current.style.display = "block";

    light2.current.style.display = "none";
    dark2.current.style.display = "block";
  }

  function changeThemLight()
  {
    document.documentElement.style.setProperty('--bg', 'rgb(13, 19, 39)');
    document.documentElement.style.setProperty('--sbg', 'rgb(30, 45, 95)');
    document.documentElement.style.setProperty('--bbg', 'white');
    e.area2();
    light.current.style.display = "block";
    dark.current.style.display = "none";

    light2.current.style.display = "block";
    dark2.current.style.display = "none";
  }

  return (
    <nav>
     <div className="logo">
     <div className="venom">
          Venom
        </div>
     </div>   
    <div className="icons">
      <a href="https://www.instagram.com/naveenchaudhary1402/"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://github.com/VENOMnvn"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/naveenchaudhary1402/"><i class="fa-brands fa-linkedin"></i></a>
    </div>

    <div className="switch">
      <div className="sun changeTheme" onClick={changeThemDark} ref={light}>Dark</div>
      <div className="moon changeTheme" onClick={changeThemLight} ref={dark}>Light</div>
    </div>


    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div className="menu-c"><div class='menu-button'></div></div>
  </label>
    <ul class="menu">
      <li><a href="https://www.instagram.com/naveenchaudhary1402/">Instagram</a></li>
      <li><a href="https://github.com/VENOMnvn">Github</a></li>
      <li><a href="https://www.linkedin.com/in/naveenchaudhary1402/">Linkedin</a></li>
      <li>
      <div className="sun changeTheme" onClick={changeThemDark} ref={light2}>Dark Mode</div>
      <div className="moon changeTheme" onClick={changeThemLight} ref={dark2}>Light Mode</div>
      </li>
      <li>
        <a href="mailto:navi1419naveen@gmail.com">Email</a>
      </li>
    </ul>



   </nav>
  )
}

export default NavBar
