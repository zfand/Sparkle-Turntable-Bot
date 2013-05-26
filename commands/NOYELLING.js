var output = ["SHHHHHHH", "SHHHHHHH", "SHH!", "NO YELLING", "CAPS LOCK BRAH", "SHHH DUNKEY", "LET ME TELL YOU A LITTLE STORY ABOUT A MAN NAMED SHH","SHH", "http://i.imgur.com/V0y1tXL.gif", "http://i.imgur.com/YGi0gkl.gif", "http://i.imgur.com/5lg65WI.gif"];
exports.name = '';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.isValidFor = function(data) {
	var text = data.text.replace(/[^a-zA-Z ]/g, "");
	if (text.length > 1) {

		//skip I
		if (text == "I") {
			return false;
		}
		//cheat to not detect emoticons
		if (data.text[0] == ":" || data.text[0] == ";") {
			return false;
		}
		//skip BAM!
		if (text.toLowerCase().indexOf("bam") >= 0) {
			return false;
		}


		//now heck
		if (text == text.toUpperCase()) {
			return true;
		}
	}
    return false;
}
exports.handler = function(data) {
    if (data.userid != config.botinfo.userid) {
        bot.speak(output[Math.floor(Math.random()*output.length)]);
    }
}