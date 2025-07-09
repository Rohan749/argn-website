import BaseButton from "@/components/animationComponents/Button/BaseButton";
import Breadcrumb from "@/components/reusable/Breadcrumb";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col items-center xl:mt-10">
      <Breadcrumb />
      <BaseButton />
    </div>
  );
}
