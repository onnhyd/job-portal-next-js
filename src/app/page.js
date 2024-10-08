'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState(false);
  const router = useRouter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Dhananjoy Dey is the name of the developer of this site</h1>
        <Link href="/products">View Products</Link>
        <button onClick={() => router.push('products')} >go to products page using use router</button>
      </main>
    </div>
  );
}
