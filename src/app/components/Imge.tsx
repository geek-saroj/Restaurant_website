// App.tsx

import React from 'react';
import ImageWithText from './Imageandtext';

const App: React.FC = () => {
  return (
    <div className="p-8">
      <ImageWithText
        imageSrc="https://via.placeholder.com/400"
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default App;
