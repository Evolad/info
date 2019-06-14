var SAMP = {};

SAMP.CallServer = (eventName, ...args) => { 
if(window.samp) window.samp.call(JSON.stringify({functionName: eventName, function: args})); 
}

export default SAMP;