import { ICell } from '../types/interfaces';
import { findSum } from './findSum';

export function createPercent(arr: ICell[]): any {
	const sum: number = findSum(arr);

	arr.forEach(el => {
		el.parentRowSum = sum;
		el.percent = Math.round((el.amount * 100) / sum);
	});
}
