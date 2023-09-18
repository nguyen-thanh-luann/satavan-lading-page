import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { FilterByAttributeMinor } from './filterByAttributeMinor'
import { FilterByCategory } from './filterByCategory'
import { FilterByCategoryMinor } from './filterByCategoryMinor'
import { FilterByPrice } from './filterByPrice'

interface ProductFilterSidebarProps {
  className?: string
  price_max?: number
  price_min?: number
}

export const ProductFilterSidebar = ({
  className,
  price_max = 100000,
  price_min = 0,
}: ProductFilterSidebarProps) => {

  return (
    <div className={twMerge(classNames(``, className))}>
      {/* filter by category */}
      <div className="bg-white rounded-lg box-shadow-xs border border-gray-200 mb-16">
        <div className="p-8">
          <FilterByCategory />

          <FilterByCategoryMinor />
        </div>
      </div>

      {/* filter by attribute */}
      <div>
        <FilterByAttributeMinor />
      </div>

      <div className="mb-16">
        <FilterByPrice price_max={price_max} price_min={price_min} />
      </div>
    </div>
  )
}
