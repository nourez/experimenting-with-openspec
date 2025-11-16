# Workspace cleanup

If legacy Node or Svelte build artifacts get committed again, run the helper script to purge them before staging your changes:

```bash
scripts/purge-artifacts.sh
```

The script removes `node_modules`, `.svelte-kit`, `build`, `dist`, and `.deno` directories from the repo root and any nested workspaces. This keeps the repo small and prevents huge dependency trees from being re-committed after updating `.gitignore`.
