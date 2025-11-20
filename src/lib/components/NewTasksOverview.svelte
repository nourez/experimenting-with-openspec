<script lang="ts">
    import type { NewTask } from "$lib/data/newTasks";

    export let tasks: NewTask[] = [];

    const statusCopy: Record<NewTask["status"], string> = {
        todo: "To Do",
        "in-progress": "In Progress",
        review: "In Review",
        done: "Done",
    };

    const statusTone: Record<NewTask["status"], string> = {
        todo: "status status--todo",
        "in-progress": "status status--progress",
        review: "status status--review",
        done: "status status--done",
    };
</script>

<section class="overview" aria-labelledby="new-tasks-heading">
    <header class="overview__header">
        <div>
            <p class="overview__eyebrow">Recently added</p>
            <h2 id="new-tasks-heading">New Tasks</h2>
        </div>
        <span class="overview__count" aria-live="polite">
            {tasks.length}
            {tasks.length === 1 ? "Task" : "Tasks"}
        </span>
    </header>

    {#if tasks.length > 0}
        <ul class="overview__list">
            {#each tasks as task (task.id)}
                <li class="task">
                    <div class="task__title-block">
                        <p class="task__title">{task.title}</p>
                        {#if task.tags && task.tags.length > 0}
                            <div class="task__tags">
                                {#each task.tags as tag}
                                    <span
                                        class="task__tag"
                                        style="--tag-color: {tag.color ||
                                            '#6b7280'}">{tag.name}</span
                                    >
                                {/each}
                            </div>
                        {/if}
                        <p class="task__meta">
                            Added {new Date(task.createdAt).toLocaleDateString(
                                undefined,
                                {
                                    month: "short",
                                    day: "numeric",
                                },
                            )}
                        </p>
                    </div>
                    <div class="task__status-block">
                        <span class={statusTone[task.status]}
                            >{statusCopy[task.status]}</span
                        >
                        {#if task.blocked}
                            <span
                                class="task__blocked"
                                data-testid="blocked-pill">Blocked</span
                            >
                        {:else}
                            <span class="task__clear">Unblocked</span>
                        {/if}
                    </div>
                </li>
            {/each}
        </ul>
    {:else}
        <div class="overview__empty" data-testid="new-tasks-empty-state">
            <p>No new tasks yet.</p>
            <p class="overview__empty-sub">
                Create a task to see it appear here.
            </p>
        </div>
    {/if}
</section>

<style>
    .overview {
        background: #0f172a;
        border: 1px solid rgba(148, 163, 184, 0.15);
        border-radius: 1rem;
        padding: 1.5rem;
        color: #e2e8f0;
        box-shadow: 0 10px 35px rgba(15, 23, 42, 0.5);
    }

    .overview__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .overview__eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 0.75rem;
        color: #94a3b8;
        margin-bottom: 0.35rem;
    }

    #new-tasks-heading {
        margin: 0;
        font-size: 1.45rem;
    }

    .overview__count {
        font-size: 0.9rem;
        color: #cbd5f5;
    }

    .overview__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .task {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    }

    .task:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .task__title {
        font-weight: 600;
        margin: 0;
    }

    .task__meta {
        margin: 0.25rem 0 0;
        font-size: 0.85rem;
        color: #94a3b8;
    }

    .task__status-block {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .status {
        font-size: 0.8rem;
        padding: 0.2rem 0.65rem;
        border-radius: 9999px;
        color: #0f172a;
        font-weight: 600;
    }

    .status--todo {
        background: #fbbf24;
    }

    .status--progress {
        background: #38bdf8;
    }

    .status--review {
        background: #a855f7;
    }

    .status--done {
        background: #34d399;
    }

    .task__blocked {
        border-radius: 9999px;
        padding: 0.2rem 0.65rem;
        background: rgba(248, 113, 113, 0.2);
        color: #fecaca;
        font-size: 0.8rem;
    }

    .task__clear {
        color: #94a3b8;
        font-size: 0.8rem;
    }

    .overview__empty {
        border: 1px dashed rgba(148, 163, 184, 0.4);
        border-radius: 0.75rem;
        padding: 1.25rem;
        text-align: center;
        color: #94a3b8;
    }

    .overview__empty-sub {
        margin-top: 0.25rem;
        font-size: 0.9rem;
    }

    .task__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        margin: 0.5rem 0;
    }

    .task__tag {
        display: inline-block;
        padding: 0.125rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid var(--tag-color);
        color: var(--tag-color);
    }

    @media (max-width: 640px) {
        .task {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
