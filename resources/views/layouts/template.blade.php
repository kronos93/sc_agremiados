<head><link href="./css/app.css" rel="stylesheet"></head>Html Webpack Plugin:
<pre>
  Error: Child compilation failed:
  Module build failed: Error: C:\xampp\htdocs\sc_agremiados\resources\assets\template\partials\main.sidebar.pug:10
  img is a self closing element: <img/> but contains nested content.
  
  - index.js:32 makeError
    [sc_agremiados]/[pug-error]/index.js:32:13
  
  - index.js:92 Object.error
    [sc_agremiados]/[pug-code-gen]/index.js:92:15
  
  - index.js:559 Object.visitTag
    [sc_agremiados]/[pug-code-gen]/index.js:559:14
  
  - index.js:307 Object.visitNode
    [sc_agremiados]/[pug-code-gen]/index.js:307:37
  
  - index.js:296 Object.visit
    [sc_agremiados]/[pug-code-gen]/index.js:296:10
  
  - index.js:379 Object.visitBlock
    [sc_agremiados]/[pug-code-gen]/index.js:379:12
  
  - index.js:307 Object.visitNode
    [sc_agremiados]/[pug-code-gen]/index.js:307:37
  
  - index.js:296 Object.visit
    [sc_agremiados]/[pug-code-gen]/index.js:296:10
  
  - index.js:109 Object.compile
    [sc_agremiados]/[pug-code-gen]/index.js:109:10
  
  - index.js:32 generateCode
    [sc_agremiados]/[pug-code-gen]/index.js:32:39
  
  - index.js:176 compileBody
    [sc_agremiados]/[pug]/lib/index.js:176:12
  
  - index.js:291 Object.exports.compileClientWithDependenciesTracked
    [sc_agremiados]/[pug]/lib/index.js:291:16
  
  - index.js:337 Object.exports.compileClient
    [sc_agremiados]/[pug]/lib/index.js:337:18
  
  - index.js:136 run
    [sc_agremiados]/[pug-loader]/index.js:136:23
  
  
  - Error: C:\xampp\htdocs\sc_agremiados\resources\assets\template\partials\main.sidebar.pug:10
  
  - img is a self closing element: <img/> but contains nested content.
  
  - compiler.js:76 
    [sc_agremiados]/[html-webpack-plugin]/lib/compiler.js:76:16
  
  - Compiler.js:304 compile
    [sc_agremiados]/[webpack]/lib/Compiler.js:304:11
  
  - Compiler.js:520 applyPluginsAsync.err
    [sc_agremiados]/[webpack]/lib/Compiler.js:520:14
  
  - Tapable.js:202 next
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:202:11
  
  - CachePlugin.js:62 Compiler.<anonymous>
    [sc_agremiados]/[webpack]/lib/CachePlugin.js:62:5
  
  - Tapable.js:206 Compiler.applyPluginsAsyncSeries
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:206:13
  
  - Compiler.js:517 compilation.seal.err
    [sc_agremiados]/[webpack]/lib/Compiler.js:517:11
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:671 self.applyPluginsAsync.err
    [sc_agremiados]/[webpack]/lib/Compilation.js:671:19
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:662 self.applyPluginsAsync.err
    [sc_agremiados]/[webpack]/lib/Compilation.js:662:11
  
  - Tapable.js:202 next
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:202:11
  
  - index.js:244 Compilation.<anonymous>
    [sc_agremiados]/[uglifyjs-webpack-plugin]/dist/index.js:244:6
  
  - Tapable.js:206 Compilation.applyPluginsAsyncSeries
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:206:13
  
  - Compilation.js:657 self.applyPluginsAsync.err
    [sc_agremiados]/[webpack]/lib/Compilation.js:657:10
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:653 sealPart2
    [sc_agremiados]/[webpack]/lib/Compilation.js:653:9
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:596 Compilation.seal
    [sc_agremiados]/[webpack]/lib/Compilation.js:596:8
  
  - Compiler.js:514 applyPluginsParallel.err
    [sc_agremiados]/[webpack]/lib/Compiler.js:514:17
  
  - Tapable.js:289 
    [sc_agremiados]/[webpack]/[tapable]/lib/Tapable.js:289:11
  
  - Compilation.js:498 _addModuleChain
    [sc_agremiados]/[webpack]/lib/Compilation.js:498:11
  
  - Compilation.js:468 processModuleDependencies.err
    [sc_agremiados]/[webpack]/lib/Compilation.js:468:14
  
  - next_tick.js:73 _combinedTickCallback
    internal/process/next_tick.js:73:7
  
  - next_tick.js:104 process._tickCallback
    internal/process/next_tick.js:104:9
  
</pre><script type="text/javascript" src="./js/vendor.bundle.js"></script><script type="text/javascript" src="./js/app.bundle.js"></script>