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

Route::prefix('usuarios')->group(function () {
    $controller = 'UsersController';
    Route::get('/',"{$controller}@index")->name('users.index');
    Route::get('/{id}',"{$controller}@show")->name('users.show');
    Route::post('/store',"{$controller}@store")->name('users.store');
    Route::post('/update',"{$controller}@update")->name('users.update');
});

Auth::routes();

Route::get('/menu', 'HomeController@index')->name('menu');
