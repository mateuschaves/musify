import { Router } from 'express'

import { TokenValidator } from './middlewares/validators'

const routes = Router()

import {
  SignInController,
  SignUpController,
  MusicController
} from './controllers'

import { SignInValidator, SignUpValidator } from './middlewares/validators'

routes.post('/auth/signin', SignInValidator.postRules(), SignInController.store)
routes.post('/auth/signup', SignUpValidator.postRules(), SignUpController.store)

routes.post('/musics', [TokenValidator.verifyToken], MusicController.store)

export default routes
