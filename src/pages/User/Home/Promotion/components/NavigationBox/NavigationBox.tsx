// interface NavigationBoxProps {
//   title: string;
// }

export default function NavigationBox() {
  return (
    <>
      <div className="grid grid-cols-7 gap-1 ">
        <div className="col-span-1 text-center py-5 bg-orange-100 text-orange-600 border-b-2 border-transparent cursor-pointer transition duration-200 rounded-tl-lg border-orange-500">
          FlashSale
        </div>
        <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
          Độc quyền
        </div>
        <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
          Điện thoại
        </div>
        <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
          Apple
        </div>
        <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
          Laptop
        </div>
        <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200">
          Phụ kiện
        </div>
        <div className="col-span-1 text-center py-5 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-600 border-b-2 border-transparent hover:border-orange-500 cursor-pointer transition duration-200 rounded-tr-lg">
          Đồng hồ
        </div>
      </div>
    </>
  );
}
