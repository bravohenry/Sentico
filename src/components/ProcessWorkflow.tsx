import { ArrowRight } from 'lucide-react'
import { ASSETS } from '../constants'
import { MediaFrame, type MediaFit } from './MediaFrame'

const STEPS: Array<{
  num: string
  title: string
  description: string
  image: string
  fit: MediaFit
}> = [
  {
    num: '01',
    title: 'Welcome',
    description:
      'Greeter robots greet guests, manage waitlists, and seat parties—creating a memorable first impression.',
    image: ASSETS.stepWelcome,
    fit: 'portrait',
  },
  {
    num: '02',
    title: 'Order',
    description:
      'Guests order via voice, kiosk, or server—with AI that upsells naturally and handles modifications flawlessly.',
    image: ASSETS.stepOrder,
    fit: 'landscape',
  },
  {
    num: '03',
    title: 'Serve',
    description:
      'Serving robots deliver food and drinks to tables, while your team focuses on hospitality and guest experience.',
    image: ASSETS.stepServe,
    fit: 'portrait',
  },
  {
    num: '04',
    title: 'Return',
    description:
      'Digital loyalty in Apple Wallet and Google Pay keeps guests coming back—with personalized offers and rewards.',
    image: ASSETS.stepReturn,
    fit: 'phone',
  },
]

/** 餐厅全流程四步工作流 */
export function ProcessWorkflow() {
  return (
    <section className="process" aria-labelledby="process-heading">
      <div className="container">
        <h2 id="process-heading" className="section-title section-title--center">
          One system across the full restaurant journey
        </h2>
        <div className="process__steps">
          {STEPS.map((step, index) => (
            <div key={step.num} className="process__step-wrap">
              <article className="process__step">
                <span className="process__num">{step.num}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
                <MediaFrame
                  src={step.image}
                  alt={`${step.title} 环节示意图`}
                  fit={step.fit}
                  className="process__media"
                />
              </article>
              {index < STEPS.length - 1 && (
                <ArrowRight
                  className="process__arrow"
                  size={20}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
