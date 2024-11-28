const express = require('express')
const router = express.Router()

const {
    lookupDomain,
} = require('../controllers/domain.controller')

router.get('/lookup', lookupDomain)
module.exports = router;