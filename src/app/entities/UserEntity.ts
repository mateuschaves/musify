import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany
} from 'typeorm'

import MusicEntity from './MusicEntity'

import bcrypt from 'bcryptjs'

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany((type) => MusicEntity, (music) => music.user, { eager: true })
  musics: MusicEntity[]

  @BeforeInsert()
  async generadePasswordHash() {
    this.password = await bcrypt.hash(this.password, 8)
  }
}
