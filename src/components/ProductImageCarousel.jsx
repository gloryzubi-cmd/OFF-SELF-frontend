import { useState, useRef } from 'react'

export default function ProductImageCarousel({ images, alt, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1)
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
      }
    }
  }

  if (!images || images.length === 0) return null

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`${alt} - angle ${i + 1}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(i)
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === activeIndex
                  ? 'bg-on-primary w-3'
                  : 'bg-on-primary/40 hover:bg-on-primary/60'
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Arrow navigation */}
      {images.length > 1 && (
        <>
          {activeIndex > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(activeIndex - 1)
              }}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:bg-black/50 transition-colors z-10"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            </button>
          )}
          {activeIndex < images.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(activeIndex + 1)
              }}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:bg-black/50 transition-colors z-10"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          )}
        </>
      )}
    </div>
  )
}
