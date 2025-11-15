# Proposal: Add Landing Page Overview

## Overview
Create the initial TaskPulse landing page so users immediately see navigation and the newest tasks without navigating deeper into the app.

## Problem
The project currently boots into a blank slate, so users have no entry point or awareness of incoming work items. We need a basic layout that orients users and previews the most recent tasks when they arrive.

## Goals
- Render a navbar at the top of the landing page with the project name and affordances for future navigation
- Show a "New Tasks" overview that lists the most recent tasks with status and blocker indicators
- Keep the implementation intentionally simple to unblock subsequent UI iterations

## Non-Goals
- Implement task creation or editing flows
- Add filtering, pagination, or search for the overview list
- Persist data beyond mock/in-memory sources

## Risks & Open Questions
- Need a lightweight strategy for sourcing sample "new tasks" data; start with local mock JSON until real data source is defined
- Ensure layout leaves room for future epic/task views without full redesign
