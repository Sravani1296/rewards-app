
const express = require('express');
const data = require('./data')
const app = express();


app.get('/api/customers', (req,res) => {
    let keys = Object.keys(data);
    let customers = keys.map((cust,index) => {return { id: index, customer: cust }})
    res.json(customers);
})
app.get('/api/customers/transactions', function(req, res) {
    const customer_name = req.query.customer;
    const customerTransactions = data[customer_name]
  
    res.send(customerTransactions);
  });
app.get('/api/customers/transactions', (req,res) => {
    res.json(data);
})
const port = 8080;
app.listen(port, () => console.log(`Server started on ${port}`));

