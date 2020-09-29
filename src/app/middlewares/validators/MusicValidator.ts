import { check } from 'express-validator'

const postRules = () => [
  check('title')
    .exists()
    .withMessage('Informe o nome da música para continuar')
    .notEmpty()
    .withMessage('Informe o título da música corretamente'),
  check('artist')
    .exists()
    .withMessage('Qual o nome do artista ?')
    .notEmpty()
    .withMessage('Informe o nome do artista corretamente'),
  check('genre')
    .exists()
    .withMessage('Qual o gênero da sua música ?')
    .isIn(['ROCK', 'POP', 'MPB', 'FUNK', 'SAMBA', 'PAGODE'])
    .withMessage(
      'Esse gênero musical ainda não está disponível em nossa plataforma'
    )
]

const deleteRules = () => [
  check('id')
    .exists()
    .withMessage('Informe a música que deseja deletar')
    .isNumeric()
    .withMessage('Informe o id da música corretamente')
]

export default { postRules, deleteRules }
