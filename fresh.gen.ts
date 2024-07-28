// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $ChooseLang from "./islands/ChooseLang.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/ChooseLang.tsx": $ChooseLang,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
