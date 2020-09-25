import { Request, Response } from 'express'
import { ValidationHelper } from '../helpers'

import { UserEntity, MusicEntity } from '../entities'
import { getRepository } from 'typeorm'

export default class MusicController {
  static async store(request: Request, response: Response) {
    try {
      await ValidationHelper.hasErrors(request)
      const userId = request.headers['user-id']

      const user = await getRepository(UserEntity).findOne({
        where: { id: userId }
      })

      const music = getRepository(MusicEntity).create({
        ...request.body,
        user
      })
      const results = await getRepository(MusicEntity).save(music)

      return response.status(201).json(results)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}
