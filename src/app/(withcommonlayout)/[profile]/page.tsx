import { BreadcrumbComponent } from "@/components/common/BreadcrumbComponent";
import { ServiceCategoryTabs } from "@/components/profile/ServiceCategoryTabs";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profile: string }>;
}) {
  const slug = (await params).profile;
  console.log("profile", slug);
  return (
    <section className="container mx-auto">
      <BreadcrumbComponent />

      <div className="flex">
        <div className="w-1/2">
          <h2 className="font-semibold mt-4">
            I will build wordpress website development, design, redesign, clone,
            wordpress website
          </h2>
          <div className="flex mt-4">
            <div className="rounded-full h-[61px] w-[61px] overflow-hidden flex justify-center items-center">
              <Image src="/user.png" alt="" height={500} width={375} />
            </div>

            <div className="ml-2">
              Limon Level 2 | 44 orders in queue
              <div className="">
                <Star className="size-4 inline-block" />
                <Star className="size-4 inline-block" />
                <Star className="size-4 inline-block" />
                <Star className="size-4 inline-block" />
                <Star className="size-4 inline-block" /> <span>5.0</span>
                <Link href="/" className="underline">
                  (68 reviews)
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          {/*  service category card */}

          <ServiceCategoryTabs />
        </div>
      </div>
    </section>
  );
}
