import { ArrowRight, Play, Star } from 'lucide-react'
import { ASSETS } from '../constants'
import { MediaFrame } from './MediaFrame'

/** 首屏 Hero 区域 */
export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="pill">AI FOR RESTAURANTS</span>
          <h1 className="hero__title">
            The intelligent operating system for modern restaurants.
          </h1>
          <p className="hero__subtitle">
            AI voice ordering, next-gen POS, robotics that work together to delight
            guests, empower teams, and grow your business.
          </p>
          <div className="hero__ctas">
            <a href="#" className="btn btn--primary">
              Book a demo
              <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#" className="hero__watch">
              <Play size={18} aria-hidden />
              Watch overview
            </a>
          </div>
          <div className="hero__proof">
            <div className="hero__avatars" aria-hidden>
              {ASSETS.avatars.map((src, i) => (
                <img key={i} src={src} alt="" width={40} height={40} />
              ))}
            </div>
            <div className="hero__stars" aria-label="5 星评价">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#F5B800" stroke="#F5B800" />
              ))}
            </div>
            <p className="hero__trust">
              Trusted by <strong>2,000+</strong> restaurants worldwide
            </p>
          </div>
        </div>
        <div className="hero__visual">
          <MediaFrame
            src={ASSETS.heroSuite}
            alt="Sentico 平板 POS、迎宾机器人与服务机器人产品组合展示"
            fit="hero"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
