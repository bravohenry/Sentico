import { ArrowRight } from 'lucide-react'
import { ASSETS } from '../constants'
import { MediaFrame } from './MediaFrame'

/** 钱包与支付集成展示 */
export function Integrations() {
  return (
    <section className="integrations" aria-labelledby="integrations-heading">
      <div className="container integrations__grid">
        <div className="integrations__text">
          <h2 id="integrations-heading" className="section-title">
            Connected to what matters most.
          </h2>
          <p className="integrations__desc">
            Seamless integration with Apple Wallet and Google Pay—plus the POS,
            loyalty, and payment systems you already use.
          </p>
          <a href="#" className="link-arrow">
            Explore integrations
            <ArrowRight size={16} aria-hidden />
          </a>
          <div className="integrations__badges">
            <span className="wallet-badge"> Apple Wallet</span>
            <span className="wallet-badge wallet-badge--google">G Google Pay</span>
          </div>
        </div>
        <div className="integrations__devices">
          <MediaFrame
            src={ASSETS.integrationDevices}
            alt="手机上的 Sentico 数字会员卡界面"
            fit="phone"
            className="integrations__phone-frame"
          />
        </div>
      </div>
    </section>
  )
}
