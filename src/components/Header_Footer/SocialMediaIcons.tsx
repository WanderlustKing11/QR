import { useState } from 'react';
import { IconButton } from '@mui/material';
import { FacebookSharp, Instagram, MailOutline } from '@mui/icons-material';

const SocialMediaIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className='social_media_icons'>
      <IconButton
        className={`icon-button ${hoveredIcon === 'facebook' ? '' : 'hovered'}`}
        href='https://www.facebook.com/QualityRefrigerationQRS/'
        onMouseEnter={() => handleIconHover('facebook')}
        onMouseLeave={handleIconLeave}
        aria-label='Facebook'
      >
        <FacebookSharp />
      </IconButton>
      <IconButton
        className={`icon-button ${
          hoveredIcon === 'instagram' ? '' : 'hovered'
        }`}
        href='https://www.instagram.com/qualityrefrigerationnj/'
        onMouseEnter={() => handleIconHover('instagram')}
        onMouseLeave={handleIconLeave}
        aria-label='Instagram'
      >
        <Instagram />
      </IconButton>
      <IconButton
        className={`icon-button ${hoveredIcon === 'email' ? '' : 'hovered'}`}
        href='mailto:office@qualityrefrigerationnj.com'
        onMouseEnter={() => handleIconHover('email')}
        onMouseLeave={handleIconLeave}
        aria-label='Email'
      >
        <MailOutline />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
