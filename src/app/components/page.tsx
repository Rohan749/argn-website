import Components from "@/components/Components";
import Breadcrumb from "@/components/reusable/Breadcrumb";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col items-center ">
      <Breadcrumb />
      <Components />
    </div>
  );
}
