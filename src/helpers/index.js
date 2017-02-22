import numeral from 'numeral'

export function usd(number) {
  return numeral(number).format('$0,0.00');
}
