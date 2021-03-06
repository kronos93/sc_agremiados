<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}" />
<!-- Tell the browser to be responsive to screen width -->
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
<title>@yield('title')</title>
<meta name="mobile-web-app-capable" content="yes"><meta name="theme-color" content="#4DB7BC"><meta name="application-name" content="Sistema de control de agremiados"><link rel="apple-touch-icon" sizes="57x57" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-icon-180x180.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Sistema de control de agremiados"><link rel="icon" type="image/png" sizes="32x32" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/favicon-16x16.png"><link rel="shortcut icon" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/favicon.ico"><link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-320x460.png"><link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-640x920.png"><link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-640x1096.png"><link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-750x1294.png"><link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-1182x2208.png"><link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-1242x2148.png"><link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-748x1024.png"><link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-768x1004.png"><link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-1496x2048.png"><link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="http://192.168.0.4/sc_agremiados/public/icons-7d5ca651f07e4e398d841d7dab8c447b/apple-touch-startup-image-1536x2008.png"><link href="./css/app.css" rel="stylesheet"></head>
<body @if (!Auth::guest()) class="hold-transition skin-blue sidebar-mini" style="height: auto;" @else class="skin-blue sidebar-collapse" @endif><div class="wrapper" @if (!Auth::guest()) style="height: auto;" @endif><!-- Main Header -->
<header class="main-header">
<!-- Logo -->
<a href="" class="logo">
<!-- mini logo for sidebar mini 50x50 pixels -->
<span class="logo-mini"><b>A</b>LT</span>
<!-- logo for regular state and mobile devices -->
<span class="logo-lg"><b>Admin</b>LTE</span>
</a>
<!-- Header Navbar -->
<nav class="navbar navbar-static-top" role="navigation">@if(!Auth::guest()) <!-- Sidebar toggle button-->
<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
<span class="sr-only">Toggle navigation</span>
</a>
<!-- Navbar Right Menu -->
<div class="navbar-custom-menu">
<ul class="nav navbar-nav">
<!-- Messages: style can be found in dropdown.less-->
<li class="dropdown messages-menu">
<!-- Menu toggle button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown">
<i class="fa fa-envelope-o"></i>
<span class="label label-success">4</span>
</a>
<ul class="dropdown-menu">
<li class="header">You have 4 messages</li>
<li>
<!-- inner menu: contains the messages -->
<ul class="menu">
<li>
<!-- start message -->
<a href="#">
<div class="pull-left">
<!-- User Image --><img class="img-circle" src="./img/default.png" alt="User Image"><!-- <img src=require('../img/default.png') class="img-circle" alt="User Image"> -->
</div>
<!-- Message title and timestamp -->
<h4><Support>Team</Support><small><i class="fa fa-clock-o"></i> 5 mins</small>
</h4>
<!-- The message -->
<p>Why not buy a new awesome theme?</p>
</a>
</li>
<!-- end message -->
</ul>
<!-- /.menu -->
</li>
<li class="footer"><a href="#">See All Messages</a></li>
</ul>
</li>
<!-- /.messages-menu -->
<!-- Notifications Menu -->
<li class="dropdown notifications-menu">
<!-- Menu toggle button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown">
<i class="fa fa-bell-o"></i>
<span class="label label-warning">10</span>
</a>
<ul class="dropdown-menu">
<li class="header">You have 10 notifications</li>
<li>
<!-- Inner Menu: contains the notifications -->
<ul class="menu">
<li>
<!-- start notification -->
<a href="#">
<i class="fa fa-users text-aqua"></i> 5 new members joined today
</a>
</li>
<!-- end notification -->
</ul>
</li>
<li class="footer"><a href="#">View all</a></li>
</ul>
</li>
<!-- Tasks Menu -->
<li class="dropdown tasks-menu">
<!-- Menu Toggle Button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown">
<i class="fa fa-flag-o"></i>
<span class="label label-danger">9</span>
</a>
<ul class="dropdown-menu">
<li class="header">You have 9 tasks</li>
<li>
<!-- Inner menu: contains the tasks -->
<ul class="menu">
<li>
<!-- Task item -->
<a href="#">
<!-- Task title and progress text -->
<h3><Design>some buttons</Design><small class="pull-right">20%</small>
</h3>
<!-- The progress bar -->
<div class="progress xs">
<!-- Change the css width attribute to simulate progress -->
<div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
<span class="sr-only">20% Complete</span>
</div>
</div>
</a>
</li>
<!-- end task item -->
</ul>
</li>
<li class="footer">
<a href="#">View all tasks</a>
</li>
</ul>
</li>
<!-- User Account Menu -->
<li class="dropdown user user-menu">
<!-- Menu Toggle Button -->
<a href="#" class="dropdown-toggle" data-toggle="dropdown">
<!-- The user image in the navbar--><img class="user-image" src="./img/default.png" alt="User Image"><!-- <img src="require('../img/default.png')" class="user-image" alt="User Image"> -->
<!-- hidden-xs hides the username on small devices so only the image appears. -->
<span class="hidden-xs">@include('layouts.partials.fullname')</span>
</a>
<ul class="dropdown-menu">
<!-- The user image in the menu -->
<li class="user-header"><img class="img-circle" src="./img/default.png" alt="User Image"><!-- <img src="require('../img/default.png')" class="img-circle" alt="User Image"> -->
<p>@include('layouts.partials.fullname')</p>
</li>
<!-- Menu Body -->
<li class="user-body">
<div class="row">
<div class="col-xs-12 text-center">
<a href="#"><small>Miembro desde {{ Auth::user()->created_at }}</small></a>
</div>
<!-- <div class="col-xs-4 text-center">
<a href="#">Sales</a>
</div>
<div class="col-xs-4 text-center">
<a href="#">Friends</a>
</div> -->
</div>
<!-- /.row -->
</li>
<!-- Menu Footer-->
<li class="user-footer">
<div class="pull-left">
<a href="#" class="btn btn-default btn-flat">Profile</a>
</div>
<div class="pull-right">
<a href="{{ route('logout') }}" class="btn btn-default btn-flat" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Cerrar sesión</a>
<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
</div>
</li>
</ul>
</li>
<!-- Control Sidebar Toggle Button -->
<li>
<a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
</li>
</ul>
</div>@endif</nav>
</header><!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
<!-- sidebar: style can be found in sidebar.less -->
<section class="sidebar">
<!-- Sidebar user panel (optional) -->
<div class="user-panel">
<div class="pull-left image"><img class="img-circle" src="./img/default.png" alt="User Image"><!-- <img src="require('../img/default.png')" class="img-circle" alt="User Image">
</div>
<div class="pull-left info">
<p>@include('layouts.partials.fullname')</p>
<!-- Status -->
<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
</div>
</div>
<!-- search form (Optional) -->
<form action="#" method="get" class="sidebar-form">
<div class="input-group">
<input type="text" name="q" class="form-control" placeholder="Search...">
<span class="input-group-btn">
<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
</button>
</span>
</div>
</form>
<!-- /.search form -->
<!-- Sidebar Menu -->
<ul class="sidebar-menu">
<li class="header">HEADER</li>
<!-- Optionally, you can add icons to the links -->
<li class="active"><a href="usuarios"><i class="fa fa-link"></i> <span>Usuarios</span></a></li>
<li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
<li class="treeview">
<a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">
<li><a href="#">Link in level 2</a></li>
<li><a href="#">Link in level 2</a></li>
</ul>
</li>
</ul>
<!-- /.sidebar-menu -->
</section>
<!-- /.sidebar -->
</aside><!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
<!-- Content Header (Page header) -->
<!-- <section class="content-header">
<h1><Page>Header</Page><small>Optional description</small>
</h1>
<ol class="breadcrumb">
<li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
<li class="active">Here</li>
</ol>
</section> -->
<!-- Main content -->
<section class="content">