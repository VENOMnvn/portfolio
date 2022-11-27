import './Skills.css';
import FlipButton from './SmallComp/FlipButton';
import htmlIcon from './SmallComp/html.webp';
import cssIcon from './SmallComp/css.png';
import reactIcon from './SmallComp/react.jpg';
import reduxIcon from './SmallComp/redux-cover-imgage.jpg';
import jsIcon from './SmallComp/js.png';
import BIcon from './SmallComp/bootstrap-icons.jpg';

const Skills = () => {
  return (
    <div id='Skills'>
          <div className="title SkillsT"> Skills </div>
          <div className="sub-title" id='skillP1'>Reflects in my projects</div>
          <div className="sub-title" id='skillP2'>I am Self taught Web Developer learn skills from various sources</div>
<div className="skills">        
        <FlipButton icon={reactIcon} name={"ReactJS"}> </FlipButton>
        <FlipButton icon={reduxIcon} name={"Redux"}> </FlipButton>
        <FlipButton icon={jsIcon} name={"JavaScript"}> </FlipButton>
        <FlipButton icon={cssIcon} name={"CSS"}> </FlipButton>
        <FlipButton icon={htmlIcon} name={"HTML"}> </FlipButton>
        <FlipButton icon={BIcon} name={"CSS FrameWorks"}> </FlipButton>
      </div>
    </div>
  )
}

export default Skills
