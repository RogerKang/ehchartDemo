
var express = require('express');
var urllib = require('urllib');

var app = express();

app.set('views', './views');
app.set('view engine', 'ejs')
app.use('/static', express.static('static'));

app.get('/linesBus', function (req, res, next) {
    urllib.request('http://echarts.baidu.com/gallery/data/asset/data/lines-bus.json', function(err, data, response){

        if(err)
            res.json([]);
        else
            res.json(JSON.parse(data.toString()));
    });
});

app.get('/pollution', function (req, res, next){

    var data = require('./data');
    res.json(data);

});

app.use('/', function(req,res,next){

    res.render('index2');
});


app.listen(3000, function(){

    console.log('Listen to 3000.');
});