exports.name = ':fist:';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = true;
exports.handler = function(data) {
    if ((config.bonusvote == 'CHAT') && (bonuspoints.indexOf(data.name) == -1)) {
        bonuspoints.push(data.name);
        //If the target has been met, the bot will awesome
        if(!bonusvote 
            && (currentsong.djid != config.botinfo.userid)) {
            bot.speak(':fist:');
            bot.vote('up');
            bonusvote = true;
        }
    }
}