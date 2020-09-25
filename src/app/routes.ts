import { Router } from 'express'

import { TokenValidator } from './middlewares/validators'

const routes: any = Router()

import {
  SignInController,
  SignUpController,
  MusicController
} from './controllers'

import {
  SignInValidator,
  SignUpValidator,
  MusicValidator
} from './middlewares/validators'

routes.post('/auth/signin', SignInValidator.postRules(), SignInController.store)
routes.post('/auth/signup', SignUpValidator.postRules(), SignUpController.store)

routes.post(
  '/musics',
  [MusicValidator.postRules(), TokenValidator.verifyToken],
  MusicController.store
)
routes.get('/musics', TokenValidator.verifyToken, MusicController.index)
routes.delete(
  '/musics/:id',
  [MusicValidator.deleteRules(), TokenValidator.verifyToken],
  MusicController.destroy
)

export default routes
