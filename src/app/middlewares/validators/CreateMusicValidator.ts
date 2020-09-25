import { check } from 'express-validator'

const postRules = () => [
  check('title')
    .exists()
    .withMessage('Informe o nome da música para continuar')
    .isString()
    .withMessage('Informe o título da música corretamente'),
  check('artist')
    .exists()
    .withMessage('Qual o nome do artista ?')
    .isString()
    .withMessage('Informe o nome do artista corretamente'),
  check('genre')
    .exists()
    .withMessage('Qual o gênero da sua música ?')
    .isIn(['ROCK', 'POP', 'MPB', 'FUNK', 'SAMBA', 'PAGODE'])
    .withMessage(
      'Esse gênero musical ainda não está disponnível em nossa plataforma'
    )
]

export default { postRules }
