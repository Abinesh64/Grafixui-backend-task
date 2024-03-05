const express = require('express')
const router = express.Router()

const {getReviews, getReview, createReview, updateReview, deleteReview} = require('../controllers/ReviewController')

router.get('/', getReviews)

router.get('/:id', getReview)


router.post('/', createReview)

router.delete('/:id', deleteReview)

router.patch('/:id', updateReview)

module.exports = router