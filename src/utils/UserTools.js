const BadgesTools = require("./BadgesTools")
const PermissionsTools = require("./Permissions")





module.exports = class UserTools {
    constructor(user) {
        this.user = user.user
        this.permissions = new PermissionsTools(user.permissions)
        this.badge =  new BadgesTools(this.user.publicFlags)
        this.enconomy = {}
        this.data = {}
    }

    /**
     * With this method you can update the user's metadata in the database.
     */
    updateData() { }

} 