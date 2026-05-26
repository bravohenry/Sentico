import { ArrowRight } from 'lucide-react'

/** 顶部公告条 */
export function TopBar() {
  return (
    <div className="top-bar" role="region" aria-label="产品更新公告">
      <p>
        New: Sentico OS 2.0 is here.{' '}
        <a href="#">
          Explore the update
          <ArrowRight size={14} aria-hidden />
        </a>
      </p>
    </div>
  )
}
