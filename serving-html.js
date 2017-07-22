//initiate variables
var http = require("http");

var fs = require ("fs");

var url = require("url");

var Port = 8080;


//create server
var server = http.createServer(handleRequest);


//create handling function

function handleRequest(req,res){

	var urlParts = url.parse(req.url);

	switch(urlParts.pathname){
		case "/":
			displayHome(urlParts.pathname,req,res);
			break;
		case "/favoriteFoods":
			displayFavoriteFoods(urlParts.pathname,req,res);
			break;
		case "/favoriteMovies":
			displayFavoriteMovies(urlParts.pathname,req,res);
			break;
		case "/favoriteCssFrameworks":
			displayFavoriteCssFrameworks(urlParts.pathname,req,res);
			break
		default:
			display404(urlParts.pathname,req,res);			


	}
}

//open port
server.listen(Port, function(){

	console.log("listening on port 8080.")
});



//display functions

function displayHome(url,req,res){
	fs.readFile(__dirname + "/index.html", function(err,data){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
}


function displayFavoriteFoods(url,req,res){
	fs.readFile(__dirname + "/favoriteFoods.html", function(err,data){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
}



function displayFavoriteMovies(url,req,res){
	fs.readFile(__dirname + "/favoriteMovies.html", function(err,data){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
}


function displayFavoriteCssFrameworks(url,req,res){
	fs.readFile(__dirname + "/favoriteCssFrameworks.html", function(err,data){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
}


function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}