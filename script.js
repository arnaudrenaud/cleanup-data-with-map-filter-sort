const { get } = require('lodash');
const restaurants = require('./restaurants.json');

const restaurantsCleaned = restaurants
  .map(restaurant => ({
    name: restaurant.name,
    address: restaurant.address1,
    area: get(restaurant, 'area.name'),
    city: restaurant.city,
    mainCategory: get(restaurant, 'categorisation.primary.name'),
    secondaryCategory: get(restaurant, 'categorisation.secondary.name'),
    editorial_rating: restaurant.editorial_rating,
    description: restaurant.description,
    annotation: restaurant.annotation,
    owner_annotation: restaurant.owner_annotation,
    url: restaurant.to_website,
    image_url: restaurant.image_url,
  }))
console.log(restaurantsCleaned)
