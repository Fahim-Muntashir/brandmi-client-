/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface memberProps {
  image: any;
  name: string;
  expert: string;
  jobTitle: string;
  previousWorkPlace: string;
}

export default function Member({
  expert,
  image,
  jobTitle,
  name,
  previousWorkPlace,
}: memberProps) {
  return (
    <Card className=" overflow-hidden px-0 py-0 pb-2 ">
      <CardContent className="px-0 py-0 flex flex-col items-start gap-3">
        {/* image part */}
        <div className="relative w-full aspect-square ">
          <Image
            alt="Profile photo"
            fill
            className=" object-cover "
            src={image}
          />
        </div>
        {/* text part */}
        <div className="px-4 flex flex-col items-start gap-4">
          {/* name,title , role */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary">{name}</h3>

            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-xs text-emerald-400">
                Verified Expert <br />
                in {expert}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{jobTitle}</p>
          </div>
          {/* prev work experience */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">PREVIOUSLY AT</p>
            <div className="flex items-center gap-2">
              <span className="text-xm font-semibold tracking-tight">
                {previousWorkPlace}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
