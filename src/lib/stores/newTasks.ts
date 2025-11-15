import { readable } from 'svelte/store';

import type { NewTask } from '$lib/data/newTasks';
import { mockNewTasks } from '$lib/data/newTasks';

export const newTasksStore = readable<NewTask[]>(mockNewTasks);
