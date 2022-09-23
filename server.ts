import * as express from 'express'

const app = express();


app.use(express.static('dist'));
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


