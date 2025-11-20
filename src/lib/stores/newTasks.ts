import { writable } from "svelte/store";

import type { NewTask, Tag } from "$lib/data/newTasks";
import { mockNewTasks } from "$lib/data/newTasks";

function createNewTasksStore() {
  const { subscribe, update } = writable<NewTask[]>(mockNewTasks);

  return {
    subscribe,
    addTask: (title: string, blocked: boolean, tags: Tag[] = []) => {
      update((tasks) => {
        const newTask: NewTask = {
          id: `nt-${Date.now()}`,
          title,
          status: "todo",
          blocked,
          createdAt: new Date().toISOString(),
          tags,
        };
        // Add to the top of the list as per spec requirements
        return [newTask, ...tasks];
      });
    },
  };
}

export const newTasksStore = createNewTasksStore();
