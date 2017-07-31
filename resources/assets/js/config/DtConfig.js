import $ from 'jquery';
import dt from 'datatables.net';
import dt_r from 'datatables.net-responsive';
import dt_buttons from 'datatables.net-buttons';
import dt_button_print from 'datatables.net-buttons/js/buttons.print.js';
import dt_button_html5 from 'datatables.net-buttons/js/buttons.html5.js';
import dt_button_flash from 'datatables.net-buttons/js/buttons.flash.js';
import jszip from 'jszip';
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import moment from 'moment';
moment.locale('es-do');
class DtConfig {
    constructor() {
        dt(window, $);
        dt_r(window, $);
        dt_buttons(window, $);
        dt_button_print(window, $);
        // CommonJS import
        dt_button_html5(window, $, jszip, pdfmake);
        dt_button_flash(window, $);
        this.extend_dt();
    }

    extend_dt() {
        //Preconfiguración de los datatable
        $.extend(true, $.fn.dataTable.defaults, {
            pagingType: "full_numbers",
            language: {
                url: "https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
                decimal: ".",
                thousands: ","
            },
            dom: "<'container-fluid'<'row'<'col-sm-6'B > > >lfrtip",
            buttons: [{
                    text: 'Copiar',
                    extend: 'copyHtml5'
                },
                {
                    text: 'Excel',
                    extend: 'excelHtml5'
                },
                {
                    text: 'PDF',
                    extend: 'pdfHtml5'
                },
            ],
            stateSave: true,
            responsive: true,
            deferRender: true,
            pageLength: 25,
            autoWidth: false,
        });
        //Format date
        //https://datatables.net/plug-ins/dataRender/datetime
        // UMD
        (function(factory) {
                "use strict";

                if (typeof define === 'function' && define.amd) {
                    // AMD
                    define(['jquery'], function($) {
                        return factory($, window, document);
                    });
                } else if (typeof exports === 'object') {
                    // CommonJS
                    module.exports = function(root, $) {
                        if (!root) {
                            root = window;
                        }

                        if (!$) {
                            $ = typeof window !== 'undefined' ?
                                require('jquery') :
                                require('jquery')(root);
                        }

                        return factory($, root, root.document);
                    };
                } else {
                    // Browser
                    factory(jQuery, window, document);
                }
            }
            (function($, window, document) {


                $.fn.dataTable.render.moment = function(from, to, locale) {
                    // Argument shifting
                    if (arguments.length === 1) {
                        locale = 'en';
                        to = from;
                        from = 'YYYY-MM-DD';
                    } else if (arguments.length === 2) {
                        locale = 'en';
                    }

                    return function(d, type, row) {
                        var m = moment(d, from, locale, true);
                        // Order and type get a number value from Moment, everything else
                        // sees the rendered value
                        return m.format(type === 'sort' || type === 'type' ? 'x' : to);
                    };
                };


            }));
    }
}
let dtConfig = new DtConfig();