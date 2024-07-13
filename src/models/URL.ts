import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "urls" })
export class URL {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  longUrl: string;

  @Column({ type: "text", nullable: false })
  shortUrl: string;

  @Column({ type: "bigint", nullable: false })
  clicks: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: false })
  duration: Date;
}
