import { isPositiveNumber } from '@/helper'
import classNames from 'classnames'
import React from 'react'
import Countdown from 'react-countdown'

interface CountDownTimeProps {
  className?: string
  date: Date | string | number | undefined
}

export interface TimeProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const CountDownTime = ({ className, date }: CountDownTimeProps) => {
  document.getElementById('root')

  const renderer = ({ days, hours, minutes, seconds }: TimeProps) => {
    return (
      <div className="flex gap-12">
        {isPositiveNumber(days) && (
          <span className="bg-primary text-white font-bold rounded-lg p-4">
            {validateDataView(days)}
          </span>
        )}

        <span className="bg-primary text-white font-bold rounded-lg p-4">
          {validateDataView(hours)}
        </span>

        <span className="bg-primary text-white font-bold rounded-lg p-4">
          {validateDataView(minutes)}
        </span>

        <span className="bg-primary text-white font-bold rounded-lg p-4">
          {validateDataView(seconds)}
        </span>
      </div>
    )
  }

  const validateDataView = (data: number): string => {
    if (data < 10) return `0${data}`

    return `${data}`
  }

  return (
    <div className={classNames('', className)}>
      <Countdown date={date} renderer={renderer} />
    </div>
  )
}
