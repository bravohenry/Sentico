interface LogoProps {
  /** 是否仅显示图标（页脚等紧凑场景） */
  compact?: boolean
}

/** Sentico 品牌标识（与 Wallet 卡一致的八角星标） */
export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#" className="logo" aria-label="Sentico 首页">
      <svg
        className="logo__icon"
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
        <path d="M12 6.5l.9 3.1L16 10.5l-3.1.9L12 14.5l-.9-3.1L8 10.5l3.1-.9L12 6.5z" opacity="0.35" />
      </svg>
      {!compact && <span className="logo__text">Sentico</span>}
    </a>
  )
}
