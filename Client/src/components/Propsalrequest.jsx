import React from 'react'

import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const Propsalrequest = () => {
  return (
    <Card className="bg-black text-white rounded-lg border border-gray-700 p-4 w-full max-w-md">
      <CardContent className="flex items-center space-x-4 p-0">
        {/* Profile Avatar */}
        
<div className="">A</div>
        {/* User Info */}
        <div className="flex-1">
          <p className="text-lg font-semibold">
            alice_smith <span className="text-gray-400 text-sm">Canada</span>
          </p>

          {/* Rating & Time */}
          <div className="flex items-center space-x-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="text-gray-400 text-sm">1 month ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Propsalrequest