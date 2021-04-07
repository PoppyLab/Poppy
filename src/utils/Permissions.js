
const list = require("./PermissionsList")

module.exports = class PermissionsTools {
    constructor(data) {
        this.allow = data.allow
        this.deny = data.deny

        this.permissionsList = list

        this.permissionsAllow = []
        this.permissionsAllowMissing = []
        
        this.permissionsDeny = []
        this.permissionsDenyMissing = []

        this.permissions = []
        this.permissionsMissing = []

        this.raw = this

        if (typeof this.allow === 'undefined' && typeof this.deny === 'undefined') {
           if (typeof data === 'number') {
            for (let permission in list) {
                switch((BigInt(list[permission].bits) & BigInt(data)) === BigInt(list[permission].bits)) {
                    case true:
                        this.permissions.push(list[permission].tag)
                    break;
                    case false:
                        this.permissionsMissing.push(list[permission].tag)
                }
            }
           }
        } else {
            for (let permission in list) {
                switch((BigInt(list[permission].bits) & this.allow) === BigInt(list[permission].bits)) {
                    case true:
                        this.permissionsAllow.push(list[permission].tag)
                    break;
                    case false:
                        if (BigInt(this.allow) === 0n) {
                            /**
                             * This is to be empty so as not to result in false permission numbers.
                             *  */       
                        } else {
                            this.permissionsAllowMissing.push(list[permission].tag)
                        }
                    break;
                }
                switch((BigInt(list[permission].bits) & this.deny) === BigInt(list[permission].bits)) {
                    case true:
                        this.permissionsDeny.push(list[permission].tag)
                    break;
                    case false:
                        if (BigInt(this.deny) === 0n) {      
                        } else {
                            this.permissionsDenyMissing.push(list[permission].tag)
                        }
                    break;
                }
            }
        }
    }

    searchPermission(permissionName) {
        return this.permissions.indexOf(permissionName)
    }
    
    overridePermission(permission) {
        switch((BigInt(list[permission].bits) & this.deny) === BigInt(list[permission].bits)) {
            case true:
                return true;
            break;
            default: 
                return true;
        }
    }

    permissionsInfo() {
        
        const permissionsAllow = new Map()
        const permissionsAllowMissing = new Map()

        const permissionsDeny = new Map()
        const permissionsDenyMissing = new Map()


        for (let permission in list) {
            switch((BigInt(list[permission].bits) & this.allow) === BigInt(list[permission].bits)) {
                case true:
                   
                    permissionsAllow.set(permission, list[permission])
                break;
                case false:
                    permissionsAllowMissing.set(permission, list[permission])
                break;
            }
            switch((BigInt(list[permission].bits) & this.deny) === BigInt(list[permission].bits)) {
                case true:
                    permissionsDeny.set(permission, list[permission])
                break;
                case false:
                    permissionsDenyMissing.set(permission, list[permission])
                break;
            }
        }

        return {
            permissionsAllow: permissionsAllow,
            permissionsAllowMissing: permissionsAllowMissing,
            permissionsDeny: permissionsDeny,
            permissionsDenyMissing: permissionsDenyMissing
        };
    }


}
