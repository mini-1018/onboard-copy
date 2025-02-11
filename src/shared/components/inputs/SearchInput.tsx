export default function SearchInput({ ...props }) {
  return (
    <input
      type="text"
      placeholder="검색어를 입력해주세요."
      className="w-full p-2 rounded-lg border border-primary"
      {...props}
    />
  );
}
