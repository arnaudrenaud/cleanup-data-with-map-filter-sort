const restaurants = require('./restaurants.json');

const restaurantsCleaned = restaurants
  .map(restaurant => ({
    name: restaurant.name,
    address: restaurant.address1,
    area: restaurant.area && restaurant.area.name,
    city: restaurant.city,
    editorial_rating: restaurant.editorial_rating,
    description: restaurant.description,
    annotation: restaurant.annotation,
    owner_annotation: restaurant.owner_annotation,
    url: restaurant.to_website,
    image_url: restaurant.image_url,
  }))
console.log(restaurantsCleaned)
