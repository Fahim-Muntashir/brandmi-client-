import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import member1 from "@/assests/member1.avif";

export default function Members() {
  return (
    <div className="container px-4 mx-auto flex gap-3">
      <Card className=" overflow-hidden px-0 py-0 pb-2  w-[180px]">
        <CardContent className="px-0 py-0">
          <div className="flex flex-col items-start gap-3">
            <div className="relative w-full aspect-square ">
              <Image
                alt="Profile photo"
                className=" object-cover"
                layout="fill"
                objectFit="cover"
                src={member1}
              />
            </div>
            <div className="px-4 flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary">
                  Emily Dubow
                </h3>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-xs text-emerald-400">
                    Verified Expert <br />
                    in Design
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">UX/UI Designer</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">PREVIOUSLY AT</p>
                <div className="flex items-center gap-2">
                  <span className="text-xm font-semibold tracking-tight">
                    SAMSUNG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className=" overflow-hidden px-0 py-0 pb-2 rounded-sm w-[180px]">
        <CardContent className="px-0 py-0">
          <div className="flex flex-col items-start gap-3">
            <div className="relative w-full aspect-square ">
              <Image
                alt="Profile photo"
                className="rounded-sm object-cover"
                layout="fill"
                objectFit="cover"
                src={member1}
              />
            </div>
            <div className="px-4 flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary">
                  Emily Dubow
                </h3>

                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-xs text-emerald-400">
                    Verified Expert <br />
                    in Design
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">UX/UI Designer</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">PREVIOUSLY AT</p>
                <div className="flex items-center gap-2">
                  <span className="text-xm font-semibold tracking-tight">
                    SAMSUNG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
