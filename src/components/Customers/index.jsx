import React from 'react';
import { faker } from '@faker-js/faker';
import Customer from 'components/Customer';

const Customers = () => {
  const customersList = Array.from({ length: 20 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    job: faker.name.jobTitle(),
    phoneNumber: faker.phone.imei(),
  }));

  return (
    <ul class='d-flex flex-wrap justify-content-center'>
      {customersList.map((customerData) => (
        <Customer data={customerData} key={customerData.id} />
      ))}
    </ul>
  );
};

export default Customers;