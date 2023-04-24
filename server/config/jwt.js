// const jwt = require('jsonwebtoken')

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]

//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.TOKEN_SECRET, (err, owners) => {
//         console.log(error)

//         if (err) return res.sendStatus(403)

//         req.owners = owners

//         next()
//     })
// }
// function generateAccessToken(email) {
//     console.log('ERROR', process.env.TOKEN_SECRET)
//     return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1H' })
// }

// module.exports = { authenticateToken, generateAccessToken }
