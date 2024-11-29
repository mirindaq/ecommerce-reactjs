interface NavigationBoxProps {
  title: string;
}

export default function NavigationBox(props: NavigationBoxProps) {
  const { title } = props;
  return (
    <>
      <div className="text-center">{title}</div>
    </>
  );
}
