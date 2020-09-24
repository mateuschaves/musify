import { check } from 'express-validator'

const postRules = () => [
  check('email')
    .exists()
    .withMessage('Informe o email para continuar')
    .isEmail()
    .withMessage('Informe um email válido para'),
  check('password')
    .exists()
    .withMessage('Informe a senha para continuar')
    .isLength({
      min: 8
    })
    .withMessage('Sua senha precisa ter no mínimo 8 caracteres'),
  check('name')
    .exists()
    .withMessage('Informe o seu nome para continuar')
    .isEmpty()
    .withMessage('Seu nome não pode ser vazio')
]

export default { postRules }
