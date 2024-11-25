import { IconType } from "react-icons";

interface ButtonHeaderProps {
  title: string;
  icon: IconType;
}

const ButtonHeader = ({ title, icon: Icon }: ButtonHeaderProps) => {
  return (
    <li>
      <div className="flex items-center bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base sm:text-sm lg:text-base px-4 py-2.5 sm:px-3 sm:py-2 text-center mb-1 transition-all duration-300 ease-in-out dark:focus:ring-yellow-500">
        <div className="flex items-center">
          <Icon className="mr-2 text-gray-500" />
          <span>{title}</span>
        </div>
      </div>
    </li>
  );
};

export default ButtonHeader;
