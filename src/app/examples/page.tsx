import Examples from "@/components/Examples";
import Breadcrumb from "@/components/reusable/Breadcrumb";

export default function Page() {
  return (
      <div className="h-full w-full flex flex-col items-center lg:mt-20">
        <Breadcrumb />
        <Examples />
      </div>
  );
}
