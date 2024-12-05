import { NavLink } from "react-router";
import { QueryConfig } from "../../ProductListSearch";

interface SortBoxProps {
  title: string,
  sortBy: string,
  params: QueryConfig
  sortOrder?: string
}

export default function SortBox(props: SortBoxProps) {
  const { title, params, sortBy, sortOrder } = props;

  // sortBy?: "createdDate" | "rating" | "price";
  // sortOrder?: "asc" | "desc";

  const updatedParams = Object.fromEntries(
    Object.entries({
      ...params,
      sortBy: sortBy,
      sortOrder: sortOrder || "desc"
    }).filter(([, value]) => value !== null && value !== undefined && value !== "")
  );

  const queryString = new URLSearchParams(updatedParams).toString();
  const linkTo = `/products?${queryString}`;
  console.log(linkTo);

  return (
    <>

      <NavLink to={linkTo}
        className={({ isActive }) =>
          isActive && location.search.includes(`sortBy=${sortBy}`) &&
            location.search.includes(`sortOrder=${sortOrder || "desc"}`)
            ? "text-sm cursor-pointer text-blue-500 font-semibold"
            : "text-sm cursor-pointer hover:text-blue-500"
        }>
        {title}
      </NavLink >
    </>
  )
}
