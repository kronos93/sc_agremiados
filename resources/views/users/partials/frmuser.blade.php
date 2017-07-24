<!-- Modal -->
<div class="modal fade" id="frmUserModal" tabindex="-1" role="dialog" aria-labelledby="frmUserModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <form id="frm-user" class="form-horizontal" method="POST" action="" autocomplete="off">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="frmUserModalLabel"></h4>
            </div>
            <div class="modal-body">
                
                <div class="form-group">
                    <label for="name" class="col-md-4 control-label">Nombre</label>
                    <div class="col-md-6">
                        <input id="name" type="text" class="form-control" name="name" value="" required autofocus />
                    </div>
                </div>

                <div class="form-group">
                    <label for="f_last_name" class="col-md-4 control-label">Apellido paterno</label>
                    <div class="col-md-6">
                        <input id="f_last_name" type="text" class="form-control" name="f_last_name" value="" required autofocus />
                    </div>
                </div>

                <div class="form-group">
                    <label for="m_last_name" class="col-md-4 control-label">Apellido materno</label>
                    <div class="col-md-6">
                        <input id="m_last_name" type="text" class="form-control" name="m_last_name" value="" required autofocus />
                    </div>
                </div>

                <div class="form-group">
                    <label for="email" class="col-md-4 control-label">Correo electrónico</label>
                    <div class="col-md-6">
                        <input id="email" type="email" class="form-control" name="email" value="" required />
                    </div>
                </div>

                <div class="form-group">
                    <label for="password" class="col-md-4 control-label">Contraseña</label>
                    <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" required />
                    </div>
                </div>

                <div class="form-group">
                    <label for="password-confirm" class="col-md-4 control-label">Confirmar contraseña</label>
                    <div class="col-md-6">
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required />
                    </div>
                </div>


            </div>
            
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-ban" aria-hidden="true"></i> Cerrar</button>
                <button type="submit" class="btn btn-primary"><i class="fa fa-check-circle" aria-hidden="true"></i> Guardar</button>
            </div>
        </form>
    </div>
  </div>
</div>