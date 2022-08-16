const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO)
    .then(() => console.log(`We are successfull connect to MongoDB`))
    .catch(() => console.log(`An error occured then connect to mongo`))
