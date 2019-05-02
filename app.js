var express = require('express');
var axios = require('axios');
var app = express();

const mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "sam",
  password: "123Sam456",
  database: "sam"
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
axios('http://cedula.buholegal.com/00001234/').then((res)=>{
    console.log(res);
});

//const { sqlConstants} = require('.././../util/sqlConstants')
/*
let query2 = 'SELECT * FROM concentracion WHERE nombre like "%y%"';
let query3 = 'INSERT INTO concentracion(nombre,medicina_id) VALUES ';

con.query(query2, function (err, result) {
    console.log('len:',result.length)
    if (err) throw err;
    let arr = ''
    let j=0
    result.forEach( (elem) => {
        //console.log(/^([0-9a-zA-Z\s\.]{2,128}y{1})([^y][0-9a-zA-Z\.\s]{2,128})$/.exec(elem.nombre))
        
       const aux = /^([0-9a-zA-Z\s\.]{2,128}y{1})([^y][^\s]{1}[0-9a-zA-Z\.\s]{2,128})$/g.exec(elem.nombre)
        const auxID = elem.medicina_id
        let i=0
        aux.forEach( (e) => {
            let aux2=e
            const len = e.length
            if( /(y{1})$/.test(e)){
                aux2=e.slice(0, len-1) + e.slice(len, len)
                if( /(\s{1})$/.test(aux2)){
                    aux2=e.slice(0, len-2) + e.slice(len-1, len-1)
                }
            }
            if(/^(\s{1})/.test(e))
                aux2=e.slice(0, 0) + e.slice(1, len)
            if(j==0 && i==1){
                arr += '("'+aux2+'",'+auxID+')'
            }  
            else if(i==1 || i==2){
                arr += ',("'+aux2+'",'+auxID+')'
            } 
            i++;

        })
        
        j++;
            //console.log('i',i)
    })
    
    console.log(arr)
    con.query(query3+arr, function (err, result2) {
        if (err) throw err;
        console.log(result2);
    })
    //console.log('j',j)
});*/


