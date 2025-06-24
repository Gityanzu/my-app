
const features = [
  '版本资讯', '养成计算器', '签到奖励', 'WIKI', '周年', '大地图'
]

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 text-center text-sm">
      {features.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-10 h-10 bg-yellow-200 rounded-full mb-1" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
