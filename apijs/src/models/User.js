import { DataTypes} from "sequelize";
import sequelize  from "../db.js";
const User = sequelize.define("user",{
    name:{
        type:DataTypes.STRING
    },
    hashPassword:{
        type: DataTypes.TEXT
    }
})

export default User;