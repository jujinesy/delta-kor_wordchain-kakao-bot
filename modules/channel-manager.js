const Channel = require('./channel');

module.exports = (function() {

    /**
     * @type {Map<string, Channel>}
     */
    const channels = new Map();

    function ChannelManager() { }

    ChannelManager.has = function(id) {
        return !!channels.get(id);
    };

    ChannelManager.get = function(id) {
        return channels.get(id);
    };

    ChannelManager.find = function(name) {
        for(let channel of channels.values()) {
            if(channel.name === name)
                return channel;
        }
        return null;
    };

    ChannelManager.push = function(channel) {
        channels.set(channel.id, channel);
    };

    ChannelManager.create = function(name) {
        const channel = new Channel(name);
        ChannelManager.push(channel);
    };

    return ChannelManager;

})();
