import React from "react";
import video from "../assets/review/vid.mp4";

export default function BurgerReviewPage() {
  const review = {
    name: "Smoky Bacon Cheddar Burger",
    location: "Big Bite Grill, Lagos",
    rating: 4.5,
    description:
      "A juicy beef patty topped with crispy bacon, sharp cheddar, caramelized onions, and smoky BBQ sauce served on a toasted brioche bun.",
    videoUrl: "/videos/smoky-burger.mp4",
    criteria: [
      { label: "Taste", score: 5 },
      { label: "Juiciness", score: 4 },
      { label: "Bun Quality", score: 5 },
      { label: "Creativity", score: 4 },
      { label: "Value", score: 4 },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center">🍔 Burger Review</h1>

      {/* Featured Video */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        />
      </div>

      {/* Burger Info */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{review.name}</h2>
        <p className="text-gray-500">{review.location}</p>
        <p className="text-yellow-500 font-medium">⭐ {review.rating} / 5</p>
        <p className="text-gray-700">{review.description}</p>
      </div>

      {/* Criteria */}
      <div>
        <h3 className="font-semibold mb-2">Rating Criteria</h3>
        <ul className="space-y-1">
          {review.criteria.map((item, idx) => (
            <li key={idx} className="flex justify-between border-b pb-1">
              <span>{item.label}</span>
              <span className="text-yellow-500">{item.score} / 5</span>
            </li>
          ))}
        </ul>
      </div>

      {/* User Comments (Placeholder) */}
      <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
        <h3 className="font-semibold mb-2">User Comments</h3>
        <p className="text-gray-500 italic">
          Comments coming soon! 🍔 Share your thoughts with us.
        </p>
      </div>
    </div>
  );
}
