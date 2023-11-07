import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DetailAssistant } from './detail_assistant.entity'

@Entity()
export class Assistant {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30 })
    name: string

    @Column({ length: 30 })
    lastname: string

    @Column({ length: 50 })
    email: string

    @Column({ length: 10 })
    cellphone: string

    @Column({ length: 50 })
    description: string

    @OneToMany(() => DetailAssistant, (detail) => detail.assistant)
    detail: DetailAssistant[]
}