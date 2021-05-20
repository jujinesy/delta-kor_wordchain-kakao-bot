const Util = require('./util');
const User = require('./user');

module.exports = (function() {

    function Channel(name) {
        this.id = Util.generateID(16);
        this.name = name;
        /**
         * @type {Map<string, User>}
         */
        this.users = new Map();
    }

    Channel.prototype.has = function(user) {
        if(user instanceof User) user = user.id;
        return this.users.has(user);
    }

    Channel.prototype.push = function(user) {
        this.users.set(user.id, user);
    };

    return Channel;

})();
