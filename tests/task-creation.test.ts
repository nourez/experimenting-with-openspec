import "@testing-library/jest-dom/vitest";
import {
  render,
  screen,
  within,
  waitFor,
  fireEvent,
} from "@testing-library/svelte";
import { describe, expect, it } from "vitest";

import LandingPage from "../src/routes/+page.svelte";

describe("Task Creation", () => {
  it("adds a new task to the list when created via the dialog", async () => {
    render(LandingPage);

    // Open dialog
    // Note: There is a "Create Task" button in the navbar
    const navCreateBtn = screen.getByRole("button", { name: "Create Task" });
    await fireEvent.click(navCreateBtn);

    // Verify dialog is open
    const dialog = screen.getByRole("dialog", { name: "Create New Task" });
    expect(dialog).toBeInTheDocument();

    // Fill form
    const titleInput = screen.getByLabelText("Title");
    await fireEvent.input(titleInput, {
      target: { value: "Integration Test Task" },
    });

    // Toggle blocked status
    const blockedCheckbox = screen.getByLabelText("Mark as blocked");
    await fireEvent.click(blockedCheckbox);

    // Submit
    // The button inside the dialog also says "Create Task"
    const submitBtn = within(dialog).getByRole("button", {
      name: "Create Task",
    });
    await fireEvent.click(submitBtn);

    // Verify dialog closed
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    // Verify task added to list
    expect(screen.getByText("Integration Test Task")).toBeInTheDocument();

    // Verify blocked status (assuming the UI shows a blocked indicator)
    // Based on previous tests, there are elements with data-testid="blocked-pill"
    const newTaskRow = screen.getByText("Integration Test Task").closest("li");
    expect(newTaskRow).not.toBeNull();

    if (newTaskRow) {
      const blockedPill = within(newTaskRow as HTMLElement).getByTestId(
        "blocked-pill",
      );
      expect(blockedPill).toBeInTheDocument();
    }
  });
});
