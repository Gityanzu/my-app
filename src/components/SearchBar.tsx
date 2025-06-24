
export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-4 pb-2">
      <input
        type="text"
        placeholder="卡提希娅"
        className="flex-1 p-2 rounded-md border border-gray-300 text-sm"
      />
      <button className="px-3 py-1 text-sm bg-gray-200 rounded-md">搜索</button>
      <button className="text-sm">📌 签到</button>
    </div>
  )
}
