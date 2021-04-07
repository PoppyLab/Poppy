module.exports = {
    CREATE_INSTANT_INVITE: {
        name: "Create Instant Invite",
        tag: "CREATE_INSTANT_INVITE",
        int: 0,
        to: 0,
        bits: 1 << 0,
        isGuild: true,
        isPrivate: false
    },
    KICK_MEMBERS: {
        name: "Kick Members",
        tag: "KICK_MEMBERS",
        int: 0,
        to: 0,
        bits: 1 << 1,
        isGuild: true,
        isPrivate: false
    },
    BAN_MEMBERS: {
        name: "Ban Members",
        tag: "BAN_MEMBERS",
        int: 0,
        to: 0,
        bits: 1 << 2,
        isGuild: true,
        isPrivate: false
    },
    ADMINISTRATOR: {
        name: "Administrator",
        tag: "ADMINISTRATOR",
        int: 0,
        to: 0,
        bits: 1 << 3,
        isGuild: true,
        isPrivate: false
    },
    MANAGE_CHANNEL: {
        name: "Manage Channels",
        tag: "MANAGE_CHANNEL",
        int: 0,
        to: 0,
        bits: 1 << 4,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_ADD_REACTION: {
        name: "Add Reactions",
        tag: "MESSAGE_ADD_REACTION",
        int: 0,
        to: 0,
        bits: 1 << 6,
        isGuild: true,
        isPrivate: false
    },
    VIEW_AUDIT_LOGS: {
        name: "View Audit Logs",
        tag: "VIEW_AUDIT_LOGS",
        int: 0,
        to: 0,
        bits: 1 << 7,
        isGuild: true,
        isPrivate: false
    },
    VIEW_GUILD_INSIGHTS: {
        name: "View Server Insights",
        tag: "VIEW_GUILD_INSIGHTS",
        int: 0,
        to: 0,
        bits: 1 << 19,
        isGuild: true,
        isPrivate: false
    },

    PRIORITY_SPEAKER: {
        name: "Priority",
        tag: "PRIORITY_SPEAKER",
        int: 0,
        to: 0,
        bits: 1 << 8,
        isGuild: true,
        isPrivate: false
    },

    MANAGE_SERVER: {
        name: "GuildManager",
        tag: "VIEW_GUILD_INSIGHTS",
        int: 0,
        to: 0,
        bits: 1 << 5,
        isGuild: true,
        isPrivate: false
    },


    
    /**
     * This is applicable for all types of channels.
     */
    VIEW_CHANNEL: {
        name: "Read channel text and view Voice Channels",
        tag: "VIEW_CHANNEL",
        int: 0,
        to: 0,
        bits: 1 << 10,
        isGuild: true,
        isPrivate: false
    },

    /**
     * Permissions of Text
     */
    MESSAGE_READ: {
        name: "Read Messages",
        tag: "MESSAGE_READ",
        int: 0,
        to: 0,
        bits: 1 << 10,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_WRITE: {
        name: "Send Messages",
        tag: "MESSAGE_WRITE",
        int: 0,
        to: 0,
        bits: 1 << 11,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_TTS: {
        name: "Send TTS Messages",
        tag: "MESSAGE_TTS",
        int: 0,
        to: 0,
        bits: 1 << 12,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_MANAGE: {
        name: "Manage Messages",
        tag: "MESSAGE_MANAGE",
        int: 0,
        to: 0,
        bits: 1 << 13,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_EMBED_LINKS: {
        name: "Embed Links",
        tag: "MESSAGE_EMBED_LINKS",
        int: 0,
        to: 0,
        bits: 1 << 14,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_ATTACH_FILES: {
        name: "Attach Files",
        tag: "MESSAGE_ATTACH_FILES",
        int: 0,
        to: 0,
        bits: 1 << 15,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_HISTORY: {
        name: "Read History",
        tag: "MESSAGE_HISTORY",
        int: 0,
        to: 0,
        bits: 1 << 16,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_MENTION_EVERYONE: {
        name: "Mention Everyone",
        tag: "MESSAGE_MENTION_EVERYONE",
        int: 0,
        to: 0,
        bits: 1 << 17,
        isGuild: true,
        isPrivate: false
    },
    MESSAGE_EXT_EMOJI: {
        name: "Use External Emojis",
        tag: "MESSAGE_EXT_EMOJI",
        int: 0,
        to: 0,
        bits: 1 << 18,
        isGuild: true,
        isPrivate: false
    },
    USE_SLASH_COMMANDS: {
        name: "Use Slash Commands",
        tag: "USE_SLASH_COMMANDS",
        int: 0,
        to: 0,
        bits: 1 << 31,
        isGuild: true,
        isPrivate: false
    },


    /**
     * Permissions Voice Channel
     */
    VOICE_STREAM: {
        name: "Stream",
        tag: "VOICE_STREAM",
        int: 0,
        to: 0,
        bits: 1 << 9,
        isGuild: true,
        isPrivate: false
    },
    VOICE_CONNECT: {
        name: "Connect",
        tag: "VOICE_CONNECT",
        int: 0,
        to: 0,
        bits: 1 << 20,
        isGuild: true,
        isPrivate: false
    },
    VOICE_SPEAK: {
        name: "Speak",
        tag: "VOICE_SPEAK",
        int: 0,
        to: 0,
        bits: 1 << 21,
        isGuild: true,
        isPrivate: false
    },
    VOICE_MUTE_OTHERS: {
        name: "Mute Members",
        tag: "VOICE_MUTE_OTHERS",
        int: 0,
        to: 0,
        bits: 1 << 22,
        isGuild: true,
        isPrivate: false
    },
    VOICE_DEAF_OTHERS: {
        name: "Deafen Members",
        tag: "VOICE_DEAF_OTHERS",
        int: 0,
        to: 0,
        bits: 1 << 23,
        isGuild: true,
        isPrivate: false
    },
    VOICE_MOVE_OTHERS: {
        name: "Move Members",
        tag: "VOICE_MOVE_OTHERS",
        int: 0,
        to: 0,
        bits: 1 << 24,
        isGuild: true,
        isPrivate: false
    },
    VOICE_USE_VAD: {
        name: "Use Voice Activity",
        tag: "VOICE_USE_VAD",
        int: 0,
        to: 0,
        bits: 1 << 25,
        isGuild: true,
        isPrivate: false
    },

    /**
     * Guild
     */
    NICKNAME_CHANGE: {
        name: "Change Nickname",
        tag: "NICKNAME_CHANGE",
        int: 0,
        to: 0,
        bits: 1 << 26,
        isGuild: true,
        isPrivate: false
    },
    NICKNAME_MANAGE: {
        name: "Manage Nicknames",
        tag: "NICKNAME_MANAGE",
        int: 0,
        to: 0,
        bits: 1 << 27,
        isGuild: true,
        isPrivate: false
    },
    MANAGE_ROLES: {
        name: "Manage Roles",
        tag: "MANAGE_ROLES",
        int: 0,
        to: 0,
        bits: 1 << 28,
        isGuild: true,
        isPrivate: false
    },
    MANAGE_PERMISSIONS: {
        name: "Manage Permissions",
        tag: "MANAGE_PERMISSIONS",
        int: 0,
        to: 0,
        bits: 1 << 28,
        isGuild: true,
        isPrivate: false
    },
    MANAGE_WEBHOOKS: {
        name: "Manage Webhooks",
        tag: "MANAGE_WEBHOOKS",
        int: 0,
        to: 0,
        bits: 1 << 29,
        isGuild: true,
        isPrivate: false
    },
    MANAGE_EMOTES: {
        name: "Manage Emojis",
        tag: "MANAGE_EMOTES",
        int: 0,
        to: 0,
        bits: 1 << 30,
        isGuild: true,
        isPrivate: false
    },


}