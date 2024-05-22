import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('public')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar' })
  nombre?: string;

  @Column({ type: 'float' })
  precio?: number;

  @Column({ type: 'varchar' })
  presentacion?: string;
}
