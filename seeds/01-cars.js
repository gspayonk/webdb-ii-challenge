
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '234329742', make: 'Tesla', model: 'model three', mileage: 100, titleStatus: 'good standing', transmissionType:'manual'},
        {VIN: '454644456', make: 'Jeep', model: 'Wrangler', mileage: 123434, titleStatus: 'good standing', transmissionType:'automatic'}
      ]);
    });
};
