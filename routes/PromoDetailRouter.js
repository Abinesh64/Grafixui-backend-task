const express = require('express')
const{getPromodetail, getPromodetails, createPromodetails, deletePromodetail, updatePromodetail} = require('../controllers/PromodetailControllers')

const router = express.Router()


router.get('/',getPromodetails)

router.get('/:id',getPromodetail)


router.post('/',(req,res)=>{
  res.json({msg:"To add"})
})

router.delete('/',(req,res)=>{
  res.json({msg:"To add"})
})


router.patch('/',(req,res)=>{
  res.json({msg:"To add"})
})

module.exports = router