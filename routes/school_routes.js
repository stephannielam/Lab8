var express = require('express');
var router = express.Router();
var resumeDal   = require('../dal/resume');

router.get('/all', function(req, res) {
    resumeDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('school.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    resumeDal.GetByID(req.query.school_id, function (err, result) {
            if (err) throw err;

            res.render('displayschool.ejs', {rs: result, school_id: req.query.school_id});
        }
    );
});

module.exports = router;
