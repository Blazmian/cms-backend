import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Employees } from "./employees.entity"
import { Department } from "./employees_department.entity"


@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 15 })
    user: string

    @Column({ length: 15 })
    password: string

    @ManyToOne(() => Employees, (employees) => employees.role)
    employe: Employees

    @ManyToOne(() => Department, (department) => department.role)
    department: Department
} 