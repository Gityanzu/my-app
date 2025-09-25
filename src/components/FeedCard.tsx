export default function FeedCard() {
  return (
    <div className="border rounded-lg p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <div>
          <div className="text-sm font-semibold">绝世蘑菇</div>
          <div className="text-xs text-gray-500">04-22</div>
        </div>
      </div>
      <div className="text-sm mb-2">什么叫你看得见我看不见的女人</div>
      <div className="grid grid-cols-2 gap-2">
        {/* <img src="https://via.placeholder.com/150" alt="1" className="rounded" />
        <img src="https://via.placeholder.com/150" alt="2" className="rounded" /> */}
      </div>
    </div>
  )
}
