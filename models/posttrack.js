module.exports = (sequelize, DataTypes) => {

    const PostUpdate = sequelize.define("updatedposts", {        
        author: {
            type: DataTypes.STRING
        },
        postId: {
            type: DataTypes.INTEGER
        },
        updatedtitle:{
            type: DataTypes.STRING
        },
        updatedinfo:{
            type: DataTypes.STRING
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        
    })

    return PostUpdate
}
