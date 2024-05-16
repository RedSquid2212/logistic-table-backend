import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ApplicationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    receivingDate: string;

    @Column()
    clientCompany: string;

    @Column()
    carrier: string;

    @Column()
    carrierPhoneNum: string;

    @Column({nullable: true})
    comments: string;

    @Column({default: 'новая'})
    status: string;

    @Column()
    ati: string;
}