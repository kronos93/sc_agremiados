import Config from '../config/Config';
let config = new Config();
let btnEditar = `
    <button 
            class="btn btn-success" 
            data-toggle="modal"
            data-target="#frmUserModal"
            data-modal-title="Editar usuario"
            data-option="edit">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar
    </button>`;
let classSpinner = 'fa-circle-o-notch fa-spin fa-fw';
let classSave = 'fa-check-circle';

let dt_user = $('#dt-users').DataTable({
    "ajax": config.url() + 'usuarios/show', //URL de datos
    "columns": [ //Atributos para la tabla

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
            "data": '',
            defaultContent: btnEditar,
        }
    ],
    "columnDefs": [{
        //"targets": [2],
        //"visible": false,
        //"searchable": false
    }, {
        "targets": [-1],
        "orderable": false,
    }, ]
});

$('#frmUserModal').on('show.bs.modal', function(e) {
    //Instanciar form
    let form = $(this).find('form');
    //Limpiar formulario
    form[0].reset();
    //Limpiar clases
    $(this).find('.form-group').removeClass('has-error').removeClass('has-success');
    //Remover mensajes
    $('.form-group').find('.help-block').remove();
    //Asignar titulo
    let modal = this.id;
    let btnModal = e.relatedTarget;
    let titleModal = btnModal.dataset.modalTitle;
    $('#' + modal + 'Label').empty().text(titleModal);
    if (btnModal.dataset.option === 'edit') {
        //console.log('Editar');
        let dtRow = $(btnModal).closest('tr').hasClass('child') ? $(btnModal).closest('tr').prev('tr.parent') : $(btnModal).parents('tr');
        let data = dt_user.row(dtRow).data();
        for (let key in data) {
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
$('#frm-user').on('submit', function(e) {
    e.preventDefault();

    let data = $(this).serializeObject();
    let frm = this;
    //console.log(data);
    $.ajax({
            url: config.url() + 'usuarios/store',
            data: data,
            method: "post",
            beforeSend: function(xhr) {
                $(frm).find('button[type="submit"] > i').removeClass(classSave).addClass(classSpinner);
            }
        })
        .done(function(response) {
            if (response.code == 4) { //Errors
                $('.form-group').removeClass('has-error').addClass('has-success');
                $('.form-group.has-success').find('.help-block').remove();
                for (let key in response.data) {
                    let input = $('#' + key);
                    input.next().remove();
                    input.after(`
                                <span class="help-block">
                                    <strong>${response.data[key]}</strong>
                                </span>
                                `)
                        .closest('.form-group')
                        .removeClass('has-success')
                        .addClass('has-error');
                }
            } else if (response.code == 2) { //Ok
                frm.reset();
                console.log(response.data);
                let newData = dt_user.row.add(response.data).draw(false).node();
                console.log(newData);
                $(newData).css({ backgroundColor: 'yellow' });

            }
        })
        .fail(function() {

        })
        .always(function() {
            $(frm).find('button[type="submit"] > i').removeClass(classSpinner).addClass(classSave);
        });
});