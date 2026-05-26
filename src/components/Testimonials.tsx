import { ArrowRight } from 'lucide-react'
import { ASSETS } from '../constants'

const TESTIMONIALS = [
  {
    quote:
      'Sentico transformed how we handle peak hours. Our greeter robot manages the waitlist while servers focus on hospitality—and guests love it.',
    name: 'Sarah Chen',
    role: 'VP of Operations',
    company: 'True Food Kitchen',
    avatar: ASSETS.testimonials[0],
  },
  {
    quote:
      "The voice ordering alone paid for itself in three months. We're capturing orders we used to miss after hours, and check averages are up 18%.",
    name: 'Marcus Williams',
    role: 'Director of Technology',
    company: 'Yard House',
    avatar: ASSETS.testimonials[1],
  },
  {
    quote:
      'Rolling out to 200+ locations was seamless. One platform for POS, robots, and loyalty—finally, technology that scales with us.',
    name: 'Elena Rodriguez',
    role: 'Chief Digital Officer',
    company: 'Panda Express',
    avatar: ASSETS.testimonials[2],
  },
] as const

/** 客户评价轮播区 */
export function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonials__header">
          <h2 id="testimonials-heading" className="section-title">
            Loved by restaurant leaders
          </h2>
          <a href="#" className="link-arrow">
            See all customer stories
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <footer className="testimonial-card__author">
                <img
                  src={t.avatar}
                  alt={`${t.name} 头像`}
                  width={48}
                  height={48}
                  className="testimonial-card__avatar"
                />
                <div>
                  <cite className="testimonial-card__name">{t.name}</cite>
                  <p className="testimonial-card__role">
                    {t.role}, {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="testimonials__dots" role="tablist" aria-label="评价分页">
          <span className="dot dot--active" aria-current="true" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </section>
  )
}
