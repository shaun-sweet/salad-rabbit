import numeral from 'numeral'

export function usd(number) {
  return numeral(number).format('$0,0.00');
}

export function sumArray(array, callback){
	return array.reduce((accumulator, element)=> accumulator + parseFloat(callback(element), 10), 0)
}
