const Util = require('./util');

module.exports = (function() {

    function User(nickname, avatar, channel) {
        this.id = Util.generateID(16);
        this.nickname = nickname;
        this.avatar = avatar;
        this.channel = channel;
    }

    return User;

})();
