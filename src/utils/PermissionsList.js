

module.exports = {
    createInvite: {
        name: "Create Instant Invite",
        tag: "createInvite",
        int: 0,
        to: 0,
        bits: 1 << 0,
        isGuild: true,
        isPrivate: false
    },
    kickMember: {
        name: "Kick Members",
        tag: "kickMember",
        int: 0,
        to: 0,
        bits: 1 << 1,
        isGuild: true,
        isPrivate: false
    },
    banMember: {
        name: "Ban Members",
        tag: "banMember",
        int: 0,
        to: 0,
        bits: 1 << 2,
        isGuild: true,
        isPrivate: false
    },
    administrator: {
        name: "Administrator",
        tag: "administrator",
        int: 0,
        to: 0,
        bits: 1 << 3,
        isGuild: true,
        isPrivate: false
    },
    manageChannel: {
        name: "Manage Channels",
        tag: "manageChannel",
        int: 0,
        to: 0,
        bits: 1 << 4,
        isGuild: true,
        isPrivate: false
    },
    messageAddReaction: {
        name: "Add Reactions",
        tag: "messageAddReaction",
        int: 0,
        to: 0,
        bits: 1 << 6,
        isGuild: true,
        isPrivate: false
    },
    auditLogs: {
        name: "View Audit Logs",
        tag: "auditLogs",
        int: 0,
        to: 0,
        bits: 1 << 7,
        isGuild: true,
        isPrivate: false
    },
    guildInsights: {
        name: "View Server Insights",
        tag: "guildInsights",
        int: 0,
        to: 0,
        bits: 1 << 19,
        isGuild: true,
        isPrivate: false
    },

    prioritySpeaker: {
        name: "Priority",
        tag: "prioritySpeaker",
        int: 0,
        to: 0,
        bits: 1 << 8,
        isGuild: true,
        isPrivate: false
    },

    manageGuild: {
        name: "GuildManager",
        tag: "manageGuild",
        int: 0,
        to: 0,
        bits: 1 << 5,
        isGuild: true,
        isPrivate: false
    },


    
    /**
     * This is applicable for all types of channels.
     */
    viewChannel: {
        name: "Read channel text and view Voice Channels",
        tag: "viewChannel",
        int: 0,
        to: 0,
        bits: 1 << 10,
        isGuild: true,
        isPrivate: false
    },

    /**
     * Permissions of Text
     */
    readMessageHistory: {
        name: "Read Messages",
        tag: "readMessageHistory",
        int: 0,
        to: 0,
        bits: 1 << 10,
        isGuild: true,
        isPrivate: false
    },
    messageWrite: {
        name: "Send Messages",
        tag: "messageWrite",
        int: 0,
        to: 0,
        bits: 1 << 11,
        isGuild: true,
        isPrivate: false
    },
    messageTTS: {
        name: "Send TTS Messages",
        tag: "messageTTS",
        int: 0,
        to: 0,
        bits: 1 << 12,
        isGuild: true,
        isPrivate: false
    },
    manageMessages: {
        name: "Manage Messages",
        tag: "manageMessages",
        int: 0,
        to: 0,
        bits: 1 << 13,
        isGuild: true,
        isPrivate: false
    },
    embedLinks: {
        name: "Embed Links",
        tag: "embedLinks",
        int: 0,
        to: 0,
        bits: 1 << 14,
        isGuild: true,
        isPrivate: false
    },
    attachFiles: {
        name: "Attach Files",
        tag: "attachFiles",
        int: 0,
        to: 0,
        bits: 1 << 15,
        isGuild: true,
        isPrivate: false
    },
    messageHistory: {
        name: "Read History",
        tag: "messageHistory",
        int: 0,
        to: 0,
        bits: 1 << 16,
        isGuild: true,
        isPrivate: false
    },
    mentionEveryone: {
        name: "Mention Everyone",
        tag: "mentionEveryone",
        int: 0,
        to: 0,
        bits: 1 << 17,
        isGuild: true,
        isPrivate: false
    },
    externalEmojis: {
        name: "Use External Emojis",
        tag: "externalEmojis",
        int: 0,
        to: 0,
        bits: 1 << 18,
        isGuild: true,
        isPrivate: false
    },
    useSlashCommands: {
        name: "Use Slash Commands",
        tag: "useSlashCommands",
        int: 0,
        to: 0,
        bits: 1 << 31,
        isGuild: true,
        isPrivate: false
    },


    /**
     * Permissions Voice Channel
     */
    voiceStream: {
        name: "Stream",
        tag: "voiceStream",
        int: 0,
        to: 0,
        bits: 1 << 9,
        isGuild: true,
        isPrivate: false
    },
    voiceConnect: {
        name: "Connect",
        tag: "voiceConnect",
        int: 0,
        to: 0,
        bits: 1 << 20,
        isGuild: true,
        isPrivate: false
    },
    voiceSpeak: {
        name: "Speak",
        tag: "voiceSpeak",
        int: 0,
        to: 0,
        bits: 1 << 21,
        isGuild: true,
        isPrivate: false
    },
    voiceMuteOthers: {
        name: "Mute Members",
        tag: "voiceMuteOthers",
        int: 0,
        to: 0,
        bits: 1 << 22,
        isGuild: true,
        isPrivate: false
    },
    voiceDeaf: {
        name: "Deafen Members",
        tag: "voiceDeafOthers",
        int: 0,
        to: 0,
        bits: 1 << 23,
        isGuild: true,
        isPrivate: false
    },
    voiceMoveOthers: {
        name: "Move Members",
        tag: "voiceMoveOthers",
        int: 0,
        to: 0,
        bits: 1 << 24,
        isGuild: true,
        isPrivate: false
    },
    voiceUseVad: {
        name: "Use Voice Activity",
        tag: "voiceUseVad",
        int: 0,
        to: 0,
        bits: 1 << 25,
        isGuild: true,
        isPrivate: false
    },

    /**
     * Guild
     */
    chanageNickname: {
        name: "Change Nickname",
        tag: "chanageNickname",
        int: 0,
        to: 0,
        bits: 1 << 26,
        isGuild: true,
        isPrivate: false
    },
    manageNickname: {
        name: "Manage Nicknames",
        tag: "manageNickname",
        int: 0,
        to: 0,
        bits: 1 << 27,
        isGuild: true,
        isPrivate: false
    },
    manageRoles: {
        name: "Manage Roles",
        tag: "manageRoles",
        int: 0,
        to: 0,
        bits: 1 << 28,
        isGuild: true,
        isPrivate: false
    },
    managePermissions: {
        name: "Manage Permissions",
        tag: "managePermissions",
        int: 0,
        to: 0,
        bits: 1 << 28,
        isGuild: true,
        isPrivate: false
    },
    manageWebhooks: {
        name: "Manage Webhooks",
        tag: "manageWebhooks",
        int: 0,
        to: 0,
        bits: 1 << 29,
        isGuild: true,
        isPrivate: false
    },
    manageEmotes: {
        name: "Manage Emojis",
        tag: "manageEmotes",
        int: 0,
        to: 0,
        bits: 1 << 30,
        isGuild: true,
        isPrivate: false
    },


}