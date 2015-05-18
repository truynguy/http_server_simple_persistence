'use strict';

var express = require('express');
var app = express();

var notesRoutes = express.Router();

require('./routes/notes_routes')(notesRoutes);

app.use('/api', notesRoutes);

app.listen(process.env.PORT || 3000, function(){
	console.log('server running on port' + (process.env.PORT || 3000));
});