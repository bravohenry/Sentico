import { ArrowRight } from 'lucide-react'
import { ASSETS } from '../constants'
import { MediaFrame, type MediaFit } from './MediaFrame'

interface Row {
  title: string
  description: string
  image: string
  fit: MediaFit
  reverse?: boolean
}

const ROWS: Row[] = [
  {
    title: 'Conversations that convert.',
    description:
      'Our AI voice agent handles orders, modifications, and upsells with natural language—turning every call into revenue.',
    image: ASSETS.voiceSpeaker,
    fit: 'square',
  },
  {
    title: 'Your restaurant. Running smarter.',
    description:
      'Real-time analytics, inventory insights, and labor optimization—all in one beautiful dashboard your team will love.',
    image: ASSETS.analyticsDashboard,
    fit: 'landscape',
    reverse: true,
  },
  {
    title: 'Built to serve. Made to scale.',
    description:
      'From single locations to enterprise chains, Sentico grows with you—unified operations across every touchpoint.',
    image: ASSETS.robotsPair,
    fit: 'wide',
  },
]

/** 左右交替图文特性区块 */
export function AlternatingFeatures() {
  return (
    <section className="alt-features" aria-label="产品亮点">
      <div className="container alt-features__stack">
        {ROWS.map((row) => (
          <div
            key={row.title}
            className={`alt-row ${row.reverse ? 'alt-row--reverse' : ''}`}
          >
            <div className="alt-row__text">
              <h2 className="alt-row__title">{row.title}</h2>
              <p className="alt-row__desc">{row.description}</p>
              <a href="#" className="link-arrow">
                Learn more
                <ArrowRight size={16} aria-hidden />
              </a>
            </div>
            <MediaFrame
              src={row.image}
              alt={row.title}
              fit={row.fit}
              className="alt-row__media"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
