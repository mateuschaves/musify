import { check } from 'express-validator'

const postRules = () => [
  check('email')
    .exists()
    .withMessage('Informe o email para continuar')
    .isEmail()
    .withMessage('Informe um email válido para'),
  check('password').exists().withMessage('Informe a senha para continuar')
]

export default { postRules }
