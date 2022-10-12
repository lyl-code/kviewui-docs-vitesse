/**
 * @zh 判断是否为整型
 * @param {any} n 校验内容
 * @return {boolean}
 */
export const isInteger = (n: any): boolean => {
	return typeof n === 'number' && n % 1 === 0;
}

/**
 * @zh 判断是否为数字
 * @param {number | string | any} n 校验内容
 * @return {boolean} 
 */
export const isNumber = (n: number | string | any): boolean => {
	return typeof n === 'number' && !isNaN(n);
}

/**
 * @zh 判断是否为字符串类型
 * @param {unknown} n 校验内容
 * @return {boolean}
 */
export const isString = (n: unknown): n is string => typeof n === 'string';

/**
 * @zh 判断是否为布尔类型
 * @param {unknown} n 校验内容
 * @return {boolean}
 */
export const isBoolean = (n: unknown): n is boolean => typeof n === 'boolean';

/**
 * @zh 判断是否为数组类型
 * @param {unknown} n 校验内容
 * @return {boolean}
 */
export const isArray = (n: unknown): n is Array<any> => Array.isArray(n);

/**
 * @zh 判断是否为对象类型
 * @param {unknown} n 校验内容
 * @return {boolean}
 */
export const isObject = (n: unknown): n is Record<string, any> => typeof n === 'object' && n !== null;

/**
 * @zh 转为数字类型
 * @param {number | string | boolean |undefined | null} n 被转换内容
 * @return {number}
 */
export const toNumber = (n: number | string | boolean | undefined | null): number => {
	if (n === null) return 0;
	
	if (isString(n)) {
		n = parseFloat(n);
		n = Number.isNaN(n) ? 0 : n;
		return n;
	}
	
	if (isBoolean(n)) return Number(n);
	
	return n;
}

/**
 * @zh 数字转汉字
 * @param {number} num 需要转换的数字
 * @return {string} result
 * @see https://jingyan.baidu.com/article/9113f81b31f8976a3314c750.html
 */
export const convertToChinaNum = (num: number): string => {
	const numArr: string[] = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
	const unitArr: string[] = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
	
	if (!num || isNaN(num)) {
		return '零';
	}
	
	const eng: string[] = num.toString().split('');
	let result: string = '';
	
	for (let i = 0; i <eng.length; i++) {
		let des_i = eng.length - 1 -i; // 倒序排列设置
		result = unitArr[i] + result;
		let num_i = eng[des_i];
		result = numArr[num_i] + result;
	}
	// 将“零千”、“零百”换成 “零” “十零” 换成 “十”
	result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
	// 合并中间多个零为一个零
	result = result.replace(/零+/g, '零');
	// 将零亿换成亿，零万换成万
	result = result.replace(/零亿/g, '亿').replace(/零万/g, '万');
	// 将亿万换成亿
	result = result.replace(/亿万/g, '亿');
	// 移除末尾的零
	result = result.replace(/零+$/, '');
	// 将零一十换成零十
	result = result.replace(/零一十/g, '零十');
	// 将一十换成十
	result = result.replace(/^一十/g, '十');
	
	return result;
	
}

/**
 * @zh 数字转中文大写
 * @param {string} num 需要转换的数字
 * @return {string} str
 * @see https://jingyan.baidu.com/article/9113f81b31f8976a3314c750.html
 */
export const convertToUpperChina = (num: number): string => {
	let numStr: string = num+'';
	if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(numStr)) {
		return '数据非法';
	}
	let unit: string = '千百拾亿千百拾万千百拾元角分';
	let str: string = '';
	numStr += '00';
	
	let indexPoint: number = numStr.indexOf('.');
	// 如果是小数，截取小数点前面的位数
	if (indexPoint >= 0) {
		// 截取需要使用到的单位
		numStr = numStr.substring(0, indexPoint) + numStr.substr(indexPoint + 1, 2);
	}
	
	// 如果是整数，截取需要使用到的单位
	unit = unit.substr(unit.length - numStr.length);
	for (let i = 0; i < numStr.length; i++) {
		// 遍历转化为大写的数字
		str += '零壹贰叁肆伍陆柒捌玖'.charAt(+numStr.charAt(i)) + unit.charAt(i);
	}
	
	// 替换掉数字里面的零
	return str.replace(/零(千|百|拾|角)/g, '零')
		.replace(/(零)+/g, '零')
		.replace(/零(万|亿|元)/g, '$1')
		.replace(/(亿)万|壹(拾)/g, '$1$2')
		.replace(/^元零?|零分/g, "")
		.replace(/元$/g, "元整");
}
