const express = require ('express')

const app = express()

const booksRouter = require('./src/routers/booksRouter');
// const adminRouter = require('./src/routers/adminRouter');
// const authRouter = require('./src/routers/authRouter');

const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/Books', booksRouter);
// app.use('/admin', adminRouter);
// app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get("/", (request, response) => {
    // home html page
    response.render("Home", user = {
        "name": "Zahraa",
        "id": 5,
        "age":9,
        "DOB": 1996
    })
})

app.get("/:id", (request, response) => {
    var id = request.params
    response.send(id)
})



