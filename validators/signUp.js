const validator = require('validator')

const validate = user => {
    let error = {}

    if (!user.name) {
        error.name = 'Please provide your name'
    }

    if (!user.email) {
        error.email = 'Please provide your email '
    } else if (!validator.isEmail(user.email)) {
        error.email = 'Please provide a valid Email'
    }

    if (!user.password) {
        error.password = 'Please provide a password'
    } else if (user.password < 6) {
        error.password = 'Password must be greater then 6 character'
    }

    if (!user.conformPassword) {
        error.conformPassword = 'Please provide conform password'
    } else if (user.password !== user.conformPassword) {
        error.conformPassword = 'Password doesn\'t match'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}

module.exports = validate