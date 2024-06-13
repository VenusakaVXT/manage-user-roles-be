import { Sequelize } from "sequelize"
import { user, password } from "../connect/connect"

const sequelize = new Sequelize("role_management", user, password, {
    host: "localhost",
    dialect: "mysql"
})

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export default connection