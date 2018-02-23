const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My Family',
    message: 'COMP-2106 in class node application'
  });
});
router.get('/Shiv', function(req, res, next) {
    res.render('Shiv', {
        title: 'My Dad',
        message: 'COMP-2106 in class node application'
    });
});
router.get('/rama', function(req, res, next) {
    res.render('rama', {
        title: 'My Mom',
        message: 'COMP-2106 in class node application'
    });
});
router.get('/hemant', function(req, res, next) {
    res.render('hemant', {
        title: 'Myself',
        message: 'COMP-2106 in class node application'
    });
});
router.get('/neha', function(req, res, next) {
    res.render('neha', {
        title: 'My Sister',
        message: 'COMP-2106 in class node application'
    });
});
router.get('/shivangi', function(req, res, next) {
    res.render('shivangi', {
        title: 'My Sister',
        message: 'COMP-2106 in class node application'
    });
});

// // GET: /about
// router.get('/about', function(req, res, next) {
//     // load the about view
//     res.render('about', {
//       title: 'About car tracker',
//       message: 'this app is built with the mean stack.'
//     });
// });
module.exports = router;






















