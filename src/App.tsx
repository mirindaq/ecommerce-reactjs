import useRouteElement from "./useRouteElement";

export default function App() {
  const element = useRouteElement();

  return <div>{element}</div>;
}
