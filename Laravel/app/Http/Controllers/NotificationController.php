<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::all();
        return response()->json($notifications);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'notification' => 'required',
            'user_id' => 'required|exists:users,id',
            'lu' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $notification = Notification::create($request->all());  
        
        $queryParams = http_build_query(['data' => json_encode($notification)]);
        $response = Http::get('http://localhost:3001/notification?' . $queryParams);        

        if ($response->successful()) {
            return response()->json(["message" => "Notification envoyé avec succcès"]) ;
        } else {
            return response()->json(["message" => "Notification pas envoyé"]) ;
        }
    }

    public function show(Notification $notification)
    {
        return response()->json($notification);
    }

    public function update(Request $request, Notification $notification)
    {
        $validator = Validator::make($request->all(), [
            'notification' => 'required',
            'user_id' => 'required|exists:users,id',
            'lu' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $notification->update($request->all());
        return response()->json($notification);
    }

    public function destroy(Notification $notification)
    {
        $notification->delete();
        return response()->json(null, 204);
    }

    public function userNotifications(Request $request)
    {
        $user_id = $request->query('user_id');
        $notifications = Notification::where('user_id', $user_id)->get();
        return response()->json($notifications);
    }
    
}
