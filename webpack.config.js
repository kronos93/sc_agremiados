let config = function(env) {
    let publicPath = "http://scagremiados.local/";
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
    //Funcion nativa de NODEJS
    const { resolve } = require('path');
    const webpack = require('webpack');
    const CleanWebpackPlugin = require('clean-webpack-plugin');
    const isProduction = (env.production === 'true') ? true : false;
    /*
     * Configuración para cargar estilos css
     */
    // Crear multiple instancias
    const extractCSS = new ExtractTextPlugin({ filename: 'css/[name].css' });
    const extractSASS = new ExtractTextPlugin({ filename: 'css/[name].css' });
    const ProdConfigCss = extractCSS.extract({
        fallback: "style-loader",
        use: ["css-loader"]
    });
    const DevConfigCss = ['style-loader', 'css-loader'];
    const useConfigCss = (isProduction) ? ProdConfigCss : DevConfigCss;
    const ProdConfigSass = extractSASS.extract({
        fallback: "style-loader",
        use: ["css-loader", 'sass-loader', ]
    });
    const DevConfigSass = ['style-loader', 'css-loader', 'sass-loader'];
    const useConfigSass = (isProduction) ? ProdConfigSass : DevConfigSass;
    /*
     **Archivos de configuración de gulp
     */
    /* let GulpWebpackSplitHtmlPlugin = require('./build/plugins/GulpWebpackSplitHtmlPlugin'); */

    return {
        context: resolve(__dirname, 'resources/assets'), //Contexto de entrada de archivos
        externals: {
            jquery: 'jQuery'
        },
        entry: {
            vendor: [
                'bootstrap/dist/js/bootstrap.js', 'admin-lte/dist/js/app.js'
            ],
            app: [

                './sass/app.scss',
            ],

        },
        output: {
            filename: 'js/[name].bundle.js', //Archivo o carpeta + nombre del archivo de salida
            chunkFilename: 'js/[name].bundle.js',
            path: resolve(__dirname, 'public'),
            publicPath: publicPath,
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: useConfigSass,
                },

                //imagenes con file loader
                {
                    test: /\.(png|jpe?g|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: "img/[name].[ext]",
                        publicPath: publicPath,
                    }
                },
                //fonts con file loader
                {
                    test: /\.(eot|ttf|woff|woff2|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: "fonts/[name].[ext]",
                        publicPath: publicPath,
                    }
                },
                //Configuración especial para datatables y archivos.js
                {
                    test: /datatables\.net.*\.js$/,
                    use: [{
                        loader: 'imports-loader?define=>false'
                    }]
                }
            ]
        },
        plugins: [
            extractCSS,
            extractSASS,
            new HtmlWebpackPlugin({
                template: './template/template.html',
                title: "<?= $title ?>",
                filename: '../resources/views/templates/template.blade.php',
            }),
            new CleanWebpackPlugin('./public/css/*'),
            new CleanWebpackPlugin('./public/fonts/*'),
            new CleanWebpackPlugin('./public/js/*'),
        ],
        stats: (isProduction) ? 'errors-only' : 'detailed',
    };

};
//Exportar módulos nativos, sintaxis de NodeJs
module.exports = config;
//Investigar resolve url-loader