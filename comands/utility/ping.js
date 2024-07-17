module.exports.data = {
    name: 'ping',
    description: 'Check ping !!',
    type: 1,
    option: {},
    integration_types: [0, 1],
    contexts: [0, 1, 2],
};
module.exports.execute = async (clent, interaction) => {
    const ping = client.ws.ping;
    interaction.reply(ping);
    return;
};
