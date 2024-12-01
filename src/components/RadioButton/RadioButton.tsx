interface RadioButtonProps {
  id: string;
  value: string;
  selectedHosting: string | null;
  setSelectedHosting: React.Dispatch<React.SetStateAction<string | null>>;
  labelText: string;
  className: string;
}

export default function RadioButton({
  id,
  value,
  selectedHosting,
  setSelectedHosting,
  labelText,
  className,
}: RadioButtonProps) {
  return (
    <li>
      <input
        type="radio"
        id={id}
        name="hosting"
        value={value}
        className={`hidden peer ${className}`} // Thêm className vào đây
        required
        checked={selectedHosting === value}
        onChange={() => setSelectedHosting(value)}
      />
      <label htmlFor={id} className={className}>
        <div className="block">
          <div className="w-full text-sm">{labelText}</div>
        </div>
      </label>
    </li>
  );
}
