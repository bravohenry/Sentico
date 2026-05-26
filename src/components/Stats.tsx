import { TrendingUp, Smile, Clock, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Stat {
  value: string
  label: string
  icon: LucideIcon
}

const STATS: Stat[] = [
  {
    value: '+18%',
    label: 'Increase in average check size',
    icon: TrendingUp,
  },
  {
    value: '+27%',
    label: 'Improvement in guest satisfaction',
    icon: Smile,
  },
  {
    value: '-22%',
    label: 'Reduction in order handling time',
    icon: Clock,
  },
  {
    value: '+31%',
    label: 'Increase in repeat visits',
    icon: Users,
  },
]

/** 数据成果展示 */
export function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-heading">
      <div className="container">
        <h2 id="stats-heading" className="section-title section-title--center">
          Real results from real restaurants.
        </h2>
        <div className="stats__grid">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <article key={stat.label} className="stat-card">
                <Icon className="stat-card__icon" size={20} strokeWidth={1.75} />
                <p className="stat-card__value">{stat.value}</p>
                <p className="stat-card__label">{stat.label}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
