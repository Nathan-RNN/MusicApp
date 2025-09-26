"use client";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProfileButton() {
  return (
    <Link href="/login">
      <Button>Login</Button>
    </Link>
  );
}
