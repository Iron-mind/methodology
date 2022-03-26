import {Model, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';
@Table
export default class User extends Model<User> {
	@Column
	name!: string;

	@Column
	lastName!: string;

}
