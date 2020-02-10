const express = require('express')
const {controler} = require('../controlers')

const router = express.Router()

// router.get('/datausers',controler.datausers)
// router.put('/edit',controler.varif)

router.get('/getmovies',controler.getmovies)
router.put('/editmovie',controler.editmovie)
router.put('/delmovie/:id',controler.delmovie)
router.post('/addmovie',controler.addmovie)

router.get('/getcategories',controler.getcategories)
router.put('/editcategories',controler.editcategories)
router.put('/delcategories/:id',controler.delcategories)
router.post('/addcategories',controler.addcategories)

router.get('/getmovcat',controler.getmovcat)
router.get('/getmovid',controler.getmovid)
router.get('/getcatid',controler.getcatid)
router.put('/delmovcat',controler.delmovcat)
router.get('/getmovlist',controler.getmovlist)
router.get('/getcatlist',controler.getcatlist)
router.post('/addmovcat',controler.addmovcat)

module.exports = router