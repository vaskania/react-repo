import { Column, Table, Model } from 'sequelize-typescript'

@Table({ freezeTableName: true, tableName: 'ApiKeys' })
export class ApikeyModel extends Model<{ key: string }> {
  @Column
  key: string
}
