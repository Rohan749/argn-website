import Examples from "@/components/Examples";
import Home from "@/components/Home";
import Breadcrumb from "@/components/reusable/Breadcrumb";
import LeftPanel from "@/components/reusable/LeftPanel";

export default function Page() {
  return (
      <div className="h-full w-full flex flex-col items-center lg:mt-20">
        <Breadcrumb />
        <Examples />
      </div>
  );
}
