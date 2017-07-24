import 'jquery-serializeobject';
import Config from './config/Config';
let config = new Config();

if ($('#dt-users').length > 0) {
    (async() => {
        await
        import ( /* webpackChunkName: "DtConfig" */ './config/DtConfig')
        .catch(error => { console.log("Sucedio un error al importar el módulo de DataTables"); });
        await
        import ( /* webpackChunkName: "dt-users" */ './datatables/users')
        .catch(error => { console.log("Sucedio un error al importar el módulo de DataTables"); });
    })();
}