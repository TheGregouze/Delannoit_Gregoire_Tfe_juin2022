const express = require('express');
const app = express();



app.set('port', (process.env.port || 3000));
app.listen(app.get('port'), () => {
    console.log(`express server listening on port ${app.get('port')}`);
});
module.exports = app;