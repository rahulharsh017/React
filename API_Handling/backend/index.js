import express from "express";

const app = express();

app.get('/api/products',(req,res) => {
    const products = [
        {
            id:1,
            name:'laptop',
            price:10000,
            image:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:2,
            name:'sofa',
            price:20000,
            image:'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            name:'bike',
            price:200000,
            image:'https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:4,
            name:'bike',
            price:200000,
            image:'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]


    if(req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }
    
    
    setTimeout(() => {
        res.send(products);
    },3000)
})

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
});