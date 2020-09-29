import { Request, Response } from 'express'
import { ValidationHelper } from '../helpers'

import { UserEntity } from '../entities'
import { getRepository } from 'typeorm'
export default class SignUpController {
  static async store(request: Request, response: Response) {
    try {
      await ValidationHelper.hasErrors(request)

      const { email } = request.body

      const checkUserAlreadyExists = await getRepository(UserEntity).findOne({
        where: { email }
      })
      if (checkUserAlreadyExists)
        return response
          .status(422)
          .json({ message: 'Já existe um usuário com esse email' })

      const user = getRepository(UserEntity).create(request.body)
      const results = await getRepository(UserEntity).save(user)

      return response.status(201).json(results)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}
