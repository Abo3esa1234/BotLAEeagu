
// commands/3v3.js
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('3v3')
    .setDescription('ابدأ بحث عن خصم 3v3!'),
  
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('بحث عن خصم 3v3 🎯')
      .setDescription('اضغط على الزر للانضمام إلى قائمة الانتظار.')
      .setColor(0x00AE86);
    
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('search_3v3')
          .setLabel('بحث عن خصم 🔍')
          .setStyle(ButtonStyle.Success)
      );
    
    await interaction.reply({ embeds: [embed], components: [row] });
  }
}
