import React from "react";
import { Card, Skeleton } from "@heroui/react";

export default function LoadingScreen() {
  return (
    <>
     <div className="bg-linear-to-l from-blue-400 to-purple-400 p-4  mb-0.5 ">
              <div className="flex justify-center">
        <Card
          className="w-11/24 space-y-5 p-4 bg-gray-200"
          radius="lg"
        >
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <Skeleton className="rounded-lg">
            <div className="h-80 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>

          </div>
        </Card>
      </div>
     </div>
     <div className="bg-linear-to-l from-blue-400 to-purple-400 p-4  mb-0.5 ">
              <div className="flex justify-center">
        <Card
          className="w-11/24 space-y-5 p-4 bg-gray-200"
          radius="lg"
        >
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <Skeleton className="rounded-lg">
            <div className="h-80 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>

          </div>
        </Card>
      </div>
     </div>


    </>
  );
}
