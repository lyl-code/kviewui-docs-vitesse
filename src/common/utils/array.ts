/**
 * @zh 获取数组维度
 * @param {Array} arr 操作的数组
 * @return {Number} num 数组的维度
 */
export const getLevel = (arr: Array<any>): number => {
	let list: Array<any> = [];
	let num: number = 0;
	for (let i: number = 0; i < arr.length; i++) {
		if (arr[i] instanceof Array) {
			for (let j: number = 0; j < arr[i].length; j++) {
				list.push(arr[i][j]);
			}
		}
	}
	if (list.length) {
		num = 1;
		num += getLevel(list);
	}
	return num;
}

/**
 * @zh 数组冒泡排序
 * @param {Array} arr 操作的数组
 * @return {void}
 */
export const sort = (arr: number[] | string[]): void => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

/**
 * @zh 数组切片
 * @param {any[]} arr 原数组
 * @param {number} chunkSize 单个切片长度
 * @return {any[][]}
 */
export const sliceIntoChunks = (arr: any[], chunkSize: number): any[][] => {
	const res: any[] = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk: any[] = arr.slice(i, i + chunkSize);
		res.push(chunk);
	}
	return res;
}