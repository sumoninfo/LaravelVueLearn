<?php


Route::get('/', function () {
    return view('welcome');
});

Route::get('posts', 'PostController@index');
Route::view('/article', 'article');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
