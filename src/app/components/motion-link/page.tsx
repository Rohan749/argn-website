import MotionLinkComponent from "@/components/animationComponents/MotionLink/MotionLinkComponent";
import Breadcrumb from "@/components/reusable/Breadcrumb";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col items-center xl:mt-10">
      <Breadcrumb />
      <MotionLinkComponent />
    </div>
  );
}
