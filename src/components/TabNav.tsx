
const tabs = ['推荐', '今州茶馆', '攻略', '新手', '同人', 'Cosplay']

export default function TabNav() {
  return (
    <div className="flex overflow-x-auto px-4 gap-4 text-sm border-b">
      {tabs.map((tab, idx) => (
        <div key={idx} className="pb-2 border-b-2 border-transparent whitespace-nowrap">
          {tab}
        </div>
      ))}
    </div>
  )
}
