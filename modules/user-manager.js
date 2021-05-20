const User = require('./user');

module.exports = (function() {

    /**
     * @type {Map<string, User>}
     */
    const users = new Map();

    function UserManager() { }

    UserManager.has = function(id) {
        return !!users.get(id);
    };

    UserManager.get = function(id) {
        return users.get(id);
    };

    UserManager.find = function(nickname, avatar, channel) {
        for(let user of users.values()) {
            if(user.nickname === nickname && user.avatar === avatar && user.channel === channel)
                return user;
        }
        return null;
    };

    UserManager.push = function(user) {
        users.set(user.id, user);
    };

    return UserManager;

})();
