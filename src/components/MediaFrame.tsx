/** 图片适配比例类型 */
export type MediaFit =
  | 'square'
  | 'landscape'
  | 'portrait'
  | 'phone'
  | 'hero'
  | 'step'
  | 'wide'
  | 'decor'

interface MediaFrameProps {
  src: string
  alt: string
  fit?: MediaFit
  className?: string
  loading?: 'lazy' | 'eager'
}

/** 统一图片容器：居中 contain，按场景比例适配 */
export function MediaFrame({
  src,
  alt,
  fit = 'square',
  className = '',
  loading = 'lazy',
}: MediaFrameProps) {
  return (
    <div className={`media-frame media-frame--${fit} ${className}`.trim()}>
      <img src={src} alt={alt} loading={loading} decoding="async" />
    </div>
  )
}
