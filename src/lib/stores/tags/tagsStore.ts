import { writable } from "svelte/store";

export interface Tag {
  id: string;
  name: string;
  color?: string;
}

function createTagsStore() {
  const { subscribe, update } = writable<Tag[]>([
    { id: "tag-1", name: "urgent", color: "#ef4444" },
    { id: "tag-2", name: "feature", color: "#3b82f6" },
    { id: "tag-3", name: "bug", color: "#f59e0b" },
    { id: "tag-4", name: "documentation", color: "#8b5cf6" },
  ]);

  return {
    subscribe,
    addTag: (name: string, color?: string) => {
      const newTag: Tag = {
        id: `tag-${Date.now()}`,
        name,
        color: color || "#6b7280", // Default gray color
      };

      update((tags) => [...tags, newTag]);
      return newTag;
    },
    findByName: (name: string) => {
      let found: Tag | undefined;
      const unsubscribe = subscribe((tags) => {
        found = tags.find(
          (tag) => tag.name.toLowerCase() === name.toLowerCase(),
        );
      });
      unsubscribe();
      return found;
    },
  };
}

export const tagsStore = createTagsStore();
