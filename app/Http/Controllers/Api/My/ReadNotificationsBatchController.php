<?php

namespace App\Http\Controllers\Api\My;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;

class ReadNotificationsBatchController extends Controller
{
    /**
     * Mark notifications with given IDs as read.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function store(Request $request)
    {
        $notifications = $request->user()
            ->unreadNotifications
            ->whereIn('id', $request->input('notifications_ids', []));

        $notifications->markAsRead();

        return NotificationResource::collection($notifications);
    }
}
