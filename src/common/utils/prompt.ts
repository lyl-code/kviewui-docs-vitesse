import { PropType } from 'vue';
/**
 * @zh 消息提示框
 * @params title 提示内容
 * @params position 提示显示位置
 */
export const msg = (title: string, position: any = 'center') => {
	uni.showToast({
		title: title,
		icon: 'none',
		image: '',
		mask: false,
		duration: 1500,
		position: position
	})
}

/**
 * @zh 显示loading提示框
 * @params title 提示的文字内容
 * @params mask 是否显示透明蒙层
 */
export const loading = (title: string, mask: boolean = false) => {
	uni.showLoading({
		title: title,
		mask: false
	});
}

/**
 * @zh 模态弹窗
 * @param {String} title 标题
 * @param {String} content 内容
 * @param {Boolean} showCancel 是否显示取消按钮
 * @param {String} cancelText 取消按钮文本
 * @param {String} confirmText 确定按钮文本
 * @param {Function} success 成功回调
 * @param {Function} fail 失败回调
 * @param {Function} complete 完成回调
 */
export const modal = (title: string = '', content: string = '', showCancel: boolean = false, cancelText: string = '取消', confirmText: string = '确定', success: any = () => { }, fail: any = () => { }, complete: any = () => { }) => {
	uni.showModal({
		title: title,
		content: content,
		showCancel: showCancel,
		cancelText: cancelText,
		confirmText: confirmText,
		success: success,
		fail: fail,
		complete: complete
	});
}