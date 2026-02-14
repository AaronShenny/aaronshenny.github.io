import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserOrOrgPagesRepo =
  !!repoName && !!owner && repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const productionBasePath = isUserOrOrgPagesRepo
  ? "/"
  : repoName
    ? `/${repoName}/`
    : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : productionBasePath,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
