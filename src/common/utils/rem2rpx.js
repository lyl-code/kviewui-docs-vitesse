// rem -> rpx

const loaderUtils = require('loader-utils');

module.exports = function(source) {
	const options = loaderUtils.getOptions(this);
	const reg = /(\d?\.?\d+)(rem)/g;
	source = source.replace(reg, function($0, $1, $2) {
		return $1 * (options.ratio || 100) + 'rpx';
	})
	
	return source;
}