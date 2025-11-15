# landing-page Specification

## Purpose
Define the user-facing landing page experience so visitors immediately see core navigation and the latest tasks when opening TaskPulse.
## Requirements
### Requirement: Landing Page Navigation
The TaskPulse landing page MUST render a navbar pinned to the top of the viewport so users can identify the experience and access future navigation links.

#### Scenario: Navbar pinned at page load
- **GIVEN** a user lands on the TaskPulse root route
- **THEN** a navbar labeled "TaskPulse" is displayed at the top of the page
- **AND** the navbar stays visible while scrolling the landing page content

### Requirement: New Tasks Overview
The landing page MUST highlight the newest tasks so users can quickly assess what was recently created and whether blockers exist.

#### Scenario: New tasks are displayed with status and blocker flag
- **GIVEN** there are three or more tasks marked as newly created
- **WHEN** the landing page loads
- **THEN** a "New Tasks" section lists each task title alongside its current status and whether it is blocked

#### Scenario: Empty state when no new tasks exist
- **GIVEN** there are no newly created tasks available
- **WHEN** the landing page loads
- **THEN** the "New Tasks" section displays copy that communicates there are no new tasks yet
