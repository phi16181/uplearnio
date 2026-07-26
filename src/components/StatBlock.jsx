export default function StatBlock({ value, label }) {
  return (
    <div className="stat-block">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  )
}
