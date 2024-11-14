import { Button } from "@/components/ui/button";
import bannerimg from '@/../src/assests/home.png'
import Image from "next/image";

export default function Banner() {
  return (
    <section className="container mx-auto px-4 items-center pt-16 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div>
          <h1 className="text-5xl font-semibold my-8">
            {" "}
            Hire the <span className="underline">Top 3%</span> of <br />{" "}
            Freelance Talent®{" "}
          </h1>
          <p>
            {" "}
            Toptal is an exclusive network of the top freelance software
            developers, designers, marketing experts, finance experts, product
            managers, and project managers in the world. Top companies hire
            Toptal freelancers for their most important projects.{" "}
          </p>
          <Button className="my-8"> See You Soon </Button>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <Image src={bannerimg} alt="" width={400} />
        </div>
      </div>
    </section>
  );
}
