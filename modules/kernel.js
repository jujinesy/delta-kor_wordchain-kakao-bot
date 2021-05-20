const ChannelManager = require('./channel-manager');
const UserManager = require('./user-manager');

module.exports = (function () {

    function Kernel() { }

    Kernel.onChat = function(channelName, chatContent, nickname, isGroupChannel, avatar) {
        const channel = ChannelManager.find(channelName) || ChannelManager.create(channelName);
        UserManager.find(channelName, avatar, channel);
    };

    return Kernel;

})();
