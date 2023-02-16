import { Column, Entity , PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Société {
@PrimaryGeneratedColumn()
public matricule_fiscal :number ;
@Column()
public nom: String;
@Column()
public Adresse : String ;

}
