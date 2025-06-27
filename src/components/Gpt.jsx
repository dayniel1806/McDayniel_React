import React from 'react';

const burgers = [
  {
    title: '50/50 BURGERS',
    price: '$12.99',
    description:
      'With 50% of bacon and 50% beef, it is what you need to satisfy your burger cravings. There is a 100% chance you will love this burger',
    image:
      'https://i.imgur.com/L5xW6KY.png', // Replace with your actual burger image URL
  },
  {
    title: 'DONUT BURGERS',
    price: '$12.99',
    description:
      'The Donut burger features a beef patty, bacon, and cheese sandwiched between two glazed donuts, resulting in a sweet and savory combination.',
    image:
      'https://i.imgur.com/Wd0dSWW.png',
  },
  {
    title: 'JUICY GRIDDLE',
    price: '$12.99',
    description:
      'Whether made with ground chicken or whole chicken breast, the Chicken burger caters to various tastes and preferences.',
    image:
      'https://i.imgur.com/oJb0shj.png',
  },
];

export default function BurgerMenu() {
  return (
    <div className="bg-[#050519] min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {burgers.map((burger, index) => (
          <div
            key={index}
            className="bg-[#0f0f1f] text-white rounded-3xl shadow-lg p-6 flex flex-col justify-between items-center text-center border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-2">{burger.title}</h2>
            <p className="text-orange-500 text-md font-bold mb-4">{burger.price}</p>
            <img
              src={burger.image}
              alt={burger.title}
              className="w-40 h-40 object-contain mb-4"
            />
            <p className="text-sm sm:text-base mb-4">{burger.description}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
