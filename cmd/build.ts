import { build } from "https://deno.land/x/dnt/mod.ts";

await build({
  cjs: false, // node-fetch requirement
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
    custom: [
      {
        package: {
          name: "node-fetch",
          version: "~3.1.0",
        },
        globalNames: [
          {
            // for the `fetch` global...
            name: "fetch",
            // use the default export of node-fetch
            exportName: "default",
          },
        ],
      },
      // Required for btoa polyfill in node14

      {
        package: { name: "btoa", version: "1.2.1" },
        globalNames: [{ name: "btoa", exportName: "default" }],
      },
    ],
  },
  package: {
    // package.json properties
    name: "@upstash/kafka",
    version: Deno.args[0],
    description: "An HTTP/REST based Kafka client built on top of Upstash REST API.",
    license: "MIT",
    keywords: ["upstash", "kafka", "serverless", "deno", "rest", "api"],
    engines: {
      node: ">=10"
    },
    repository: {
      type: "git",
      url: "git+https://github.com/upstash/upstash-kafka.git",
    },
    bugs: {
      url: "https://github.com/upstash/upstash-kafka/issues",
    },
    homepage: "https://github.com/upstash/upstash-kafka#readme",
    directories: {
      example: "example",
    },
    // Required for btoa polyfill in node14
    devDependencies: {
      "@types/btoa": "1.2.3",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
