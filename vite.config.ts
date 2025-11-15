import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(() => {
  const isVitest = process.env.VITEST === "true";

  return {
    plugins: [sveltekit()],
    resolve: isVitest
      ? {
          conditions: ["browser"],
        }
      : undefined,
    test: {
      include: ["tests/**/*.{test,spec}.{ts,js}"],
      environment: "jsdom",
    },
  };
});
