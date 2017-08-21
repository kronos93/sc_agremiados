webpackJsonp([1],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(159);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(160);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Config = __webpack_require__(168);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _Config2.default();
var btnEditar = '\n    <button \n            class="btn btn-success btn-update-user" \n            data-toggle="modal"\n            data-target="#frmUserModal"\n            data-modal-title="Editar usuario"\n            data-option="update">\n            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar\n    </button>';

var dt_user = $('#dt-users').DataTable({
    "ajax": config.url() + 'usuarios/show', //URL de datos
    "columns": [//Atributos para la tabla
    {
        "data": "id"
    }, {
        "data": "name"
    }, {
        "data": "last_name"
    }, {
        "data": "email"
    }, {
        "data": "created_at",
        "render": $.fn.dataTable.render.moment('YYYY-MM-DD HH:mm:ss', 'LLLL', 'es-do')
    }, {
        "data": '',
        defaultContent: btnEditar
    }],
    "columnDefs": [{
        //"targets": [2],
        //"visible": false,
        //"searchable": false
    }, {
        "targets": [-1],
        "orderable": false
    }],
    "order": [[0, "asc"]]
});
//Desbloquear input contraseña
$('#btn-storage-user').on('click', function () {
    $('#container-update-password').hide();
    $('#password').closest('.form-group').removeClass('not-validate');
    $('#password-confirm').closest('.form-group').removeClass('not-validate');
    $('#password').attr('disabled', false);
    $('#password-confirm').attr('disabled', false);
});
//Bloquear input de contraseña
$('#dt-users').on('click', 'button.btn-update-user', function () {
    $('#container-update-password').show();
    $('#password').closest('.form-group').addClass('not-validate');
    $('#password-confirm').closest('.form-group').addClass('not-validate');
    $('#password').attr('disabled', true);
    $('#password-confirm').attr('disabled', true);
});
//Validar check para activar o desactivar input contraseña
$('#update-password').on('click', function () {
    var active_change_password = this.checked;
    if (active_change_password) {
        $('#password').closest('.form-group').removeClass('not-validate');
        $('#password-confirm').closest('.form-group').removeClass('not-validate');
    } else {
        $('#password').closest('.form-group').addClass('not-validate');
        $('#password-confirm').closest('.form-group').addClass('not-validate');
    }

    $('#password').attr('disabled', !active_change_password);
    $('#password-confirm').attr('disabled', !active_change_password);
});

var FrmGeneric = function () {
    function FrmGeneric(config) {
        (0, _classCallCheck3.default)(this, FrmGeneric);

        this.m = config.modal;
        this.modal = $(config.modal);
        this.frm = this.modal.find('form'); //Del modal obtenemos el form
        this.table = config.table;
        this.dtRow = null;
        this.url = '';
        this.option = null;
        this.url_update = config.url_update;
        this.url_store = config.url_store;
        this.classSpinner = 'fa-circle-o-notch fa-spin fa-fw'; //Clase FontAwesome
        this.classSave = 'fa-check-circle'; //Clase FontAwesome
        if (config.useGeneric == true) {
            this.onShowModal();
            this.handleSubmit();
        }
    }

    (0, _createClass3.default)(FrmGeneric, [{
        key: 'onShowModal',
        value: function onShowModal() {
            var _this = this;

            this.modal.on('show.bs.modal', function (e) {
                _this.handleShowModal(e);
            });
        }
    }, {
        key: 'handleShowModal',
        value: function handleShowModal(e) {
            var btnModal = this.changeTitle(e);
            this.cleanForm();
            //Añadir funciones
            if (btnModal.dataset.option === 'update') {
                this.handleUpdate(btnModal);
                this.option = btnModal.dataset.option;
                this.url = this.url_update;
            }
            if (btnModal.dataset.option === 'store') {
                this.handleStore();
                this.option = btnModal.dataset.option;
                this.url = this.url_store;
            }
        }
    }, {
        key: 'changeTitle',
        value: function changeTitle(e) {
            //Cambiar el titulo del modal
            var btnModal = e.relatedTarget;
            var titleModal = btnModal.dataset.modalTitle;
            $(this.m + 'Label').empty().text(titleModal);
            return btnModal;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var that = this;
            this.frm.on('submit', function (e) {
                e.preventDefault();
                // console.log($(this).serializeObject());
                // console.log(that.url);
                // console.log(that.option);
                var data = $(this).serializeObject();
                $.ajax({
                    url: config.url() + that.url,
                    data: data,
                    method: "post",
                    beforeSend: function beforeSend(xhr) {
                        $('.form-group').not('.not-validate').addClass('has-success'); //Todos son ok
                        that.frm.find('button[type="submit"] > i').removeClass(that.classSave).addClass(that.classSpinner);
                    }
                }).done(function (response) {
                    if (response.code == 4) {
                        //Error
                        $('.form-group').removeClass('has-error').not('.not-validate').addClass('has-success');
                        $('.form-group.has-success').find('.help-block').remove();
                        for (var key in response.data) {
                            var input = $('#' + key);
                            input.next().remove();
                            input.after('\n                                <span class="help-block">\n                                    <strong>' + response.data[key] + '</strong>\n                                </span>\n                                ').closest('.form-group') //Asignar error
                            .not('.not-validate').removeClass('has-success').addClass('has-error');
                        }
                    } else if (response.code == 2) {
                        //Ok
                        //Limpiar clases
                        $('.form-group').removeClass('has-error').removeClass('has-success');
                        //Remover mensajes
                        $('.form-group').find('.help-block').remove();

                        if (that.option == 'store') {
                            // console.log('onStore');
                            that.frm[0].reset();
                            var newData = that.table.row.add(response.data).draw(false).node();
                            $(newData).css({ backgroundColor: '#16a085' });
                            that.table.order([0, 'desc']).draw(); //Ordenar por id
                        } else if (that.option == 'update') {
                            // console.log('onUpdate');
                            // console.log(response.data);
                            var _newData = that.table.row(that.dtRow).data(response.data).draw().node();
                            $(_newData).css({ backgroundColor: 'yellow' });
                        }
                    }
                }).fail(function () {
                    console.log('Error fatal');
                }).always(function () {
                    that.frm.find('button[type="submit"] > i').removeClass(that.classSpinner).addClass(that.classSave);
                });
            });
        }
    }, {
        key: 'handleStore',
        value: function handleStore() {
            // console.log('Agregar');
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        }
    }, {
        key: 'handleUpdate',
        value: function handleUpdate(btnModal) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var dtRow = $(btnModal).closest('tr').hasClass('child') ? $(btnModal).closest('tr').prev('tr.parent') : $(btnModal).parents('tr');
            this.dtRow = dtRow;
            var data = this.table.row(dtRow).data();
            for (var key in data) {
                //console.log(key + ' ' + data[key]);
                this.frm.find('#' + key).val(data[key]);
            }
        }
    }, {
        key: 'cleanForm',
        value: function cleanForm() {
            //Limpiar formulario
            this.frm[0].reset();
            //Limpiar clases
            $(this.frm).find('.form-group').removeClass('has-error').removeClass('has-success');
            //Remover mensajes
            $('.form-group').find('.help-block').remove();
        }
    }]);
    return FrmGeneric;
}();
//json estricto


var frm = new FrmGeneric({
    'modal': '#frmUserModal',
    'url_update': 'usuarios/update',
    'url_store': 'usuarios/store',
    'useGeneric': true,
    'table': dt_user
});

/***/ })

});