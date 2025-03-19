const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./db');
const Stripe = require('stripe')
const stripe = Stripe("sk_test_51Q9z95L1tdQPEzpyqIqiYDKimP1cFUBT3FnhirHB6RAHMYRkRKkHiQt7WXcfwgVzSFNb4cPfIbppbfvDwHmbJZ4R00fw7i3HrJ")


app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());

app.use('/api',require('./routes/signup'));
app.use('/api',require('./routes/login'));

app.use('/api',require('./routes/getAllProds'));
app.use('/api',require("./routes/searchProds"));



app.post("/create-checkout-session", async (req, res) => {
    const products = req.body.products; 
    const lineItems = products.map((product) => {
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                    name: product.name,
                    images: [product.image],
                },
                unit_amount: Math.round(product.price * 100),
            },
            quantity: 1,
        };
    });

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const port = 5000;
const server = app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})