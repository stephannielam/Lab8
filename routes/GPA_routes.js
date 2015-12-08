var express = require('express');
var router = express.Router();
var GPADal = require('../dal/GPA');

router.get('/all', function(req, res) {
    GPADal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayGPA.ejs', {rs: result});
        }
    );
});

module.exports = router;