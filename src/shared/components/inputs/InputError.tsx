export default function InputError({ error }: { error: string }) {
  return <p className="text-red text-xs mt-1">{error}</p>;
}
