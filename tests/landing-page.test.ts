import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";

import LandingPage from "../src/routes/+page.svelte";
import NewTasksOverview from "../src/lib/components/NewTasksOverview.svelte";
import { mockNewTasks, type NewTask } from "../src/lib/data/newTasks";

const statusCopy: Record<NewTask["status"], string> = {
  todo: "To Do",
  "in-progress": "In Progress",
  review: "In Review",
  done: "Done",
};

describe("Landing page overview", () => {
  it("renders the navbar and the new tasks overview list", () => {
    render(LandingPage);

    expect(
      screen.getByRole("banner", { name: /taskpulse primary navigation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /new tasks/i }),
    ).toBeInTheDocument();

    const overviewRegion = screen.getByRole("region", { name: /new tasks/i });
    const overview = within(overviewRegion);
    const taskItems = overview.getAllByRole("listitem");
    expect(taskItems.length).toBe(mockNewTasks.length);

    mockNewTasks.forEach((task) => {
      expect(overview.getByText(task.title)).toBeInTheDocument();
      expect(overview.getByText(statusCopy[task.status])).toBeInTheDocument();
    });

    expect(
      overview.getAllByTestId("blocked-pill").length,
    ).toBeGreaterThanOrEqual(1);
  });
});

describe("NewTasksOverview component", () => {
  it("shows the empty state copy when no tasks exist", () => {
    const emptyTasks: NewTask[] = [];
    const { getByTestId } = render(NewTasksOverview, { tasks: emptyTasks });

    expect(getByTestId("new-tasks-empty-state")).toHaveTextContent(
      "No new tasks yet.",
    );
  });
});
