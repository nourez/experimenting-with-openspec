# Change: Add Task Creation

## Why
Currently, the application is read-only, displaying only mock tasks. To enable actual task tracking, users need a way to define and add new tasks to the system.

## What Changes
- Add a "Create Task" button to the Navbar.
- Create a task creation form (modal or inline) allowing entry of:
    - Task Title
    - Blocker status (Yes/No)
    - Tags (selectable from existing tags or create new ones)
- Update the application state to support adding tasks dynamically with tags.

## Impact
- **Specs**:
    - `landing-page`: Update to include the "Create Task" button in the navigation.
    - `task-management` (New): Define requirements for creating tasks.
- **Code**:
    - Update `Navbar.svelte`
    - Create `TaskCreationModal.svelte` (or similar)
    - Update `newTasksStore.ts` to support writable actions.