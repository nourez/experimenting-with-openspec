export type TaskStatus = "todo" | "in-progress" | "review" | "done";

export interface Tag {
  id: string;
  name: string;
  color?: string;
}

export type NewTask = {
  id: string;
  title: string;
  status: TaskStatus;
  blocked: boolean;
  createdAt: string;
  tags: Tag[];
};

export const mockNewTasks: NewTask[] = [
  {
    id: "nt-101",
    title: "Define sprint goals",
    status: "todo",
    blocked: false,
    createdAt: "2024-06-01T09:05:00Z",
    tags: [{ id: "tag-2", name: "feature", color: "#3b82f6" }],
  },
  {
    id: "nt-102",
    title: "Outline stakeholder kickoff deck",
    status: "in-progress",
    blocked: true,
    createdAt: "2024-06-02T13:42:00Z",
    tags: [
      { id: "tag-1", name: "urgent", color: "#ef4444" },
      { id: "tag-2", name: "feature", color: "#3b82f6" },
    ],
  },
  {
    id: "nt-103",
    title: "Draft engineering handoff notes",
    status: "review",
    blocked: false,
    createdAt: "2024-06-03T17:15:00Z",
    tags: [{ id: "tag-4", name: "documentation", color: "#8b5cf6" }],
  },
];
