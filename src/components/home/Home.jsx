import React from 'react';
import { useNavigate} from 'react-router-dom';
import './home.css';
import icon from './icon2.png';
export default function Home() { 
  const navigate = useNavigate();

  const navigateToContents = () => {
    // 👇️ navigate to /contacts
    navigate('/content');
  };
  return (
    <div className="total">
    <div className='home'>
      <span className="logo">SCRIBBLE</span>
      <span className='caption'>Write smarter, not harder, our intuitive writing assistant "scribble"</span>
      
      <button className='btn' onClick={navigateToContents} >Get Started</button>
    </div>
    <img className='img' src={icon} alt="wizard"  />
    </div>
  );
}
