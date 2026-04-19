module.exports = {
  apps : [{
    name: "open-lovable",
    script: "node",
    args: "node_modules/next/dist/bin/next start",
    env: {
      NODE_ENV: "production",
    }
  }]
};
