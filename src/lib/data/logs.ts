import type { SystemLog } from '$lib/types';

export const INITIAL_LOGS: SystemLog[] = [
	{ id: 1, timestamp: '00:01:22', message: 'System Kernel initialized.', type: 'info' },
	{ id: 2, timestamp: '00:01:24', message: 'Neural weights loaded [Vision_V4].', type: 'success' },
	{ id: 3, timestamp: '00:01:45', message: 'Dev modules mounting...', type: 'info' },
	{ id: 4, timestamp: '00:02:10', message: 'Optimization pass complete.', type: 'success' }
];
