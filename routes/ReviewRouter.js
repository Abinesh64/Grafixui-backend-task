const express = require('express')
const {getReviews, getReview, createReview, updateReview, deleteReview} = require('../controllers/ReviewController')

const router = express.Router()


router.get('/',getReviews)

router.get('/:id', getReview)


router.post('/', createReview)

router.delete('/', deleteReview)


router.patch('/', updateReview)

module.exports = router