import Customer from './Customer';

describe('Calsses', () => {
  describe('Customer', () => {
    const customer = {
      firstName: 'moslem',
      lastName: 'ezati',
      username: 'moslem',
      email: 'moslem.ezati@gmail.com',
      password: '1',
      address: 'no, street, square, town',
      apartment: 'Simon',
      zip: 11111,
      country: 'Netherlands',
      city: 'somewhere',
      phone: '31245 2894 423',
      companyName: 'ziro'
    };
    it('should init a customer object', () => {
      expect.assertions(2);
      const _customer = Customer.build(customer);
      expect(_customer).toEqual(customer);
      expect(_customer.username).toBe('moslem');
    });

    it('should throw an error for invalid data', () => {
      expect(() => {
        Customer.build();
      }).toThrow('Invalid data for customer object');
    })
  });
});
