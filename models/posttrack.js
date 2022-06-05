module.exports = (sequelize, DataTypes) => {

    const PostUpdate = sequelize.define("updatedposts", {        
        author: {
            type: DataTypes.STRING
        },
        postId: {
            type: DataTypes.INTEGER
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        
    })

    return PostUpdate
}