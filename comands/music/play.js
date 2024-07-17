module.exports.data = {
  name: "play",
  description: "Choi nhac !!",
  type: 1,
  option: {},
  integration_types: [0, 1],
  contexts: [0],
};
module.exports.execute = async (clent, interaction) => {
  const ping = client.ws.ping;
  interaction.reply(ping);
  return;
};
