module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        titlenew: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false
        },
        infonew: {
            type: DataTypes.STRING,
            allowNull: false
        },

        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        approve: {
            type: DataTypes.BOOLEAN
        },
        isupdate:{
            type: DataTypes.BOOLEAN            
        }
    })

    return Post

}
