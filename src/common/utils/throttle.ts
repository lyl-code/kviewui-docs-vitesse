import {config} from '@/common/config';

/**
 * @description 节流防抖函数
 * @param fn 执行的函数
 * @param wait 延迟执行的毫秒数
 * @param type 1 表示 节流 2 表示防抖
 */
export const throttle = (fn: any, wait: number = 150, type: number = 1) => {
	if (type === 1) {
		var  prev = 0;
	} else {
		var timeout;
	}
	return function() {
		var args = arguments;
		var ctx = this;
		if (type === 1) {
			var now = Date.now();
			if (now - prev > wait) {
				fn.apply(ctx, args);
				prev = Date.now();
			} else {
				if (config.debug) {
					console.warn('debug utils info：节流已生效');
				}
			}
		} else {
			if (!timeout) {
				timeout = setTimeout(() => {
					timeout = null;
					fn.apply(ctx, args);
				}, wait);
			} else {
				if (config.debug) {
					console.warn('debug utils info：防抖已生效');
				}
			}
		}
	}
}