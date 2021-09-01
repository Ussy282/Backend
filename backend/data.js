import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name: "Qasim",
            email: "qasim@gmail.com",
            isAdmin: true,
            passsword: bcrypt.hashSync("4199",8)
        },
        {
            name: "Ussy",
            email: "Ussy@gmail.com",
            isAdmin: false,
            passsword: bcrypt.hashSync("1234",8)
        },
    ],
    products : [{
        name: 'Nike',
        category: 'shirts',
        image: './productImages/p1.jpg',
        price: 4000,
        countInStock: 0,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Tracksuit',
        category: 'shirts',
        image: './productImages/p2.jpg',
        price: 15000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'HighTops',
        category: 'shirts',
        image: './productImages/p3.jpg',
        price: 10000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Versace Hoodie',
        category: 'shirts',
        image: './productImages/p4.jpg',
        price: 20000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Long Sleeve',
        category: 'shirts',
        image: './productImages/p5.jpg',
        price: 4400,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Sweat Pants',
        category: 'shirts',
        image: './productImages/p6.jpg',
        price: 3000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Versace Shirt',
        category: 'shirts',
        image: './productImages/p7.jpg',
        price: 50000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Zara Top',
        category: 'shirts',
        image: './productImages/p8.jpg',
        price: 20000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
    
        name: 'Jump suit',
        category: 'women',
        image: './productImages/p9.jpg',
        price: 25000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Women Jacket',
        category: 'shirts',
        image: './productImages/p10.jpg',
        price: 4000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Gucci Outfit',
        category: 'shirts',
        image: './productImages/11a.png',
        price: 100000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    {
        name: 'Men shirt',
        category: 'shirts',
        image: './productImages/p12.jpg',
        price: 5000,
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: 11,
        description: 'High Quality Slim Shirts'
    },
    ]
}

export default data;