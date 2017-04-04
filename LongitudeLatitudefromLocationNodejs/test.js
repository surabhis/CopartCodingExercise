//creating XML2js
var xml2js=require('xml2js');
//creating parser object
var parser=xml2js.Parser();
var express=require('express');
//creating http object for performing http request to Google API
var http=require('http');
//creating mysql object for database connection
var mysql  = require('mysql');
//Creating Connection to MySQL database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'system',
  database : 'database'
});
//Connecting to database and executing query for selecting distinct locations from the table
connection.connect(function(err){
if(!err) {
    connection.query('SELECT distinct(LOCATION) from locationsdemo', function(err, rows, fields) {
connection.end();
  if (!err){
	  console.log(rows);
    for(var i=0;i<rows.length;i++){
		 for(obj in rows[i]){
			 //extracting location from response as a string and removing spaces since http request throws unescaped character error when
			 //space occurs
				var loc=rows[i].LOCATION;
var x=loc.replace(' ','');
var y=x.replace(' ','');
var z=y.replace(' ','');
			console.log(z);
			//Passing location details to Google API URL
				var url='http://maps.googleapis.com/maps/api/geocode/xml?address='+ z +'&sensor=false';
				http.get(url, function (error, res, body) {
    if (error) {
        console.log(error);
    } else {
		//trying to read http response
res.on('data', function (chunk) {
              //console.log('BODY: ' + chunk);
               str += chunk;
         });

        res.on('end', function () {
             console.log(str);
        });
    }
				})

	}}
  }
  else
    console.log('Error while performing Query.');
  });
	}else {
    console.log("Error connecting database ... nn");    
}
  });