import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('convierte centavos a dolares', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });


it('funciona con 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
    });

    it('redondea al centavo más cercano', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});