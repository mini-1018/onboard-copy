export default function InputLabel({
  label,
  htmlFor,
}: {
  label: string;
  htmlFor: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-bold text-primary">
      {label}
    </label>
  );
}
