import { Column, Entity , PrimaryGeneratedColumn } from "typeorm";
export class Déclaration {
@PrimaryGeneratedColumn()
public id_déclaration :number ;
@Column()
public date : Date;
@Column()
public num_autorisation : number ;
@Column()
public date_autorisation : Date ;
@Column()
public montant_dc : number ;
@Column()
public taux_dc : number ;


}
