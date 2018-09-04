/*
  
  Export: A CoverBuilder plug-in

  A tool to export multiple PDFs and JPGs

  https://github.com/CoverBuilder/Export-Plugin

  Bruno Herfst 2018

*/

#targetengine "ExportPlugin" 

(function() {

    var ExportPlugin = {
        version: 1.0
    };

    //--------------------------
    // Load Modules
    //--------------------------
    #include 'node_modules/@extendscript/modules.init/init.js'

    //--------------------------
    // Load Application
    //--------------------------
    #include 'src/plugin.export.js'

    return Endpapers;

})();
