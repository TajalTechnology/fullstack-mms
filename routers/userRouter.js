const router = require('express').Router()
const {signUp} = require('../controllers/userController')

router.post('/sign-up', signUp)

module.exports = router