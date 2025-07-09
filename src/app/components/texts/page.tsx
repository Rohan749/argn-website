import BaseText from "@/components/animationComponents/Text/BaseText";
import Breadcrumb from "@/components/reusable/Breadcrumb";

export default function Page() {
  return (

      <div className="h-full w-full flex flex-col items-center xl:mt-10">
        <Breadcrumb />
        <BaseText />
      </div>
  );
}
