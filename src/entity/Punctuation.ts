import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity('punctuation')
export class Punctuation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'start_game'})
    startGame: string;

    @Column({ name: 'finish_game'})
    finishGame: string;

    @Column()
    difficulty: string;

    @Column({ name: 'total_time'})
    totalTime: number;

    @Column({ name: 'state_game', type: 'bool'})
    stateGame: boolean;

    @Column({ name: 'id_user'})
    idUser: number;

    @ManyToOne(type => User, user => user.punctuation)
    @JoinColumn({name: "id_user", referencedColumnName: "id" })
    user: User;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
    
    @Column({ type: 'bool', default: true })
    active: boolean;

}