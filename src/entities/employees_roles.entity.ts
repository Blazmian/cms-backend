import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Employees } from "./employees.entity"
import { Department } from "./employees_department.entity"


@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id_role : number

    @Column({ length : 15 })
    user: string

    @Column({ length : 15 })
    password : string

    @ManyToOne(() => Employees, (employees) => employees.roles)
    employees: Employees

    @ManyToOne(() => Department, (department) => department.roles)
    department: Department
} 