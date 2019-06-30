export default class Customer {
  constructor(
    firstName,
    lastName,
    username,
    password,
    email,
    phone,
    address,
    apartment,
    country,
    city,
    zip = 0,
    companyName,
    jwt,
    id
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.apartment = apartment;
    this.country = country;
    this.city = city;
    this.zip = zip;
    this.companyName = companyName;
    this.jwt = jwt;
  }
  static build(data) {
    if (!data) {
      throw new Error('Invalid data for customer object');
    }
    return new Customer(
      data.firstName,
      data.lastName,
      data.username,
      data.password,
      data.email,
      data.phone,
      data.address,
      data.apartment, 
      data.country,
      data.city,
      data.zip,
      data.companyName,
      data.jwt,
      data.id
    );
  }
  isLoggedIn() {
    return this.jwt;
  }
  logout() {
    delete this.id;
    delete this.firstName;
    delete this.lastName;
    delete this.username;
    delete this.password;
    delete this.email;
    delete this.phone;
    delete this.address;
    delete this.apartment;
    delete this.country;
    delete this.city;
    delete this.zip;
    delete this.companyName;
    delete this.jwt;
  }
}
