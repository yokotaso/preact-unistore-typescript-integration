module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry",
          "corejs": "2",
        }
      ],
      "@babel/typescript",
      [
        "@babel/preset-react", 
        { "pragma":"h" }
      ]
    ];
    const plugins = [
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
    ];
  
    return {
      presets,
      plugins
    };
  }