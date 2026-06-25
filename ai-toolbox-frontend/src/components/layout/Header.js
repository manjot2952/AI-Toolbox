import { Wand2 } from "lucide-react";  

function Header({ title, subtitle, Icon ,bgcolor="bg-white" }) {
  return (
    <div className={`${bgcolor} rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-6 mb-6 max-w-full overflow-hidden`}>
      <div className="flex items-center gap-3 mb-2">
        
        {/* Icon */}
        {Icon && <Icon className="w-6 h-6 text-blue-700 flex-shrink-0" size={26} />}

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 break-words">
          {title}
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg -mt-1">
        {subtitle}
      </p>
    </div>
  );
}

export default Header;
