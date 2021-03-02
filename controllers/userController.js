const User = require('../models/User')
const signupValidator = require('../validators/signUp')
const bcrypt = require('bcrypt')

module.exports = {

    signUp: (req, res) => {

        let {name, email, password, conformPassword} = req.body
        let validate = signupValidator({name, email, password, conformPassword})

        if (!validate.isValid) {
            res.status(400).json(validate.error)
        } else {

            User.findOne({email})
                .then(user => {

                    if (user) {
                        return res.status(400).json({
                            message: 'Email already exits'
                        })
                    }

                    bcrypt.hash(password, 11, (err, hash) => {

                        if (err) {
                            return res.status(500).json({
                                message: 'Server error occurred'
                            })
                        }

                        let user = new User({
                            name,
                            email,
                            password: hash
                        })

                        user.save()
                            .then(user => {
                                res.status(201).json({
                                    message: 'User Created Successfully',
                                    user
                                })
                            })

                    })

                }).catch(error => {
                res.status(500).json({
                    message: 'Server error occurred' || error.message
                })
            })
        }
    }

}
