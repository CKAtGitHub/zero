var Bus = require('../core/bus'),
  _ = require('lodash')

module.exports = {
  bus : new Bus,
  expand : function( module ){
    var root = this
    if( module.listen ){
//      root.bus.module( module.name )
      console.log("[bus expand]",module.name, module.listen)
      _.forEach(module.listen, function( listener, event){
        root.bus.module(module.name)
        root.bus.on(event, listener)
      })
      console.log("[after bus expand]", root.bus._events)
    }
  }
}