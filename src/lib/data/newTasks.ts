export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';

export type NewTask = {
  id: string;
  title: string;
  status: TaskStatus;
  blocked: boolean;
  createdAt: string;
};

export const mockNewTasks: NewTask[] = [
  {
    id: 'nt-101',
    title: 'Define sprint goals',
    status: 'todo',
    blocked: false,
    createdAt: '2024-06-01T09:05:00Z'
  },
  {
    id: 'nt-102',
    title: 'Outline stakeholder kickoff deck',
    status: 'in-progress',
    blocked: true,
    createdAt: '2024-06-02T13:42:00Z'
  },
  {
    id: 'nt-103',
    title: 'Draft engineering handoff notes',
    status: 'review',
    blocked: false,
    createdAt: '2024-06-03T17:15:00Z'
  }
];
