// App.jsx

import React from 'react';
import Slider from './Slider';
import RadhaKrishnImage from '../../src/RadhaKrishn.jpg';
import dropImage from '../../src/drop.jpg';
import skyImage from '../../src/sky.jpg';
import seaImage from '../../src/sea.jpg';
import wallImage from '../../src/wall.jpg';
import beachImage from '../../src/beach.jpg';



const App = () => {
  const images = [RadhaKrishnImage, dropImage, skyImage, seaImage, wallImage, beachImage];

  return (
    <div>
      <h1><center>Image Slider</center></h1>
      <Slider images={images} />
    </div>
  );
};

export default App;
