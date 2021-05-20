module.exports = (function() {

    function Util() { }

    Util.generateID = function(length) {
        let string = '';
        for(let i = 0; i < length; i++) string += Math.random().toString(20).substr(2,1);
        return string;
    }

    return Util;

})();
