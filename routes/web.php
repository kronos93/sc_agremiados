<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->to('/menu');
});

Route::resource('agremiados','MembersController');
/* Route::resource('usuarios','UsersController'); */
Route::get('usuarios',['as'=>'usuarios.index','uses'=>'UsersController@index']);
Route::get('usuarios/{id}',['as'=>'usuarios.show','uses'=>'UsersController@show']);
Route::post('usuarios/store',['as'=>'usuarios.store','uses'=>'UsersController@store']);
Route::post('usuarios/update',['as'=>'usuarios.update','uses'=>'UsersController@update']);
//Route::post('users/create',['as'=>'users.store','uses'=>'UserController@store']);
Auth::routes();

Route::get('/menu', 'HomeController@index')->name('menu');
