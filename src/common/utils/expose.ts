import { getCurrentInstance } from 'vue';

export const useExpose = (func: Record<string, any>) => {
	const instance = getCurrentInstance();
	if (instance) {
		Object.assign(instance.proxy, func);
	}
}