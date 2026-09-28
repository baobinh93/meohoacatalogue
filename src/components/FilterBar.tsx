import type { ProductCategory } from '../types/product'

interface FilterBarProps {
  activeFilter: 'all' | ProductCategory | 'available'
  onChange: (filter: 'all' | ProductCategory | 'available') => void
}

const filters: Array<{
  label: string
  value: 'all' | ProductCategory | 'available'
}> = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Có sẵn', value: 'available' },
  { label: 'Giỏ quà', value: 'basket' },
  { label: 'Mèo thần tài', value: 'cat' },
  { label: 'Quà doanh nghiệp', value: 'corporate' },
  { label: 'Quà tặng', value: 'gift' },
]

export function FilterBar({ activeFilter, onChange }: FilterBarProps) {
  return (
    <nav aria-label="Lọc sản phẩm" className="mt-5 pt-1 flex gap-2 overflow-x-auto px-4 sm:px-2 pb-2 ">
      {filters.map((filter) => {
        const active = activeFilter === filter.value

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={[
              'min-h-10 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition',
              'focus:outline-none focus:ring-2 focus:ring-rose-deep',
              active
                ? 'border-[#f0b7c2] bg-[#f5cbd2] text-[#62464e]'
                : 'border-[#ebddd6] bg-white text-[#826f75] hover:bg-[#f8edef]',
            ].join(' ')}
          >
            {filter.label}
          </button>
        )
      })}
    </nav>
  )
}
