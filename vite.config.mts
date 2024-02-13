import { defineConfig } from 'npm:vite';
import viteDeno from 'https://deno.land/x/vite_deno_plugin/mod.ts';

export default defineConfig({
  plugins: [viteDeno({})],
});
