export const getDayOfWeek = (date: string): boolean | number => {
	const dateStr: any = new Date(date);
	
	if (dateStr == 'Invalid Date') {
		console.warn('utils/date debug：日期格式错误');
		return false;
	}
	
	return dateStr.getDay();
}