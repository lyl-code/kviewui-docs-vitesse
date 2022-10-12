/**
 * @zh 文字超出指定长度部分省略号代替
 * @param {string} str 原文字内容
 * @param {number} len 指定长度
 * @return {string}
 */
export const ellipsis = (str: string, len: number): string => {
	if (!str?.length) {
		return str;
	}
	if (str.length * 2 <= len) {
		return str;
	}
	let strlen: number = 0;
	let s: string = ''
	for (let i = 0; i < str.length; i++) {
		s += str.charAt(i);
		if (str.charCodeAt(i) > 128) {
			strlen += 2;
			if (strlen >= len) {
				return s.substring(0, s.length - 1) + '...';
			}
		} else {
			strlen += 1;
			if (strlen >= len) {
				return s.substring(0, s.length - 2) + '...';
			}
		}
	}
	return s;
}