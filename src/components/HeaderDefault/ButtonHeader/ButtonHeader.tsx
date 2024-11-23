import { IconType } from "react-icons";

interface ButtonHeaderProps {
  title: string;
  icon: IconType;
}

export default function ButtonHeader(props: ButtonHeaderProps) {
  const { title, icon: Icon } = props;

  return (
    <button
      type="button"
      className="flex items-center bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base sm:text-sm lg:text-base px-4 py-2.5 sm:px-3 sm:py-2 text-center mb-1 transition-all duration-300 ease-in-out dark:focus:ring-yellow-500 text-black"
    >
      <Icon className="mr-2 text-2xl sm:text-xl md:text-2xl lg:text-3xl text-black" />
      {title}
    </button>
  );
}
