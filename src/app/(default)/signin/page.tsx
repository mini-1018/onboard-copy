import SigninForm from "@/app/(default)/signin/SigninForm";
import Loading from "@/shared/components/loading";
import { Suspense } from "react";

export default function SigninPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SigninForm isSignup={true} />
    </Suspense>
  );
}
