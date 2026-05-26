import { Mic, Monitor, Bot, UtensilsCrossed, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ASSETS } from '../constants'
import { MediaFrame, type MediaFit } from './MediaFrame'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  image: string
  fit: MediaFit
}

const FEATURES: Feature[] = [
  {
    icon: Mic,
    title: 'AI Voice Ordering',
    description:
      'Natural conversations that take orders, answer questions, and upsell—24/7, in any language.',
    image: ASSETS.voiceSpeaker,
    fit: 'square',
  },
  {
    icon: Monitor,
    title: 'Next-Gen POS',
    description:
      'A beautiful, intuitive point of sale that your team will actually love using.',
    image: ASSETS.posTerminal,
    fit: 'landscape',
  },
  {
    icon: Bot,
    title: 'Greeter Robots',
    description:
      'Welcome guests, manage waitlists, and guide diners to their tables with a smile.',
    image: ASSETS.greeterRobot,
    fit: 'portrait',
  },
  {
    icon: UtensilsCrossed,
    title: 'Serving Robots',
    description:
      'Deliver food and drinks efficiently, freeing your staff to focus on hospitality.',
    image: ASSETS.servingRobot,
    fit: 'portrait',
  },
  {
    icon: Wallet,
    title: 'Wallet Loyalty',
    description:
      'Digital loyalty cards in Apple Wallet and Google Pay—no app download required.',
    image: ASSETS.walletPhone,
    fit: 'phone',
  },
]

/** 五大产品能力卡片网格 */
export function FeatureGrid() {
  return (
    <section className="feature-grid" aria-labelledby="feature-grid-heading">
      <div className="container">
        <div className="feature-grid__cards">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="feature-card">
                <Icon className="feature-card__icon" size={22} strokeWidth={1.75} />
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.description}</p>
                <MediaFrame
                  src={feature.image}
                  alt={`${feature.title} 产品示意图`}
                  fit={feature.fit}
                  className="feature-card__media"
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
