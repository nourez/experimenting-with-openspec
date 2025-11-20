<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import TagInput from "$lib/components/tags/TagInput.svelte";
    import type { Tag } from "$lib/data/newTasks";

    const dispatch = createEventDispatcher<{
        cancel: void;
        create: { title: string; blocked: boolean; tags: Tag[] };
    }>();

    let title = "";
    let blocked = false;
    let selectedTags: Tag[] = [];

    function handleCancel() {
        dispatch("cancel");
    }

    function handleSubmit() {
        if (!title.trim()) return;
        dispatch("create", { title, blocked, tags: selectedTags });
        // Reset for next time (though component usually unmounts)
        title = "";
        blocked = false;
        selectedTags = [];
    }

    // No longer using an event handler for tags
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="backdrop" on:click|self={handleCancel}>
    <div
        class="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
    >
        <h2 id="dialog-title">Create New Task</h2>

        <form on:submit|preventDefault={handleSubmit}>
            <div class="form-group">
                <label for="task-title">Title</label>
                <!-- svelte-ignore a11y_autofocus -->
                <input
                    id="task-title"
                    type="text"
                    bind:value={title}
                    placeholder="What needs to be done?"
                    required
                    autofocus
                />
            </div>

            <div class="form-group">
                <label for="task-tags">Tags</label>
                <TagInput bind:selectedTags />
            </div>

            <div class="form-group checkbox-group">
                <input
                    id="task-blocked"
                    type="checkbox"
                    bind:checked={blocked}
                />
                <label for="task-blocked">Mark as blocked</label>
            </div>

            <div class="actions">
                <button
                    type="button"
                    class="btn-secondary"
                    on:click={handleCancel}>Cancel</button
                >
                <button type="submit" class="btn-primary">Create Task</button>
            </div>
        </form>
    </div>
</div>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    .dialog {
        background: #0f172a; /* Slate 900 */
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.75rem;
        padding: 1.5rem;
        width: 100%;
        max-width: 480px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        color: #f8fafc;
    }

    h2 {
        margin: 0 0 1.5rem;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .form-group {
        margin-bottom: 1.25rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        color: #cbd5f5;
    }

    input[type="text"] {
        width: 100%;
        padding: 0.625rem;
        border-radius: 0.375rem;
        border: 1px solid #334155;
        background: #1e293b;
        color: #fff;
        font-size: 1rem;
    }

    input[type="text"]:focus {
        outline: none;
        border-color: #60a5fa;
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .checkbox-group label {
        margin-bottom: 0;
        cursor: pointer;
    }

    .checkbox-group input {
        cursor: pointer;
        width: 1rem;
        height: 1rem;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
        margin-top: 2rem;
    }

    button {
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        font-weight: 500;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
    }

    .btn-secondary {
        background: transparent;
        color: #cbd5f5;
        border: 1px solid #334155;
    }

    .btn-secondary:hover {
        background: #1e293b;
        color: #fff;
    }

    .btn-primary {
        background: #2563eb;
        color: #fff;
    }

    .btn-primary:hover {
        background: #1d4ed8;
    }
</style>
