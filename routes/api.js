const express = require('express')
const router = express.Router()

router.get('/accu', (req, res) => {
    console.log("accu router works")
    res.end()
})

router.get('/apixu', (req, res) => {
    console.log("apixu router works")
    res.end()
})

router.get('/darksky', (req, res) => {
    console.log("darksky router works")
    res.end()
})

router.get('/open', (req, res) => {
    console.log("open router works")
    res.end()
})

module.exports = router;