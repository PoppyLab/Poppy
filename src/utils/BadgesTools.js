
const badges = {
    'DISCORD_EMPLOYEE': {
        tag: 'DISCORD_EMPLOYEE',
        int: 1,
        to: 0,
        bits: 1 << 0
    },
    'PARTNERED_SERVER_OWNER': {
        tag: 'PARTNERED_SERVER_OWNER',
        int: 1,
        to: 1,
        bits: 1 << 1
    },
    'HYPESQUAD_EVENTS': {
        tag: 'HYPESQUAD_EVENTS',
        int: 1,
        to: 2,
        bits: 1 << 2
    },
    'BUG_HUNTER_LEVEL_1': {
        tag: 'BUG_HUNTER_LEVEL_1',
        int: 1,
        to: 3,
        bits: 1 << 3
    },
    'HOUSE_BRAVERY': {
        tag: 'HOUSE_BRAVERY',
        int: 1,
        to: 6,
        bits: 1 << 6
    },
    'HOUSE_BRILLIANCE': {
        tag: 'HOUSE_BRILLIANCE',
        int: 1,
        to: 7,
        bits: 1 << 7
    },
    'HOUSE_BALANCE': {
        tag: 'HOUSE_BALANCE',
        int: 1,
        to: 8,
        bits: 1 << 8
    },
    'EARLY_SUPPORTER': {
        tag: 'EARLY_SUPPORTER',
        int: 1,
        to: 9,
        bits: 1 << 9
    },
    'TEAM_USER': {
        tag: 'TEAM_USER',
        int: 1,
        to: 10,
        bits: 1 << 10
    },
    'SYSTEM': {
        tag: 'SYSTEM',
        int: 1,
        to: 12,
        bits: 1 << 12	
    },
    'BUG_HUNTER_LEVEL_2': {
        tag: 'BUG_HUNTER_LEVEL_2',
        int: 1,
        to: 14,
        bits: 1 << 14
    },
    'VERIFIED_BOT': {
        tag: 'VERIFIED_BOT',
        int: 1,
        to: 16,
        bits: 1 << 16
    },
    'EARLY_VERIFIED_BOT_DEVELOPER': {
        tag: 'EARLY_VERIFIED_BOT_DEVELOPER',
        int: 1,
        to: 17,
        bits: 1 << 17
    },
}


module.exports = class BadgesTools {
    constructor(flags) {
        this.flags = flags

        this.badges = []
        this.badgesMissing = []

        this.house = 'USER_HAS_NO_HYPESQUAD'

        this.raw = this;


       
        for (let badge in badges) {
            switch ((badges[badge].bits & this.flags) === badges[badge].bits) {
                case true: 
                    switch (badge) {
                        case 'HOUSE_BRAVERY':
                            if (this.house === 'USER_HAS_NO_HYPESQUAD') {
                                this.house = badge
                                this.badges.push(badge)
                            }
                        break;
                        case 'HOUSE_BRILLIANCE':
                            if (this.house === 'USER_HAS_NO_HYPESQUAD') {
                                this.house = badge
                                this.badges.push(badge)
                            }
                        break;
                        case 'HOUSE_BALANCE':
                            if (this.house === 'USER_HAS_NO_HYPESQUAD') {
                                this.house = badge
                                this.badges.push(badge)
                            }
                        break;
                        default: 
                            this.badges.push(badge)
                    }
                  
                break;
                case false:
                    switch (badge) {
                        case 'HOUSE_BRAVERY':
                         
                        break;
                        case 'HOUSE_BRILLIANCE':
                           
                        break;
                        case 'HOUSE_BALANCE':
                            
                        break;
                        default: 
                            this.badgesMissing.push(badge)
                    }
       
                break;

            }
        }
    }

    badgesInfo() {
        const badgesArray = new Map()
        const badgesMissingArray = new Map()

        for (let badgeName of this.badges) {
            badgesArray.set(badgeName, badges[badgeName])
        }
        for (let badgeName of this.badgesMissing) {
            badgesMissingArray.set(badgeName, badges[badgeName])
        }

        return {
            badges: badgesArray,
            badgesMissing: badgesMissingArray
        }
    }
}