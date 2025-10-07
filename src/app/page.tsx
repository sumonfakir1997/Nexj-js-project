"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <div>
      {/* <main> */}
      <div>
        <Button onClick={() => push("/cardpage")} variant="gotoNextPage">
          Click me
        </Button>
      </div>
      {/* </main> */}
    </div>
  );
}
