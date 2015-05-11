'use strict';

var bodyparser = require('body-parser');
var fs = require ('fs');

module.exports = function(router){
	router.use(bodyparser.json());

	router.get('/data', function(req, res){
		fs.readFile('./data/file.json', function(err, data){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'internal server error'});
			}
			data = JSON.parse(data);
			console.log(data);
	        res.json(data);
		});
	});

	router.post('/data', function(req, res){
		fs.writeFile('./data/file.json', JSON.stringify(req.body, null, 2), function(err){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'internal server error'});
			}
			else
				res.json({msg: 'success'});
		});
	});

	router.put('/data',function(req, res){
		fs.writeFile('./data/file.json', JSON.stringify(req.body, null, 2), function(err){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'internal server error'});
			}
			else
				res.json({msg: 'success'});
		});
	});

	router.patch('/data', function(req, res){
		var infoRequest = JSON.stringify(req.body, null, 2);
		var requestID = req.params.id;

		fs.readFile('./data/file.json', function(err, data){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'internal server error'});
			}

			data = JSON.parse(data);
			for(var key in data){
				if(key === requestID){
					console.log("inside equal")
					data[key] = infoRequest;
				}	
			}

			fs.writeFile('./data/file.json', JSON.stringify(data, null, 2), function(err){
				if(err){
					console.log(err);
					return res.status(500).json({msg: 'internal server error'});
				}
				else
					res.json({msg: 'success'});
			});
		});
	});

	router.delete('/data', function(req, res){
		fs.unlink('./data/file.json', function(err){
			if(err){
				console.log(err);
				return res.status(500).json({msg: 'internal server error'});
			}
			res.json({msg: 'success'});
		});
	});
}