import Decimal from 'decimal.js';

/**
 * 格式化精度并去除末尾多余的零
 * @param value Decimal 实例
 * @param decimalPlaces 保留小数位数
 */
function formatPrecision(value: Decimal, decimalPlaces: number): string {
  // 先用 toFixed 保留指定位数
  let formatted = value.toFixed(decimalPlaces);

  // 去除末尾多余的零
  formatted = formatted.replace(/(\.\d*?[1-9])0+$/, '$1');

  // 如果小数点后全是零，则去除小数点及后面的零
  formatted = formatted.replace(/\.0+$/, '');

  return formatted;
}

/**
 * 精确加法
 * @param numbers 要相加的数字数组
 * @param precision 计算精度（小数位数，默认20位）
 */
export function add(numbers: (number | string)[], precision = 20): string {
  const v = numbers.reduce(
    (sum, num) => sum.plus(new Decimal(num || 0)),
    new Decimal(0)
  );
  return formatPrecision(v, precision);
}

/**
 * 精确乘法
 * @param numbers 要相乘的数字数组
 * @param precision 计算精度（小数位数，默认20位）
 */
export function multiply(numbers: (number | string)[], precision = 20): string {
  const v = numbers.reduce(
    (product, num) => product.times(new Decimal(num || 1)),
    new Decimal(1)
  );
  return formatPrecision(v, precision);
}

/**
 * 使用Intl API进行千分位格式化
 * @param num 要格式化的数字
 * @param maximumFractionDigits 最大小数位数（默认20）
 */
export function formatThousandsIntl(
  num: number | string,
  maximumFractionDigits = 20
): string {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits,
  }).format(number);
}
