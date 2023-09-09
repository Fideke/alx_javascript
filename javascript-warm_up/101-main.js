#!usr/bin/node
//a function that execute x times a  function
const callMeMoby = require("./101-call_me_moby").callMeMoby
callMeMoby(3, function () {
    console.log("C is fun");
});