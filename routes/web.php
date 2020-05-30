<?php


Route::get('/', function () {
    return view('master');
});

Route::get('posts', 'PostController@index');
Route::view('/article', 'article');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
