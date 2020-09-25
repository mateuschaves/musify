import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

class Token {
  verifyToken(request: Request, response: Response, next) {
    const token: any = request.headers['token']
    if (!token)
      return response.status(400).json({
        message: 'Token não informado'
      })

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return response.status(400).send({
          message: 'Faça login para continuar.'
        })
      }
      request.headers['user-id'] = decoded.id
      next()
    })
  }
}

export default new Token()
