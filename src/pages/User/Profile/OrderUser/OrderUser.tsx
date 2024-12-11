import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import Button from "../../../../components/Button/Button";

export default function OrderUser() {
  const [selectedHosting, setSelectedHosting] = useState<string | null>(null);

  return (
    <Fragment>
      <p className="text-xl mb-4">Đơn hàng đã mua</p>
      <div className="mb-3">
        <ul className="w-full flex justify-start gap-3">
          <RadioButton
            id="hosting-all"
            value="all"
            selectedHosting={selectedHosting}
            setSelectedHosting={setSelectedHosting}
            labelText="Tất cả"
            className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border border-gray-400 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-900 peer-checked:border-blue-900 peer-checked:text-blue-900 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          />
          <RadioButton
            id="hosting-pending"
            value="pending"
            selectedHosting={selectedHosting}
            setSelectedHosting={setSelectedHosting}
            labelText="Chờ xử lý"
            className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border border-gray-400 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-900 peer-checked:border-blue-900 peer-checked:text-blue-900 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          />
          <RadioButton
            id="hosting-confirmed"
            value="confirmed"
            selectedHosting={selectedHosting}
            setSelectedHosting={setSelectedHosting}
            labelText="Đã xác nhận"
            className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border border-gray-400 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-900 peer-checked:border-blue-900 peer-checked:text-blue-900 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          />
          <RadioButton
            id="hosting-shipping"
            value="shipping"
            selectedHosting={selectedHosting}
            setSelectedHosting={setSelectedHosting}
            labelText="Đang giao hàng"
            className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border border-gray-400 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-900 peer-checked:border-blue-900 peer-checked:text-blue-900 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          />
          <RadioButton
            id="hosting-canceled"
            value="canceled"
            selectedHosting={selectedHosting}
            setSelectedHosting={setSelectedHosting}
            labelText="Đã hủy"
            className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border border-gray-400 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-900 peer-checked:border-blue-900 peer-checked:text-blue-900 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          />
          <RadioButton
            id="hosting-completed"
            value="completed"
            selectedHosting={selectedHosting}
            setSelectedHosting={setSelectedHosting}
            labelText="Thành công"
            className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-white border border-gray-400 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-900 peer-checked:border-blue-900 peer-checked:text-blue-900 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          />
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        {" "}
        <div className="bg-white rounded-md border px-6 pt-4 pb-5 w-full mx-auto">
          <div className="flex justify-between border-b pb-2">
            <p className="text-sm">
              <span className="font-semibold">Đơn hàng:</span>{" "}
              #00809SH23010937237
            </p>
            <p className="text-sm">
              <span className="font-semibold text-green-500">Đã nhận hàng</span>
            </p>
          </div>
          <div className="grid grid-cols-12  pt-4">
            <div className="col-span-2 flex justify-center">
              <img
                src="https://cdn.tgdd.vn/Products/Images/57/244687/pin-polymer-10000mah-ava-plus-jp208-thumb-400x400.jpeg"
                alt="Premium Watch"
                className="w-20 h-20"
              />
            </div>
            <div className="col-span-6">
              <p className="text-sm">
                Pin sạc dự phòng Polymer 10000mAh AVA+ JP208 Đen
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-sm text-end">
                <span className="font-semibold">Tổng tiền:</span> 250.000₫
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 col-start-11">
              <Button className="w-full border-orange-400 border text-orange-400 font-normal text-sm hover:bg-orange-400 hover:text-white py-2 px-2 rounded-md transition-all duration-300 flex justify-center items-center">
                {" "}
                Xem chi tiết
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md border px-6 pt-4 pb-5 w-full mx-auto">
          <div className="flex justify-between border-b pb-2">
            <p className="text-sm">
              <span className="font-semibold">Đơn hàng:</span>{" "}
              #00809SH23010937237
            </p>
            <p className="text-sm">
              <span className="font-semibold text-green-500">Đã nhận hàng</span>
            </p>
          </div>
          <div className="grid grid-cols-12  pt-4">
            <div className="col-span-2 flex justify-center">
              <img
                src="https://cdn.tgdd.vn/Products/Images/57/244687/pin-polymer-10000mah-ava-plus-jp208-thumb-400x400.jpeg"
                alt="Premium Watch"
                className="w-20 h-20"
              />
            </div>
            <div className="col-span-6">
              <p className="text-sm">
                Pin sạc dự phòng Polymer 10000mAh AVA+ JP208 Đen
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-sm text-end">
                <span className="font-semibold">Tổng tiền:</span> 250.000₫
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 col-start-11">
              <Button className="w-full border-orange-400 border text-orange-400 font-normal text-sm hover:bg-orange-400 hover:text-white py-2 px-2 rounded-md transition-all duration-300 flex justify-center items-center">
                {" "}
                Xem chi tiết
              </Button>
            </div>
          </div>
        </div>
        <nav className="flex justify-end">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
