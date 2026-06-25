
import React from "react";

export default function ToolCard({ tool }) {
  console.log("Rendering ToolCard for:", tool.name); // Debugging line
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
      
      {/* Thumbnail */}
      <img
        src= ""
        alt={tool.name}
        // onError={(e) => {
        //   e.target.src = "../assets/icons/AI_Toolbox_Icon.png";
        // }}
        className="w-16 h-16 rounded-lg object-cover mb-4 transition-transform duration-300 group-hover:scale-110"
      />

      {/* Title */}
      <h3 className="font-semibold text-xl text-gray-900">{tool.name}</h3>

      {/* Category */}
      <p className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 text-sm mt-2 transition-colors duration-200">
        {tool.category}
      </p>

      {/* Description */}
      <p className="mt-3 text-gray-600 text-sm line-clamp-2">{tool.description}</p>

      {/* Footer Stats */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>⭐ {tool.rating}</span>
        <span>{tool.users}</span>
        {tool.premium && (
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md transition-transform duration-200">
            Premium
          </span>
        )}
      </div>

      {/* CTA Button */}
      <button className="mt-4 bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 active:scale-95 transition-all duration-200 font-medium">
        Try Now
      </button>
    </div>
  );
}
