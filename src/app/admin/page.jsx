"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addContent } from "../../../lib/api";
import { getCurrentUser } from "../../../lib/auth";
import AdminPanel from "../components/AdminPanel";

export default function AdminPage() {


  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();

      if (!user) {
        router.push("/admin");
        return;
      }

      if (user.emailAddresses[0].emailAddress !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        router.push("/");
        return;
      }

      setIsAuthorized(true);
    };

    fetchUser();
  }, [router]);

 

  return (
    <AdminPanel/>
  );
}
