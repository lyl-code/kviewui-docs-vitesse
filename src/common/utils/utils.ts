import { Ref, unref, getCurrentInstance } from 'vue';

const isWindow = (v: unknown) => {
	return v === window;
}

/**
 * @zh 获取单位
 * @param {String} e 尺寸大小
 */
export const getUnitByUnit = (e): String => {
	if (e.endsWith('px')) {
		return 'px';
	}
	if (e.endsWith('rpx')) {
		return 'rpx';
	}
	if (e.endsWith('rem')) {
		return 'rem';
	}
	return '';
}

/**
 * @zh 获取尺寸单位数字
 * @param {Number} e 尺寸单位
 * @return Number
 */
export const getNumberByUnit = (e): Number => {
	const arr = e.split(getUnitByUnit(e));
	return Number(arr[0]);
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

/**
 * @zh 获取节点的大小及相对于视图窗口的位置信息
 * @param {Element | Window | any} eleRef 节点标签的ref
 * @param {String} eleId 节点的id，非H5环境下需要
 * @return 
 * 	width 节点宽度 number
 * 	height 节点高度 number
 * 	top 节点上边界坐标
 * 	left 节点左边界坐标
 * 	right 节点右边界坐标
 * 	bottom 节点下边界坐标
 */
export const useKviewuiRect = (eleRef: (Element | Window | any) | Ref<Element | Window | any>, eleId: string = ''): any => {
	let element = unref(eleRef);
	return new Promise((reslove) => {
		// #ifdef H5
		console.log(element);
		if (element && element.$el) {
			element = element.$el;
		}
		if (isWindow(element)) {
			const width = element.innerWidth;
			const height = element.innerHeight;

			reslove({
				top: 0,
				left: 0,
				right: width,
				bottom: height,
				width,
				height
			});
		}
		console.log(element);
		if (element && element.getBoundingClientRect) {
			reslove(element.getBoundingClientRect());
		}

		reslove({
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0
		});
		// #endif
		// #ifndef H5
		const { proxy }: any = getCurrentInstance();
		const query = uni.createSelectorQuery();
		// console.log(`element:${element}`);
		query.select(`#${eleId}`) && query.select(`#${eleId}`).boundingClientRect((data) => {
			reslove(data);
		}).exec();
		// #endif
	});
}