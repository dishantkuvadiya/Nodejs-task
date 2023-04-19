const express = require('express');
const app = express();
const cors = require('cors');

const adminRoutes = require("./routes/adminRout");
const bookRoutes = require("./routes/bookRout");
const userRoutes = require("./routes/userrout");

const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use('/api', adminRoutes);
app.use('/api', bookRoutes);
app.use('/api', userRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server Started At PORT : ${PORT}`);
});