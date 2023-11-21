/** @type {import('next').NextConfig} */
const nextConfig = {
    /* experimental: {
        serverActions: true,
      }, */
    /* module: {
        rules: [
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "video"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            sources: {
                                list: [
                                    {
                                        tag: "source",
                                        attribute: "src",
                                        type: "src"
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                loaders: [{
                    test: /\.html$/,
                    loader: 'html-loader?attrs[]=video:src'
                }, {
                    test: /\.mp4$/,
                    loader: 'url?limit=10000&mimetype=video/mp4'
                }]
            }
        ]
    }  */
    /* webpack: (config, { isServer, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
    
        config.plugins.push(new webpack.EnvironmentPlugin(process.env));
        config.optimization.minimize = false;
    
        config.module.rules.push(
          {
            test: /\.svg$/,
            issuer: {
              test: /\.(js|ts)x?$/,
            },
            use: ["@svgr/webpack"],
          },
          {
            test: /\.(mp4|webm|ogg|swf|ogv)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                    publicPath: `./.next/static/videos/`,
                    outputPath: `${isServer ? "../" : ""}static/videos/`,
                    name: "[name]-[hash].[ext]",
                },
              },
            ],
          }
        );
    
        // Important: return the modified config
        return config;
      },
    }; */
}

module.exports = nextConfig
