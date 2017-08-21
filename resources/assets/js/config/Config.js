class Config {

    constructor() {

    }
    url() {
        if (window.location.hostname === '192.168.0.4') {
            return window.location.origin + '/sc_agremiados/public/';
        } else if (window.location.hostname === 'scagremiados.local') {
            return window.location.origin + '/';
        }

    }
}
export default Config;