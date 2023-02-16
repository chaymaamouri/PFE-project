import { Column, Entity , PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Abonné {
@PrimaryGeneratedColumn()
public id_abonne : number ;
@Column()
public nom: String;
@Column()
public prenom: String;
@Column()
public Adresse_mail : String ;
@Column()
public mot_de_passe: String;
}
