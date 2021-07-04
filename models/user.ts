import { DataTypes } from "sequelize";
import db from "../db/connection";

const UserModel = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.NUMBER
    },
    birthDay: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    role: {
        type: DataTypes.ENUM,
        values: ['ADMIN', 'STUDENT', 'TEACHER']
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default UserModel