<?php
use App\Http\Controllers\UserController ;
use App\Http\Controllers\NotificationController ;
use Illuminate\Support\Facades\Route;

Route::post('/login',  [UserController::class, 'authenticate']);
Route::post('/register' , [UserController::class, 'create']) ;
Route::post('/update' , [UserController::class, 'update']) ;
Route::get('/user' , [UserController::class, 'getUser']) ;
Route::get('/users' , [UserController::class, 'getUsers']) ;
Route::get('/logout' , [UserController::class, 'logout']) ;
Route::post('/store' , [NotificationController::class, 'store']) ;
Route::get('/notifications' , [NotificationController::class, 'index']) ;
Route::get('/notification/{notification}' , [NotificationController::class, 'show']) ;
Route::post('/notification/update/{notification}' , [NotificationController::class, 'update']) ;
Route::get('/user/notifications' , [NotificationController::class, 'userNotifications']) ;

