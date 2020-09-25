import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

import UserEntity from './UserEntity'

enum Genre {
  ROCK = 'ROCK',
  POP = 'POP',
  MPB = 'MPB',
  FUNK = 'FUNK',
  SAMBA = 'SAMBA',
  PAGODE = 'PAGODE'
}

@Entity()
export default class Music {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  artist: string

  @Column()
  genre: Genre

  @ManyToOne((type) => UserEntity, (user) => user.musics, { eager: false })
  user: UserEntity

  @Column()
  userId: number
}
