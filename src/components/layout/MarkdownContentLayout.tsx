import { MainLayout } from ".";
import { BackButton, MotionSection } from "..";
import { PropsWithChildren } from "react";

export default function MarkdownContentLayout({ children }: PropsWithChildren) {
  return (
    <MainLayout className="py-10">
      <div className="sticky top-0 z-10 bg-gradient-to-b from-black to-transparent py-4 w-full min-w-0 lg:w-[30vw]">
        <BackButton />
      </div>
      <MotionSection className="w-full">{children}</MotionSection>
    </MainLayout>
  );
}
