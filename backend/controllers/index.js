const express = require('express');

const router = express.Router();

const test = require('./test');
// const login = require('./login.js');
// const GSG_Library = require('./GSG_Library');
// const deletee = require('./deletee');
// const home = require('./home');
// const addnewbook = require('./addnewbook');
// const waitinglist = require('./waitinglist');
//
router.get('/test', test.get);
// router.post('/addToWaitingList', home.post);
// router.get('/waitinglist',waitinglist.get);
// router.get('/admin', login.get);
// router.get('/dashboard', dashboard.get);
// router.get('/GSG_Library', GSG_Library.get);
// router.post('/search', GSG_Library.post);
// router.get('/delete/:id', deletee.delete1);
// router.post('/deletebookfromsearch',deletee.delete2);
// router.get('/addnewbook', addnewbook.get);
// router.post('/addnewbook', addnewbook.post);
module.exports = router;