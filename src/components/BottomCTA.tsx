import { ArrowRight, MessageCircle } from 'lucide-react'
import { ASSETS } from '../constants'

/** 页底行动号召 */
export function BottomCTA() {
  return (
    <section className="bottom-cta" aria-labelledby="bottom-cta-heading">
      <div className="container">
        <div
          className="bottom-cta__card"
          style={
            {
              '--cta-branch': `url(${ASSETS.branchDecor})`,
            } as React.CSSProperties
          }
        >
          <div className="bottom-cta__content">
            <h2 id="bottom-cta-heading" className="bottom-cta__title">
              Ready to transform your restaurant experience?
            </h2>
            <p className="bottom-cta__subtitle">
              Join thousands of restaurants using Sentico to delight guests and
              grow revenue.
            </p>
            <div className="bottom-cta__actions">
              <a href="#" className="btn btn--primary">
                Book a demo
                <ArrowRight size={18} aria-hidden />
              </a>
              <a href="#" className="bottom-cta__sales">
                <MessageCircle size={18} aria-hidden />
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
