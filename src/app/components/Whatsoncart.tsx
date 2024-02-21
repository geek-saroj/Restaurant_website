import React from 'react';
import CartComponent from './Whatson';

const items = [
  {
    id: 1,
    image: 'https://cookingchew.com/wp-content/uploads/2022/12/Colorful-Cocktails-CO2370-FE-min.jpg.webp',
    title: 'Margarita Masterclass with Cazcabel Tequila',
    description: 'Join us on Friday 23rd Feb for a very exclusive evening at Balans No.60. Our friends at Cazcabel Tequila will be running an exciting ',
  },
  {
    id: 2,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/01/retro-cocktails-b12b00d.jpg?resize=768,574',
    title: 'Happy Hour returns to No.60',
    description: 'Balans Happy Hour returns to No.60 in Soho with 2 cocktails from our bespoke signature cocktail list for just £16. Including an incredible list of libations designed by world-',
  },
  {
    id: 3,
    image: 'https://miro.medium.com/v2/resize:fit:960/0*h5jRNuTxFiyCkOQ1.png',
    title: 'The Best Brunch in Soho',
    description: 'Having been part of the Soho community since the 1980s, we’ve grown to become one of the area’s favourite brunch spots. Come and try our iconic brunch menu, in the very',
  },
  {
    id: 4,
    image: 'https://cookingchew.com/wp-content/uploads/2022/12/Colorful-Cocktails-CO2370-FE-min.jpg.webp',
    title: 'Margarita Masterclass with Cazcabel Tequila',
    description: 'Join us on Friday 23rd Feb for a very exclusive evening at Balans No.60. Our friends at Cazcabel Tequila will be running an exciting ',
  },
  {
    id: 5,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/01/retro-cocktails-b12b00d.jpg?resize=768,574',
    title: 'Happy Hour returns to No.60',
    description: 'Balans Happy Hour returns to No.60 in Soho with 2 cocktails from our bespoke signature cocktail list for just £16. Including an incredible list of libations designed by world-',
  },
  {
    id: 6,
    image: 'https://miro.medium.com/v2/resize:fit:960/0*h5jRNuTxFiyCkOQ1.png',
    title: 'The Best Brunch in Soho',
    description: 'Having been part of the Soho community since the 1980s, we’ve grown to become one of the area’s favourite brunch spots. Come and try our iconic brunch menu, in the very',
  },
  
];

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 py-[30px]">
          <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[15px] md:px-0 ">
    <div className="container mx-auto">
      <h1 className="text-2xl  mb-4 text-red-500">WHAT'S ON</h1>
      <CartComponent items={items} />
    </div>
    </div>
    </div>
  );
};

export default App;
