/**
 * @zh 判断是否为渐变色
 * @param {string} color 色值
 * @return {boolean}
 */
export const isLinearGradient = (color: string): boolean => color.indexOf('linear-gradient') > -1;

/**
 * @zh 生成渐变色
 * @param {string} direction 渐变方向或角度
 * @param {Array<string>} colorMap 生成渐变色的色值集合
 * @return {string}
 */
export const makeLinearGradient = (direction: string, colorMap: Array<string>): string => {
	return `linear-gradient(${direction}, ${colorMap.join(',')})`;
}