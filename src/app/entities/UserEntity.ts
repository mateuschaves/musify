import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm'

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

  @BeforeInsert()
  async generadePasswordHash() {
    this.password = await bcrypt.hash(this.password, 8)
  }
}
