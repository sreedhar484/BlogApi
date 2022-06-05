module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        acctype: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        securityQuestion: {
            type: DataTypes.STRING
        },
        answer: {
            type: DataTypes.STRING
        }
    })

    return User

}