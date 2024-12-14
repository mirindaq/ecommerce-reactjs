import { Product } from '../../types/product.type';
import Pagination from '../Pagination/Pagination';

interface TableComponentProps {
  productList: Product[]
  page: string,
  onNext: () => void
  onPrevious: () => void,
  limit: string,
  total: number
}

export default function TableComponent(props: TableComponentProps) {
  const { page, limit, onNext, onPrevious, total, productList } = props;

  return (
    <div className="p-8 relative overflow-x-auto">


      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Tên sản phẩm</th>
            <th scope="col" className="px-6 py-3">Hãng</th>
            <th scope="col" className="px-6 py-3">Loại sản phẩm</th>
            <th scope="col" className="px-6 py-3">Giá</th>
            <th scope="col" className="px-6 py-3">Giảm giá</th>
            <th scope="col" className="px-6 py-3">Tồn kho</th>
            <th scope="col" className="px-6 py-3">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-5">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                  />
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
              <td className="px-6 py-4">{item.brandName}</td>
              <td className="px-6 py-4">{item.categoryName}</td>
              <td className="px-6 py-4">{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(item.price)}</td>
              <td className="px-6 py-4">{item.discount}%</td>
              <td className="px-6 py-4">{item.stock}</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={Number(page)} onNext={onNext} onPrev={onPrevious} pageSize={Number(limit)} totalEntries={total} />
    </div>
  );
};

