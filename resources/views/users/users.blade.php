@extends('layouts.base')
@section('title','Usuarios')
@section('content')
<div class="page-header">
  <h1 class="">Usuarios
  <button 
    id="btn-storage-user"
    type="button" 
    class="btn btn-primary col-xs-12 col-md-2 pull-right" 
    data-toggle="modal" 
    data-target="#frmUserModal" 
    data-modal-title="Añadir nuevo usuario"
    data-option="store">
    <i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i> Añadir usuario
  </button></h1>
  
</div>


<table id="dt-users" class="display responsive nowrap" cellspacing="0" width="100%">
    <thead>
        <tr>
            <td data-visible="false">id</td>
            <td>Nombre</td>
            <td>Apellidos</td>
            <td>Correo electrónico </td>
            <td>Miembro desde</td>
            <td>Opciones</td>
        </tr>
    </thead>
    <tbody></tbody>
    <tfoot></tfoot>
</table>
<!-- Button trigger modal -->


@include('users.partials.frmuser')
@endsection