import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Fender Bass',
      slug: 'fender-bass',
      category: 'Basses',
      image: '/images/bass1.jpg',
      price: 300,
      brand: 'Fender',
      rating: 4.5,
      numReviews: 10,
      countInStock: 4,
      description: 'A popular jazz bass',
    },
    {
      name: 'Warwick Bass',
      slug: 'warwick-bass',
      category: 'Metal Basses',
      image: '/images/bass2.jpg',
      price: 500,
      brand: 'Warwick',
      rating: 4.2,
      numReviews: 5,
      countInStock: 7,
      description: 'A popular premium rock bass',
    },
    {
      name: 'Dingwall Bass',
      slug: 'dingwall-bass',
      category: 'Metal Basses',
      image: '/images/bass3.jpg',
      price: 600,
      brand: 'Dingwall',
      rating: 4.8,
      numReviews: 8,
      countInStock: 3,
      description: 'A popular metal fanned frets bass',
    },
    {
      name: 'Harley Benton Bass',
      slug: 'harley-benton-bass',
      category: 'Basses',
      image: '/images/bass4.jpg',
      price: 100,
      brand: 'Harley Benton',
      rating: 2.9,
      numReviews: 15,
      countInStock: 12,
      description: 'A cheap and sturdy bass',
    },
    {
      name: 'Cort Bass',
      slug: 'cort-bass',
      category: 'Basses',
      image: '/images/bass5.jpg',
      price: 110,
      brand: 'Cort',
      rating: 3.8,
      numReviews: 10,
      countInStock: 4,
      description: 'My first bass ever',
    },
    {
      name: 'Squire Bass',
      slug: 'squire-bass',
      category: 'Basses',
      image: '/images/bass6.jpg',
      price: 300,
      brand: 'Squire',
      rating: 3.0,
      numReviews: 6,
      countInStock: 9,
      description: 'A simple and common bass',
    },
  ],
};

export default data;
