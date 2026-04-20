module.exports = {
  apps : [
    {
      name: "open-lovable",
      script: "node",
      args: "node_modules/next/dist/bin/next start",
      env: {
        NODE_ENV: "production",
      }
    },
    {
      name: "web-all",
      script: "node",
      args: "node_modules/vite/bin/vite.js --host",
      cwd: "web_a/all",
      env: {
        NODE_ENV: "development",
      }
    }
  ]
};
