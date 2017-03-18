var moment =require('moment')


console.log(moment().format())

var now =moment()
console.log("current timestamp", now.unix())

var timestamp=1489826957;

var currentMoment= moment.unix(timestamp)
console.log('cureent',currentMoment.format("MMM Do, YYYY @ h:mm A"))
