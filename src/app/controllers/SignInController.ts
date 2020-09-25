import { Request, Response } from 'express'
import { ValidationHelper } from '../helpers'

import { UserEntity } from '../entities'
import { getRepository } from 'typeorm'

import bcrypt from 'bcryptjs'

import jwt from 'jsonwebtoken'

export default class SignInController {
  static async store(request: Request, response: Response) {
    try {
      await ValidationHelper.hasErrors(request)

      const { email, password } = request.body

      const user = await getRepository(UserEntity).findOne({ where: { email } })
      if (!user)
        return response.status(400).json({
          message: 'Email ou senha incorretoss'
        })

      const compareHash = await bcrypt.compare(password, user.password)

      if (compareHash) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: parseInt(process.env.JWT_EXPIRES)
        })

        return response.status(200).json({
          token,
          expiresIn: process.env.JWT_EXPIRES
        })
      }

      return response.status(400).json({
        message: 'Email ou senha incorretos'
      })
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}
