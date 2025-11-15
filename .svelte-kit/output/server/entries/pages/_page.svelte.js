import { U as ensure_array_like, V as attr_class, W as clsx, X as bind_props, Y as store_get, Z as unsubscribe_stores } from "../../chunks/index2.js";
import "clsx";
import { e as escape_html, f as fallback } from "../../chunks/context.js";
import { r as readable } from "../../chunks/index.js";
function Navbar($$renderer) {
  $$renderer.push(`<header class="navbar svelte-rfuq4y" aria-label="TaskPulse primary navigation"><div class="navbar__content svelte-rfuq4y"><a class="navbar__brand svelte-rfuq4y" href="/">TaskPulse</a> <nav aria-label="Primary links"><ul class="navbar__links svelte-rfuq4y"><li><a href="/" aria-current="page" class="svelte-rfuq4y">Overview</a></li> <li><a href="/epics" class="svelte-rfuq4y">Epics</a></li> <li><a href="/tasks" class="svelte-rfuq4y">Tasks</a></li></ul></nav></div></header>`);
}
function NewTasksOverview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tasks = fallback($$props["tasks"], () => [], true);
    const statusCopy = {
      todo: "To Do",
      "in-progress": "In Progress",
      review: "In Review",
      done: "Done"
    };
    const statusTone = {
      todo: "status status--todo",
      "in-progress": "status status--progress",
      review: "status status--review",
      done: "status status--done"
    };
    $$renderer2.push(`<section class="overview svelte-1xeu7cl" aria-labelledby="new-tasks-heading"><header class="overview__header svelte-1xeu7cl"><div><p class="overview__eyebrow svelte-1xeu7cl">Recently added</p> <h2 id="new-tasks-heading" class="svelte-1xeu7cl">New Tasks</h2></div> <span class="overview__count svelte-1xeu7cl" aria-live="polite">${escape_html(tasks.length)}
            ${escape_html(tasks.length === 1 ? "Task" : "Tasks")}</span></header> `);
    if (tasks.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<ul class="overview__list svelte-1xeu7cl"><!--[-->`);
      const each_array = ensure_array_like(tasks);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let task = each_array[$$index];
        $$renderer2.push(`<li class="task svelte-1xeu7cl"><div class="task__title-block"><p class="task__title svelte-1xeu7cl">${escape_html(task.title)}</p> <p class="task__meta svelte-1xeu7cl">Added ${escape_html(new Date(task.createdAt).toLocaleDateString(void 0, { month: "short", day: "numeric" }))}</p></div> <div class="task__status-block svelte-1xeu7cl"><span${attr_class(clsx(statusTone[task.status]), "svelte-1xeu7cl")}>${escape_html(statusCopy[task.status])}</span> `);
        if (task.blocked) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="task__blocked svelte-1xeu7cl" data-testid="blocked-pill">Blocked</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span class="task__clear svelte-1xeu7cl">Unblocked</span>`);
        }
        $$renderer2.push(`<!--]--></div></li>`);
      }
      $$renderer2.push(`<!--]--></ul>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="overview__empty svelte-1xeu7cl" data-testid="new-tasks-empty-state"><p>No new tasks yet.</p> <p class="overview__empty-sub svelte-1xeu7cl">Create a task to see it appear here.</p></div>`);
    }
    $$renderer2.push(`<!--]--></section>`);
    bind_props($$props, { tasks });
  });
}
const mockNewTasks = [
  {
    id: "nt-101",
    title: "Define sprint goals",
    status: "todo",
    blocked: false,
    createdAt: "2024-06-01T09:05:00Z"
  },
  {
    id: "nt-102",
    title: "Outline stakeholder kickoff deck",
    status: "in-progress",
    blocked: true,
    createdAt: "2024-06-02T13:42:00Z"
  },
  {
    id: "nt-103",
    title: "Draft engineering handoff notes",
    status: "review",
    blocked: false,
    createdAt: "2024-06-03T17:15:00Z"
  }
];
const newTasksStore = readable(mockNewTasks);
function _page($$renderer) {
  var $$store_subs;
  Navbar($$renderer);
  $$renderer.push(`<!----> <main class="page svelte-1uha8ag"><section class="hero"><p class="hero__eyebrow svelte-1uha8ag">Welcome to TaskPulse</p> <h1 class="svelte-1uha8ag">Stay ahead of the newest work.</h1> <p class="hero__copy svelte-1uha8ag">Track the latest tasks, confirm ownership, and clear blockers before
            they slow the team down.</p></section> `);
  NewTasksOverview($$renderer, {
    tasks: store_get($$store_subs ??= {}, "$newTasksStore", newTasksStore)
  });
  $$renderer.push(`<!----></main>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
