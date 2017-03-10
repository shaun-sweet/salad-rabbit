import numeral from 'numeral'

export function usd(num) {
  return numeral(num).format('$0,0.00');
}

export function sumArray(array, callback){
	return array.reduce((accumulator, element)=> accumulator + parseFloat(callback(element), 10), 0)
}

export function normalizeCurrency(num) {
  return numeral(num).format('0.00')
}
