const { get } = require('lodash');
const { writeFile } = require('fs-promise')
const restaurants = require('./restaurants.json');

const restaurantsCleaned = restaurants
  .map(restaurant => ({
    id: restaurant.id,
    name: restaurant.name,
    address: restaurant.address1,
    area: get(restaurant, 'area.name'),
    city: restaurant.city,
    mainCategory: get(restaurant, 'categorisation.primary.name'),
    secondaryCategory: get(restaurant, 'categorisation.secondary.name', ''),
    editorial_rating: restaurant.editorial_rating,
    description: get(restaurant, 'description', ''),
    annotation: get(restaurant, 'annotation', ''),
    owner_annotation: get(restaurant, 'owner_annotation', ''),
    to_website: get(restaurant, 'to_website', ''),
    image_url: restaurant.image_url,
    latitude: restaurant.latitude,
    longitude: restaurant.longitude,
  }))
  .filter(restaurant => (
    restaurant.id &&
    restaurant.name &&
    restaurant.address &&
    restaurant.area &&
    restaurant.city &&
    restaurant.mainCategory &&
    restaurant.editorial_rating &&
    (restaurant.description || restaurant.annotation) &&
    restaurant.image_url
  ))
  .sort((a, b) => b.editorial_rating - a.editorial_rating)
console.log(restaurantsCleaned)

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}
console.log('Number of restaurants', restaurantsCleaned.length)
console.log('Number of unique IDs', restaurantsCleaned.map(restaurant => restaurant.id).unique().length)

writeFile('restaurants-cleaned.json', JSON.stringify(restaurantsCleaned, null, '\t'))
  .then(() => console.log('Wrote to file successfully'))
