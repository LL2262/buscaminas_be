import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, BeforeInsert, BeforeUpdate, OneToMany} from "typeorm";
import * as bcrypt from 'bcryptjs';
import { Punctuation } from "./Punctuation";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;
  
    @Column({ name: 'last_name', type: 'varchar', length: 255, nullable: true  })
    lastName: string;
  
    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;
  
    @Column({ type: 'varchar', length: 128, select: false })
    password: string;
    
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @OneToMany(type => Punctuation, punctuation => punctuation.user)
    punctuation: Punctuation[];
    
    @Column({ type: 'bool', default: true })
    active: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if (!this.password) {
        return;
      }
      this.password = await bcrypt.hash(this.password, 10);
    }

    checkPassword(password: string){
        return bcrypt.compareSync(password, this.password);
    }

}
