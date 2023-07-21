import { defineConfig } from "vite";
import laravel, { refreshPaths } from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            // 👇変更
            refresh: [...refreshPaths],
        }),
    ],
    // 👇追加
    server: {
        hmr: {
            host: "localhost",
        },
    },
});
