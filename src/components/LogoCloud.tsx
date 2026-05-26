import { LOGO_NAMES } from '../constants'

/** 合作餐厅 Logo 云（文字灰度样式，与设计稿一致） */
export function LogoCloud() {
  return (
    <section className="logo-cloud" aria-labelledby="logo-cloud-heading">
      <div className="container">
        <p id="logo-cloud-heading" className="section-label">
          TRUSTED BY INNOVATIVE RESTAURANTS
        </p>
        <ul className="logo-cloud__list">
          {LOGO_NAMES.map((name) => (
            <li key={name}>
              <span className="logo-cloud__item">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
