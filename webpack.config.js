let config = function(env) {
    let publicPath = "http://192.168.0.4/sc_agremiados/public/";
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
    const OfflinePlugin = require("offline-plugin");
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
    let GulpWebpackSplitHtmlPlugin = require('./resources/assets/js/build/plugins/GulpWebpackSplitHtmlPlugin');

    return {
        context: resolve(__dirname, 'resources/assets'), //Contexto de entrada de archivos
        externals: {
            jquery: 'jQuery'
        },
        entry: {
            vendor: [
                'bootstrap/dist/js/bootstrap.js', 'admin-lte/dist/js/app.js', 'moment',
            ],
            app: [
                './sass/app.scss',
                './js/app.js',
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
                {
                    test: /\.pug$/,
                    loader: 'pug-loader'
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

            // new HtmlWebpackPlugin({
            //     template: './template/template.html',
            //     title: "<?= $title ?? 'App' ?>",
            //     filename: '../resources/views/templates/template.blade.php',
            // }),
            new HtmlWebpackPlugin({
                template: './template/app.pug',
                filename: '../resources/views/templates/template.blade.php',
            }),
            new FaviconsWebpackPlugin({
                'logo': './icon.png',
                'prefix': 'icons-[hash]/',
                // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
                'background': "#4DB7BC",
                // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
                'title': 'Sistema de control de agremiados',
            }),

            //Exporta módulos compartidos por entrada
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
            }),
            new CleanWebpackPlugin('./public/appcache/*'),
            new CleanWebpackPlugin('./public/css/*'),
            new CleanWebpackPlugin('./public/icons/*'),
            new CleanWebpackPlugin('./public/fonts/*'),
            new CleanWebpackPlugin('./public/js/*'),
            new GulpWebpackSplitHtmlPlugin(),
            // new OfflinePlugin({
            //     caches: 'all'
            // }),
        ],
        stats: (isProduction) ? 'errors-only' : 'detailed',
    };

};
//Exportar módulos nativos, sintaxis de NodeJs
module.exports = config;
//Investigar resolve url-loader