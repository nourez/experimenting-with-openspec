## ADDED Requirements

### Requirement: Task Creation
The system MUST allow users to define and persist new tasks so that work can be tracked.

#### Scenario: Initiate task creation
- **GIVEN** the user is on any page with the navigation bar
- **WHEN** the user clicks the "Create Task" button
- **THEN** a task creation dialog is displayed overlaying the current view

#### Scenario: Successfully create a task
- **GIVEN** the task creation dialog is open
- **WHEN** the user enters a valid task title
- **AND** optionally toggles the "Blocked" status
- **AND** optionally selects existing tags or creates new tags
- **AND** clicks "Create"
- **THEN** the dialog closes
- **AND** the new task with its selected tags is added to the top of the task list

#### Scenario: Cancel task creation
- **GIVEN** the task creation dialog is open
- **WHEN** the user clicks "Cancel"
- **THEN** the dialog closes without creating a task

#### Scenario: Add existing tags to task
- **GIVEN** the task creation dialog is open
- **WHEN** the user clicks the tag selection field
- **AND** selects one or more existing tags from the dropdown
- **THEN** the selected tags appear as pills/labels in the form
- **AND** they will be associated with the created task

#### Scenario: Create new tag during task creation
- **GIVEN** the task creation dialog is open
- **WHEN** the user types a non-existent tag name in the tag field
- **AND** confirms creation (or tabs/commits the field)
- **THEN** a new tag is created with the entered name
- **AND** the new tag is associated with the task

#### Scenario: Remove tag during task creation
- **GIVEN** one or more tags are selected in the task creation dialog
- **WHEN** the user clicks the 'x' on a tag pill/label
- **THEN** the tag is removed from the selection
- **AND** it will not be associated with the created task