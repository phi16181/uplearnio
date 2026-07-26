export default function Testimonial({ quote, name, role, initials, color }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-person">
        <div className="avatar" style={{ background: color }}>{initials}</div>
        <div>
          <div className="person-name">{name}</div>
          <div className="person-role">{role}</div>
        </div>
      </div>
    </div>
  )
}
