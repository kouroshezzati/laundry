import user from './UserReducer';
import { GET_CUSTOMER_SUCCESS } from './UserConstants';

describe('Reducers', () => {
  describe('User', () => {
    it('should extend user for all user fields', () => {
      expect.hasAssertions();
      expect(
        user(
          { jwt: 'jwt' },
          {
            type: GET_CUSTOMER_SUCCESS,
            response: { firstName: 'Moslem', lastName: 'Ezati' }
          }
        )
      ).toEqual({ jwt: 'jwt', firstName: 'Moslem', lastName: 'Ezati' });
    });
  });
});
