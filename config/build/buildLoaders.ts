import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              }
            }
          ]
        }
      }
    }],
  };


  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    svgLoader,
    typescriptLoader,
    cssLoader,
  ]
}
