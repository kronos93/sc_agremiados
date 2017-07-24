webpackJsonp([1],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Config = __webpack_require__(118);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _Config2.default();
var btnEditar = '\n    <button \n            class="btn btn-success" \n            data-toggle="modal"\n            data-target="#frmUserModal"\n            data-modal-title="Editar usuario"\n            data-option="edit">\n            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar\n    </button>';
var classSpinner = 'fa-circle-o-notch fa-spin fa-fw';
var classSave = 'fa-check-circle';
var dt_user = $('#dt-users').DataTable({
    "ajax": config.url() + 'usuarios/show', //URL de datos
    "columns": [//Atributos para la tabla
    {
        "data": "name"
    }, {
        "data": "last_name"
    }, {
        "data": "email"
    }, {
        "data": '',
        defaultContent: btnEditar
    }]
});
$('#frmUserModal').on('show.bs.modal', function (e) {
    //Limpiar formulario
    var form = $(this).find('form');
    form[0].reset();
    //Asignar titulo
    var modal = this.id;
    var btnModal = e.relatedTarget;
    var titleModal = btnModal.dataset.modalTitle;
    $('#' + modal + 'Label').empty().text(titleModal);
    if (btnModal.dataset.option === 'edit') {
        //console.log('Editar');
        var dtRow = $(btnModal).closest('tr').hasClass('child') ? $(btnModal).closest('tr').prev('tr.parent') : $(btnModal).parents('tr');
        var data = dt_user.row(dtRow).data();
        for (var key in data) {
            //console.log(key + ' ' + data[key]);
            form.find('#' + key).val(data[key]);
        }
    }
    if (btnModal.dataset.option === 'add') {
        //console.log('Agregar');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    }
});
$('#frm-user').on('submit', function (e) {
    e.preventDefault();

    var data = $(this).serializeObject();
    var frm = this;
    //console.log(data);
    $.ajax({
        url: config.url() + 'usuarios/store',
        data: data,
        method: "post",
        beforeSend: function beforeSend(xhr) {
            $(frm).find('button[type="submit"] > i').removeClass(classSave).addClass(classSpinner);
        }
    }).done(function (response) {
        if (response.code == 4) {
            //Errors
            $('.form-group').removeClass('has-error').addClass('has-success');
            $('.form-group.has-success').find('.help-block').remove();
            for (var key in response.data) {
                var input = $('#' + key);
                input.next().remove();
                input.after('\n                                <span class="help-block">\n                                    <strong>' + response.data[key] + '</strong>\n                                </span>\n                                ').closest('.form-group').removeClass('has-success').addClass('has-error');
            }
        } else if (response.code == 2) {//Ok

        }
    }).fail(function () {}).always(function () {
        $(frm).find('button[type="submit"] > i').removeClass(classSpinner).addClass(classSave);
    });
});

/***/ })

});