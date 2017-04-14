
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

app.use('/', function(req,res,next){

    res.render('index');
});


app.listen(3000, function(){

    console.log('Listen to 3000.');
});