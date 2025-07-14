import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('convierte centavos a dolares');

if (formatCurrency(2080) === '20.80') {
  console.log('test passed');
}else {
  console.log('test failed');
}

console.log('Funciona con cero');

if (formatCurrency(0) === '0.00') {
  console.log('test passed');
}else {
  console.log('test failed');
}

console.log('redondea al centavo más cercano');

if (formatCurrency(2000.5) === '20.01') { 
  console.log('test passed');   
}else {
  console.log('test failed');
}