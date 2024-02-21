import React from 'react';

interface CartItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Props {
  items?: CartItem[]; // Make items prop optional
}

const CartComponent: React.FC<Props> = ({ items }) => {
  // Check if items is undefined
  if (!items) {
    return null; // Or handle the case where items is undefined
  }

  return (
   

    <div className="flex flex-wrap justify-center ">
      {items.map((item) => (
        <div key={item.id} className="w-full md:w-1/3 p-4 rounded-lg ">
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_0_20px_theme('colors.blue.500')]">
            <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform hover:scale-105" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-red-500">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        </div>
        
      ))}
    </div>
   
  
  );
};

export default CartComponent;
