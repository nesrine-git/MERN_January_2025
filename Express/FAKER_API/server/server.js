import express from 'express'
import { faker } from '@faker-js/faker';

// Create an instance of Express
const app = express();
const PORT = 8000;

// Function to create a random user
const createUser = () => {
    const newUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number('+1-###-###-####'),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newUser
}

// Function to create a random company
const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    }
    return newCompany
}

//* Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json( createUser());
});

//* Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
    res.json( createCompany());
});

//* Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});



app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);