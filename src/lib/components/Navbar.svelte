<header class="navbar" aria-label="TaskPulse primary navigation">
    <div class="navbar__content">
        <a class="navbar__brand" href="/">TaskPulse</a>
        <nav aria-label="Primary links">
            <ul class="navbar__links">
                <li><a href="/" aria-current="page">Overview</a></li>
                <li><a href="/epics">Epics</a></li>
                <li><a href="/tasks">Tasks</a></li>
            </ul>
        </nav>
    </div>
</header>

<style>
    .navbar {
        position: sticky;
        top: 0;
        z-index: 10;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(10, 12, 28, 0.9);
        backdrop-filter: blur(8px);
        width: 100%;
    }

    .navbar__content {
        margin: 0 auto;
        padding: 0.75rem 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 960px;
    }

    .navbar__brand {
        font-size: 1.2rem;
        font-weight: 600;
        color: #f1f5f9;
        text-decoration: none;
    }

    .navbar__links {
        list-style: none;
        display: flex;
        gap: 0.75rem;
        margin: 0;
        padding: 0;
    }

    .navbar__links a {
        color: #cbd5f5;
        text-decoration: none;
        font-size: 0.95rem;
        padding: 0.35rem 0.55rem;
        border-radius: 0.35rem;
    }

    .navbar__links a[aria-current="page"] {
        background: rgba(59, 130, 246, 0.15);
        color: #f8fafc;
    }

    .navbar__links a:hover {
        background: rgba(148, 163, 184, 0.2);
    }
</style>
