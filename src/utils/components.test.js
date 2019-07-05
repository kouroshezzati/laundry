import { calc, ADD, SUB, multipleCurrency } from './components';

describe('Utils', () => {
  it('it should add with two digits precise', () => {
    expect.assertions(6);
    expect(calc(ADD, '1.20', '1.40')).toBe('2.60');
    expect(calc(ADD, '1.60', '1.60')).toBe('3.20');
    expect(calc(ADD, '1.6', '1.90')).toBe('2.96');
    expect(calc(ADD, '1.1', '1.2')).toBe('2.3');
    expect(calc(ADD, '1.0', '1.0')).toBe('2.00');
    expect(calc(ADD, '1.00', '1.00')).toBe('2.00');
  });
  it('it should sub with two digits precise', () => {
    expect.assertions(6);
    expect(calc(SUB, '1.20', '1.40')).toBe('-0.20');
    expect(calc(SUB, '1.60', '1.60')).toBe('0.00');
    expect(calc(SUB, '1.90', '1.6')).toBe('0.84');
    expect(calc(SUB, '1.2', '1.1')).toBe('0.1');
    expect(calc(SUB, '1.0', '1.0')).toBe('0.00');
    expect(calc(SUB, '3.00', '1.00')).toBe('2.00');
  });

  it('should multiple price', () => {
    expect.assertions(3);
    expect(multipleCurrency('1.20', 2)).toBe('2.40');
    expect(multipleCurrency('1.2', 2)).toBe('2.4');
    expect(multipleCurrency('1', 2)).toBe('2.00');
  })
});
