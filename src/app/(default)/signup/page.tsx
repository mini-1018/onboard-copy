import SignupForm from "@/app/(default)/signup/SignupForm";
import Loading from "@/shared/components/loading";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SignupForm />
    </Suspense>
  );
}
