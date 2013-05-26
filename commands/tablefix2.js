exports.name = '(╯°□°)╯︵ ┻━┻';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (data.userid != config.botinfo.userid) {
        bot.speak('/tablefix');
    }
}