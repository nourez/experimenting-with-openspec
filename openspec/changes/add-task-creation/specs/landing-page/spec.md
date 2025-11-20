## MODIFIED Requirements
### Requirement: Landing Page Navigation
The TaskPulse landing page MUST render a navbar pinned to the top of the viewport so users can identify the experience, access navigation links, and perform primary actions.

#### Scenario: Navbar pinned at page load
- **GIVEN** a user lands on the TaskPulse root route
- **THEN** a navbar labeled "TaskPulse" is displayed at the top of the page
- **AND** the navbar stays visible while scrolling the landing page content

#### Scenario: Primary action availability
- **GIVEN** the navbar is visible
- **THEN** a "Create Task" button is displayed in the navbar