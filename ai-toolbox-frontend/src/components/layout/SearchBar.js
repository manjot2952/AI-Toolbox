import React from "react";
import { Search, Filter, RefreshCcw } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center gap-3 mt-4">
      
      {/* Search Input */}
      <div className="flex items-center bg-white px-4 py-3 rounded-xl w-full shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-orange-400 focus-within:ring-offset-2 transition-all duration-200">
        <Search className="w-5 h-5 text-gray-500 mr-3" />
        <input
          type="text"
          placeholder="Search AI tools, categories, or features..."
          className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent"
        />
        <RefreshCcw className="w-4 h-4 text-gray-500 cursor-pointer ml-3 hover:text-gray-700 hover:rotate-180 transition-all duration-300" />
      </div>

      {/* Filter Button */}
      <button className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md active:scale-95 transition-all duration-200">
        <Filter className="w-5 h-5 text-gray-700" />
        <span className="text-gray-700 font-medium">Filter</span>
      </button>

      {/* Search Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium shadow hover:shadow-lg active:scale-95 transition-all duration-200">
        Search
      </button>
    </div>
  );
}
