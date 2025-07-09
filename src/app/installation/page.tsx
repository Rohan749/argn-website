import Home from "@/components/Home";
import Installation from "@/components/Installation";
import Breadcrumb from "@/components/reusable/Breadcrumb";
import LeftPanel from "@/components/reusable/LeftPanel";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Installation />
    </div>
  );
}
