
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('property').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('property').insert([
        { name:'oceanside house', minimum_nights:1, room_type:'Entire home/apt', neighborhood:'Helmholtzplatz', neighborhood_group:'Pankow', user_id:1},
        { name:'lighthouse', minimum_nights:1, room_type:'Entire home/apt', neighborhood:'Helmholtzplatz', neighborhood_group:'Pankow', user_id:1},
        { name:'a tent', minimum_nights:1, room_type:'Private room', neighborhood:'Alexanderplatz', neighborhood_group:'Mitte', user_id:2},
        { name:'back of my truck', minimum_nights:1, room_type:'Private room', neighborhood:'Moabit Ost', neighborhood_group:'Neukölln', user_id:2},
        { name:'a tent', minimum_nights:1, room_type:'Private room', neighborhood:'Schöneberg-Nord', neighborhood_group:'Tempelhof - Schöneberg', user_id:3},
        { name:'downtown condo', minimum_nights:1, room_type:'Entire home/apt', neighborhood:'Prenzlauer Berg Südwest', neighborhood_group:'Pankow', user_id:2},
        { name:'5br mansion', minimum_nights:1, room_type:'Entire home/apt', neighborhood:'Frankfurter Allee Nord', neighborhood_group:'Friedrichshain-Kreuzberg', user_id:1}
      ]);
    });
};
