import { ProductDescription, ProductUom, ReactSelectType } from '@/types'
import _ from 'lodash'

export const correctEmail = (value: string) => {
  ;/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
}

export const correctPassword = (value: string) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(value)
}

export const isVietnamesePhoneNumberValid = (num: string) => {
  return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(num)
}

export const checkNumberPhone = (number: string) => {
  ;/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)
}

export const onScrollBottom = (callBack: Function) => {
  window.onscroll = function (event) {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      callBack(event)
    }
  }
}

export const getHoursName = (hours: number): string => {
  const hoursVal = ((hours % 1) * 10 * 6).toFixed(0)
  if (hours < 1) return `${hoursVal} Phút`
  return `${hours | 0} Giờ ${hoursVal} Phút`
}

export function isValidHttpUrl(string: string): boolean {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}

export const spliceArray = (arr: Array<any>, start: number, end: number) => {
  return [...arr].splice(start, end)
}

export const FormatNumber = (money: number, separator = ',') => {
  if (!money) return '0'
  return (money + '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + separator)
}

export function formatMoneyVND(num: number | string, format = 'đ'): string {
  if (typeof num == 'number') {
    num = Math.floor(num)
    return `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ${format}`
  } else if (typeof num == 'string') {
    return `${num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ${format}`
  }
  return ''
}

export const toFirstUpperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const toFirstLowerCase = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const getFromLocalStorage: any = (key: string) => {
  let value
  try {
    if (typeof window === undefined) return
    value = JSON.parse(window.localStorage.getItem(key) as any)
  } catch (error) {}
  return value
}

export const setToLocalStorage: any = (key: string, value: any) => {
  if (typeof window === undefined) return
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getFromSessionStorage: any = (key: string) => {
  let value
  try {
    if (typeof window === undefined) return
    value = JSON.parse(window.sessionStorage.getItem(key) as any)
  } catch (error) {}
  return value
}

export const setToSessionStorage = (key: string, value: any) => {
  if (typeof window === undefined) return
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function convertBase64(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => resolve(fileReader.result)
    fileReader.onerror = (error) => reject(error)
  })
}

export function convertViToEn(str: string, toUpperCase = false) {
  if (!str) return ''
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // Â, Ê, Ă, Ơ, Ư

  return toUpperCase ? str.toUpperCase() : str
}

export const calculateElapsedTime = (timeCreated: string) => {
  const created = new Date(timeCreated).getTime()
  let periods: any = {
    year: 365 * 30 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  }
  let diff = Date.now() - created

  for (const key in periods) {
    if (diff >= periods[key]) {
      let result = Math.floor(diff / periods[key])
      return `${result} ${result === 1 ? key : key + 's'} ago`
    }
  }

  return 'Just now'
}

export const toggleBodyOverflow = (status: 'hidden' | 'unset') => {
  const body = document.body
  if (body) {
    if (status === 'hidden') {
      body.classList.add('body-hidden')
    } else {
      body.classList.remove('body-hidden')
    }
  }
}

export const convertToEnNoSpaceAndSpecialCharacter = (address: string) => {
  return address.replace(/\W/g, '')
}

export const formatMoneyVndString = (number: number): string => {
  if (number < 1000000) return formatMoneyVND(number)

  if (number < 1000000000) return (number / 1000000).toFixed(0) + ' triệu'

  return (number / 1000000000).toFixed(0) + ' tỷ'
}

export const toImageUrl = (url: string) => `${process.env.NEXT_PUBLIC_API_URL}${url}`

export const getActiveStringOrListString = (
  a: string[] | string,
  b: string[] | string
): boolean => {
  if (typeof a !== typeof b) return false
  if (typeof a === 'string') {
    return a === b
  }
  if (typeof a === 'object') {
    return a.length === b.length && a.every((item, index) => item === b[index])
  }

  return false
}


export function isArrayHasValue(array: any): boolean {
  return array && _.isArray(array) && array.length > 0
}

export function isObjectHasValue(obj: any): boolean {
  return obj && _.isObject(obj) && Object.keys(obj).length > 0
}


export const generateProductSlug = (name: string, id: number | string): string => {
  return `${convertViToEn(name).replaceAll(/[\/%$? ]/g, '-')}-${id}`
}

export const fromProductSlugToProductId = (slug: string): string => {
  const productIdArr = slug?.split('-')

  return productIdArr?.[productIdArr.length - 1]?.toString() || ''
}


export const scrollIntoElementById = (id: string, fromTop: number) => {
  const elementPosition = document.getElementById(id)?.getBoundingClientRect().top || 0
  const offsetPosition = elementPosition + window.pageYOffset - (fromTop || 0)
  return window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}


export function removeEmptyValueFromObject<T>(obj: T extends object ? object : any): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined && v !== '')
  ) as T
}

export function isRemoteImageUrl(url: string) {
  if (!url || url.trim() === '') return false

  return url.startsWith('http')
}

export function checkAnyKeyInObjectHasValue(object: Object) {
  return Object.values(object).some(
    (value) => value !== '' && value !== null && value !== undefined
  )
}

export function isInvalidDate(data: string) {
  return isNaN(Date.parse(data))
}

export function getRatingContent(content: string): string {
  if (!content) return ''
  return content.includes('<p>') ? content.slice(3, content.length - 4) : content
}

export function roundingNumber(value: number, type: 'upper' | 'lower', base_unit: number): number {
  if (type === 'upper') {
    return Math.ceil(value / base_unit) * base_unit
  } else {
    return Math.floor(value / base_unit) * base_unit
  }
}

export function isAddressNameValid(province: string, district: string, ward: string): boolean {
  return !!province && !!district && !!ward
}



export const durationToName = (value: 'months' | 'days' | 'weeks' | 'years') => {
  if (value === 'months') return 'tháng'
  if (value === 'days') return 'ngày'
  if (value === 'weeks') return 'tuần'
  return 'năm'
}

export const changewarrantyDateToInputDatetype = (date: string) => {
  if (!date) return
  const draft = date.split('/')
  return `${draft?.[2]}-${draft?.[1]}-${draft?.[0]}`
}

export const isPositiveNumber = (props: number): boolean => {
  return Number(props) > 0
}

export const changeProductUomTypeToReactSelectType = (
  uom: ProductUom | undefined,
  showUnitLabel: boolean
): ReactSelectType => {
  return {
    value: uom?.uom_id || 0,
    label: showUnitLabel ? `Đơn vị: ${uom?.uom_name}` : `${uom?.uom_name}`,
  }
}

export const mergeProductDescriptionContent = (productDescriptions: ProductDescription[]) => {
  let descContent = ''

  productDescriptions.forEach((description) => {
    if (!isArrayHasValue(description.tab)) {
      descContent += `<h1 class='desc_title' id='desc_category_${description.category_id}'>${
        description?.category_name || ''
      }</h1> 
      ${description?.content || ''} 
      ${description?.extra_content || ''}
      <br/>
      `

      if (isArrayHasValue(description.child)) {
        description.child.forEach((child) => {
          descContent += `<h2 class='desc_title' id='desc_category_${child.category_id}'>${
            child.category_name
          }</h2> 
          ${child?.content || ''}
           <br/>
          ${child?.extra_content || ''}
           <br/>
          `
        })
      }
    }
  })

  return descContent
}