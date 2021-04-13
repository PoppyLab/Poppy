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
  kickMembers: {
    name: "Kick Members",
    tag: "kickMembers",
    int: 0,
    to: 0,
    bits: 1 << 1,
    isGuild: true,
    isPrivate: false
  },
  banMembers: {
    name: "Ban Members",
    tag: "banMembers",
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
  manageChannels: {
    name: "Manage Channels",
    tag: "manageChannels",
    int: 0,
    to: 0,
    bits: 1 << 4,
    isGuild: true,
    isPrivate: false
  },
  addReactions: {
    name: "Add Reactions",
    tag: "addReactions",
    int: 0,
    to: 0,
    bits: 1 << 6,
    isGuild: true,
    isPrivate: false
  },
  viewAuditLogs: {
    name: "View Audit Logs",
    tag: "viewAuditLogs",
    int: 0,
    to: 0,
    bits: 1 << 7,
    isGuild: true,
    isPrivate: false
  },
  viewGuildInsights: {
    name: "View Server Insights",
    tag: "viewGuildInsights",
    int: 0,
    to: 0,
    bits: 1 << 19,
    isGuild: true,
    isPrivate: false
  },

  voicePrioritySpeaker: {
    name: "Priority",
    tag: "voicePrioritySpeaker",
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
  readMessages: {
    name: "Read channel text and view Voice Channels",
    tag: "readMessages",
    int: 0,
    to: 0,
    bits: 1 << 10,
    isGuild: true,
    isPrivate: false
  },

  /**
   * Permissions of Text
   */
  sendMessages: {
    name: "Send Messages",
    tag: "sendMessages",
    int: 0,
    to: 0,
    bits: 1 << 11,
    isGuild: true,
    isPrivate: false
  },
  sendTTSMessages: {
    name: "Send TTS Messages",
    tag: "sendTTSMessages",
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
  readMessageHistory: {
    name: "Read Message History",
    tag: "readMessageHistory",
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
  useExternalEmojis: {
    name: "Use External Emojis",
    tag: "useExternalEmojis",
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
  voiceMuteMembers: {
    name: "Mute Members",
    tag: "voiceMuteMembers",
    int: 0,
    to: 0,
    bits: 1 << 22,
    isGuild: true,
    isPrivate: false
  },
  voiceDeafenMembers: {
    name: "Deafen Members",
    tag: "voiceDeafenMembers",
    int: 0,
    to: 0,
    bits: 1 << 23,
    isGuild: true,
    isPrivate: false
  },
  voiceMoveMembers: {
    name: "Move Members",
    tag: "voiceMoveMembers",
    int: 0,
    to: 0,
    bits: 1 << 24,
    isGuild: true,
    isPrivate: false
  },
  voiceUseVAD: {
    name: "Use Voice Activity",
    tag: "voiceUseVAD",
    int: 0,
    to: 0,
    bits: 1 << 25,
    isGuild: true,
    isPrivate: false
  },
  voiceRequestToSpeak: {
    name: 'Request To Speak',
    tag: 'voiceRequestToSpeak',
    int: 0,
    to: 0,
    bits: 1 << 32,
    isGuild: true,
    isPrivate: false
  },
  /**
   * Guild
   */
  changeNickname: {
    name: "Change Nickname",
    tag: "changeNickname",
    int: 0,
    to: 0,
    bits: 1 << 26,
    isGuild: true,
    isPrivate: false
  },
  manageNicknames: {
    name: "Manage Nicknames",
    tag: "manageNicknames",
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
  manageWebhooks: {
    name: "Manage Webhooks",
    tag: "manageWebhooks",
    int: 0,
    to: 0,
    bits: 1 << 29,
    isGuild: true,
    isPrivate: false
  },
  manageEmojis: {
    name: "Manage Emojis",
    tag: "manageEmojis",
    int: 0,
    to: 0,
    bits: 1 << 30,
    isGuild: true,
    isPrivate: false
  }
}