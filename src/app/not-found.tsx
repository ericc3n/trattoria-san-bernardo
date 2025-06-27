"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@/sass/_global.scss";
import Navbar from "@/ui/Navbar/Navbar";

const START_SECOND = 5;

export default function Custom404() {
  const router = useRouter();
  const [seconds, setSeconds] = useState<number>(START_SECOND);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      router.push('/');
    }, START_SECOND * 1000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div id="not-found">
      <Navbar />
      <div style={{ textAlign: "center", marginBlock: "56px" }}>
        <h4>Questa pagina non esiste</h4>
        <p className="mt-xxs">
          Verrai reindirizzato tra <b>{seconds} second{seconds === 1 ? 'o' : 'i'}</b>...
        </p>
      </div>
    </div>
  );
}