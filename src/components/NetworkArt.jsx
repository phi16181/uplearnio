export default function NetworkArt() {
  return (
    <svg viewBox="0 0 420 420" width="100%" style={{ maxWidth: 420 }}>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="210" cy="210" r="190" fill="url(#glow)" />
      {[
        [210, 210], [110, 120], [300, 90], [340, 220], [270, 320],
        [130, 300], [70, 200], [230, 60], [370, 150],
      ].map(([x1, y1], i, arr) => {
        const [x2, y2] = arr[(i + 1) % arr.length]
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#lineGrad)" strokeWidth="1" opacity="0.5" />
        )
      })}
      {[
        [210, 210, 22, '#5eead4'],
        [110, 120, 9, '#38bdf8'],
        [300, 90, 7, '#5eead4'],
        [340, 220, 10, '#38bdf8'],
        [270, 320, 8, '#5eead4'],
        [130, 300, 9, '#38bdf8'],
        [70, 200, 6, '#5eead4'],
        [230, 60, 6, '#38bdf8'],
        [370, 150, 7, '#5eead4'],
      ].map(([cx, cy, r, fill], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={fill} opacity={i === 0 ? 1 : 0.85} />
      ))}
    </svg>
  )
}
