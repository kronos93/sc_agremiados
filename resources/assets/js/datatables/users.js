import Config from '../config/Config';
let config = new Config();
let btnEditar = `
    <button 
            class="btn btn-success btn-update-user" 
            data-toggle="modal"
            data-target="#frmUserModal"
            data-modal-title="Editar usuario"
            data-option="update">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar
    </button>`;


let dt_user = $('#dt-users').DataTable({
    "ajax": config.url() + 'usuarios/show', //URL de datos
    "columns": [ //Atributos para la tabla
        {
            "data": "id",
        },
        {
            "data": "name",
        },
        {
            "data": "last_name",
        },
        {
            "data": "email",
        },
        {
            "data": "created_at",
            "render": $.fn.dataTable.render.moment('YYYY-MM-DD HH:mm:ss', 'LLLL', 'es-do')
        },
        {
            "data": '',
            defaultContent: btnEditar,
        }
    ],
    "columnDefs": [{
            //"targets": [2],
            //"visible": false,
            //"searchable": false
        },
        {
            "targets": [-1],
            "orderable": false,
        },

    ],
    "order": [
        [0, "asc"]
    ],
});
//Desbloquear input contraseña
$('#btn-storage-user').on('click', function() {
    $('#container-update-password').hide();
    $('#password').closest('.form-group').removeClass('not-validate');
    $('#password-confirm').closest('.form-group').removeClass('not-validate');
    $('#password').attr('disabled', false);
    $('#password-confirm').attr('disabled', false);
});
//Bloquear input de contraseña
$('#dt-users').on('click', 'button.btn-update-user', function() {
    $('#container-update-password').show();
    $('#password').closest('.form-group').addClass('not-validate');
    $('#password-confirm').closest('.form-group').addClass('not-validate');
    $('#password').attr('disabled', true);
    $('#password-confirm').attr('disabled', true);
});
//Validar check para activar o desactivar input contraseña
$('#update-password').on('click', function() {
    let active_change_password = this.checked;
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

class FrmGeneric {
    constructor(config) {
        this.m = config.modal;
        this.modal = $(config.modal);
        this.frm = this.modal.find('form'); //Del modal obtenemos el form
        this.table = config.table;
        this.dtRow = null;
        this.url = '';
        this.option = null;
        this.url_update = config.url_update;
        this.url_store = config.url_store;
        this.classSpinner = 'fa-circle-o-notch fa-spin fa-fw';
        this.classSave = 'fa-check-circle';
        if (config.useGeneric == true) {
            this.onShowModal();
            this.handleSubmit();
        }

    }
    onShowModal() {
        this.modal.on('show.bs.modal', (e) => { this.handleShowModal(e); });
    }
    handleShowModal(e) {
        let btnModal = this.changeTitle(e);
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
    changeTitle(e) {
        //Cambiar el titulo del modal
        let btnModal = e.relatedTarget;
        let titleModal = btnModal.dataset.modalTitle;
        $(this.m + 'Label').empty().text(titleModal);
        return btnModal;
    }
    handleSubmit() {
        let that = this;
        this.frm.on('submit', function(e) {
            e.preventDefault();
            // console.log($(this).serializeObject());
            // console.log(that.url);
            // console.log(that.option);
            let data = $(this).serializeObject();
            $.ajax({
                    url: config.url() + that.url,
                    data: data,
                    method: "post",
                    beforeSend: function(xhr) {
                        $('.form-group').not('.not-validate').addClass('has-success'); //Todos son ok
                        that.frm.find('button[type="submit"] > i').removeClass(that.classSave).addClass(that.classSpinner);
                    }
                })
                .done(function(response) {
                    if (response.code == 4) { //Error
                        $('.form-group').removeClass('has-error').not('.not-validate').addClass('has-success');
                        $('.form-group.has-success').find('.help-block').remove();
                        for (let key in response.data) {
                            let input = $('#' + key);
                            input.next().remove();
                            input.after(`
                                <span class="help-block">
                                    <strong>${response.data[key]}</strong>
                                </span>
                                `)
                                .closest('.form-group') //Asignar error
                                .not('.not-validate')
                                .removeClass('has-success')
                                .addClass('has-error');
                        }
                    } else if (response.code == 2) { //Ok
                        //Limpiar clases
                        $('.form-group').removeClass('has-error').removeClass('has-success');
                        //Remover mensajes
                        $('.form-group').find('.help-block').remove();

                        if (that.option == 'store') {
                            // console.log('onStore');
                            that.frm[0].reset();
                            let newData = that.table.row.add(response.data).draw(false).node();
                            $(newData).css({ backgroundColor: '#16a085' });
                            that.table.order([0, 'desc']).draw(); //Ordenar por id
                        } else if (that.option == 'update') {
                            // console.log('onUpdate');
                            // console.log(response.data);
                            let newData = that.table.row(that.dtRow).data(response.data).draw().node();
                            $(newData).css({ backgroundColor: 'yellow' });
                        }

                    }
                })
                .fail(function() {
                    console.log('Error fatal');
                })
                .always(function() {
                    that.frm.find('button[type="submit"] > i').removeClass(that.classSpinner).addClass(that.classSave);
                });
        });
    }
    handleStore() {
        // console.log('Agregar');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    }
    handleUpdate(btnModal) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        let dtRow = $(btnModal).closest('tr').hasClass('child') ? $(btnModal).closest('tr').prev('tr.parent') : $(btnModal).parents('tr');
        this.dtRow = dtRow;
        let data = (this.table).row(dtRow).data();
        for (let key in data) {
            //console.log(key + ' ' + data[key]);
            this.frm.find('#' + key).val(data[key]);
        }
    }
    cleanForm() {
        //Limpiar formulario
        this.frm[0].reset();
        //Limpiar clases
        $(this.frm).find('.form-group').removeClass('has-error').removeClass('has-success');
        //Remover mensajes
        $('.form-group').find('.help-block').remove();
    }
}
//json estricto
var frm = new FrmGeneric({
    'modal': '#frmUserModal',
    'url_update': 'usuarios/update',
    'url_store': 'usuarios/store',
    'useGeneric': true,
    'table': dt_user
});