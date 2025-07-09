import BaseText from "@/components/animationComponents/Text/BaseText";
import VortextComponent from "@/components/animationComponents/Text/VortextComponent";
import Components from "@/components/Components";
import Breadcrumb from "@/components/reusable/Breadcrumb";

export default function Page() {
  return (

      <div className="h-full w-full flex flex-col items-center xl:mt-10">
        <Breadcrumb />
        <VortextComponent />
      </div>
  );
}
