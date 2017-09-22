exports.install = function(Vue, options){
	Vue.prototype.debounce = function(action,idle){
    var last
    return function(){
        var ctx = this, args = arguments
        clearTimeout(last)
        last = setTimeout(function(){
            action.apply(ctx, args)
        }, idle)
    }
}

}