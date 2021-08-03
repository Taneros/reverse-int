module.exports = function reverse(n) {


  const arr = n.toString().split('')
  console.log('arr', arr)

  // arr.forEach((el, i) => typeof (el) === 'number' ? '' : arr.slice(i + 1));
  const arrFiltered = arr.filter(el => !isNaN(el))

  console.log('arrFiltered', arrFiltered)

  return arrFiltered.reverse().join('')


}


/**
 *
 * convert to array
 *
 * filer using isNaN("")
 *
 * convert to string and return
 *
 *
 */