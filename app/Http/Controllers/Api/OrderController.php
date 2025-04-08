<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'total_price' => 'required|numeric|min:0',
        ]);

        $order = Order::create([
            'user_id' => $request->user()->id,
            'total_price' => $request->total_price,
            'status' => 'pending',
        ]);

        return response()->json($order, 201);
    }

    public function index(Request $request)
    {
        $orders = $request->user()->orders()->latest()->get();
        return response()->json($orders);
    }
}