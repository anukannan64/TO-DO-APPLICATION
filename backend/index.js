const express = require('express');
const app = express()
app.listen(3000, () => console.log('Server ready'))
app.use(express.json());
app.get('/', (req, res) => {})
app.put('/',(req, res) => {})
app.post('/',(req, res) => {})
app.delete('/',(req, res) => {})