// import React, { useState } from 'react';

// const OrderPage = () => {
//   const [order, setOrder] = useState({
//     bun: '',
//     patty: '',
//     extras: [],
//     toppings: [],
//     sauce: '',
//     side: '',
//     drink: '',
//     instructions: '',
//     delivery: 'pickup',
//   });

//   // Handle change for text / select inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrder({ ...order, [name]: value });
//   };

//   // Handle checkboxes for extras & toppings
//   const handleCheckboxChange = (e, field) => {
//     const { value, checked } = e.target;
//     setOrder((prev) => {
//       const updated = checked
//         ? [...prev[field], value]
//         : prev[field].filter((item) => item !== value);
//       return { ...prev, [field]: updated };
//     });
//   };

//   // Handle submit: save order to localStorage (or call backend)
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Save to localStorage
//     const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
//     localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

//     alert('Order placed! 🍔');
//     console.log('Order:', order);

//     // Reset form if needed
//     setOrder({
//       bun: '',
//       patty: '',
//       extras: [],
//       toppings: [],
//       sauce: '',
//       side: '',
//       drink: '',
//       instructions: '',
//       delivery: 'pickup',
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl">
      
//       {/* Left: Form */}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <h2 className="text-3xl font-bold">🍔 Build Your Burger</h2>
//         <p className="text-gray-500">Customize it your way, then place your order!</p>

//         <div>
//           <label className="block font-medium mb-1">Bun</label>
//           <select name="bun" value={order.bun} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="">Choose bun</option>
//             <option value="classic">Classic</option>
//             <option value="brioche">Brioche</option>
//             <option value="gluten-free">Gluten-Free</option>
//           </select>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Patty</label>
//           <select name="patty" value={order.patty} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="">Choose patty</option>
//             <option value="beef">Beef</option>
//             <option value="chicken">Chicken</option>
//             <option value="veggie">Veggie</option>
//             <option value="double">Double Beef</option>
//           </select>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Extras</label>
//           <div className="flex flex-wrap gap-3">
//             {['Cheddar', 'Swiss', 'Bacon', 'Fried Egg'].map((item) => (
//               <label key={item} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={item.toLowerCase()}
//                   checked={order.extras.includes(item.toLowerCase())}
//                   onChange={(e) => handleCheckboxChange(e, 'extras')}
//                   className="mr-1"
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Toppings</label>
//           <div className="flex flex-wrap gap-3">
//             {['Lettuce', 'Tomato', 'Onions', 'Pickles'].map((item) => (
//               <label key={item} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={item.toLowerCase()}
//                   checked={order.toppings.includes(item.toLowerCase())}
//                   onChange={(e) => handleCheckboxChange(e, 'toppings')}
//                   className="mr-1"
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Sauce</label>
//           <select name="sauce" value={order.sauce} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="">Choose sauce</option>
//             <option value="bbq">BBQ</option>
//             <option value="spicy-mayo">Spicy Mayo</option>
//             <option value="ketchup">Ketchup</option>
//           </select>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Side</label>
//             <select name="side" value={order.side} onChange={handleChange} className="w-full p-2 border rounded">
//               <option value="">Choose side</option>
//               <option value="fries">Fries</option>
//               <option value="onion-rings">Onion Rings</option>
//             </select>
//           </div>
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Drink</label>
//             <select name="drink" value={order.drink} onChange={handleChange} className="w-full p-2 border rounded">
//               <option value="">Choose drink</option>
//               <option value="soda">Soda</option>
//               <option value="milkshake">Milkshake</option>
//             </select>
//           </div>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Special instructions</label>
//           <textarea
//             name="instructions"
//             value={order.instructions}
//             onChange={handleChange}
//             rows={2}
//             className="w-full p-2 border rounded"
//             placeholder="e.g., no onions, extra spicy..."
//           ></textarea>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Delivery option</label>
//           <div className="flex gap-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="delivery"
//                 value="delivery"
//                 checked={order.delivery === 'delivery'}
//                 onChange={handleChange}
//                 className="mr-1"
//               />
//               Delivery
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="delivery"
//                 value="pickup"
//                 checked={order.delivery === 'pickup'}
//                 onChange={handleChange}
//                 className="mr-1"
//               />
//               Pickup
//             </label>
//           </div>
//         </div>

//         <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition">
//           Place Order
//         </button>
//       </form>

//       {/* Right: Visual preview */}
//       <div className="flex flex-col items-center justify-center text-center p-4 border-l border-gray-200">
//         <h3 className="text-xl font-semibold mb-2">🍔 Your Burger Preview</h3>
//         <div className="space-y-1 text-gray-700">
//           <p><strong>Bun:</strong> {order.bun || '-'}</p>
//           <p><strong>Patty:</strong> {order.patty || '-'}</p>
//           <p><strong>Extras:</strong> {order.extras.length ? order.extras.join(', ') : '-'}</p>
//           <p><strong>Toppings:</strong> {order.toppings.length ? order.toppings.join(', ') : '-'}</p>
//           <p><strong>Sauce:</strong> {order.sauce || '-'}</p>
//           <p><strong>Side:</strong> {order.side || '-'}</p>
//           <p><strong>Drink:</strong> {order.drink || '-'}</p>
//           <p><strong>Delivery:</strong> {order.delivery}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderPage;


function Order() {
    return <h2>Order Page</h2>;
}

export default Order;
