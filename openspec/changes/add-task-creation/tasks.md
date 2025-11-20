## 1. State Management
- [x] 1.1 Convert `newTasksStore` from readable to writable (or create a custom store) to support adding tasks
- [x] 1.2 Add an `addTask` action/method to the store

## 2. UI Components
- [x] 2.1 Create `TaskCreationDialog.svelte` component
    - Inputs: Title (text), Is Blocked (checkbox/toggle), Tags (multi-select)
    - Actions: Cancel, Create
- [x] 2.2 Add tag management UI to task creation dialog
    - Implement tag selection dropdown
    - Create tag pill components for selected tags
    - Add UI for creating new tags
    - Add removal functionality for selected tags
- [x] 2.2 Update `Navbar.svelte`
    - Add "Create Task" button
    - Style button to stand out (primary action)

## 3. Integration
- [x] 3.1 Wire "Create Task" button in Navbar to open `TaskCreationDialog`
- [x] 3.2 Wire "Create" action in Dialog to call `addTask` with selected tags and close dialog
- [x] 3.3 Verify new task appears in `NewTasksOverview` immediately with associated tags
- [x] 3.4 Implement tag state management for task creation
    - Create store for available tags
    - Add actions for creating new tags
    - Update `addTask` to handle tag associations

## 4. Verification
- [x] 4.1 Write integration test for task creation flow
- [x] 4.2 Add tests for tag selection and creation during task creation
- [x] 4.3 Verify tag association with created tasks