exports.name = '';
exports.hidden = true;
exports.enabled = false;
exports.matchStart = false;
exports.isValidFor = function(data) {
    return ( data.text == data.text.toUpperCase() ); 
}
exports.handler = function(data) {
    if (data.userid != config.botinfo.userid) {
        bot.speak('DUNKEY SHHHH');
    }
}