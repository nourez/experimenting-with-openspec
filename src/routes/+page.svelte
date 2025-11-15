<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import NewTasksOverview from "$lib/components/NewTasksOverview.svelte";
    import { newTasksStore } from "$lib/stores/newTasks";
</script>

<Navbar />

<main class="page">
    <section class="hero">
        <p class="hero__eyebrow">Welcome to TaskPulse</p>
        <h1>Stay ahead of the newest work.</h1>
        <p class="hero__copy">
            Track the latest tasks, confirm ownership, and clear blockers before
            they slow the team down.
        </p>
    </section>

    <NewTasksOverview tasks={$newTasksStore} />
</main>

<style>
    :global(body) {
        margin: 0;
        font-family:
            "Inter",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        background:
            radial-gradient(
                circle at top,
                rgba(37, 99, 235, 0.25),
                transparent 45%
            ),
            #020617;
        min-height: 100vh;
        color: #f8fafc;
    }

    :global(*) {
        box-sizing: border-box;
    }

    .page {
        padding: 2rem 1.25rem 3rem;
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .hero__eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #93c5fd;
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
    }

    h1 {
        font-size: clamp(2rem, 4vw, 3rem);
        margin: 0 0 0.75rem;
    }

    .hero__copy {
        margin: 0;
        max-width: 48ch;
        color: #cbd5f5;
        line-height: 1.5;
    }
</style>
