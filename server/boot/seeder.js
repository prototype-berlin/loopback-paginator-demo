'use strict';

const faker = require('faker');

module.exports = function (app) {

  var ds = app.dataSources.db;

  ds.isActual('Client', function (err, isActual) {
    if(err) { return console.error('seed#isActual Admin', err); }

    if(isActual) {
      seedClients();
    }
  });

  async function seedClients() {
    const Client = app.models.Client;

    let i = 0;

    do {
      await Client.create({
        name: faker.name.findName(),
        address: faker.address.streetAddress(true),
      });

      i++;
    } while (i < 300);
  }
};