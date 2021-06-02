"use strict";
const router = require('express').Router();
router.get('/newPost', async (req, res) => {
    res.render('newPost');
});
module.exports = router;
