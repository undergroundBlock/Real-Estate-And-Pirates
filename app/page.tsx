"use client";

import AppLogo from "@/components/shared/app-logo";
import CheckFootprint from "@/components/shared/CheckFootprint";
import NavigationBar from "@/components/shared/NavigationBar";
import TabContainer from "@/components/shared/TabContainer";
import { TabProvider } from "@/contexts/TabContext";
import WebApp from "@twa-dev/sdk";
// import Image from "next/image";
import { useEffect, useState } from "react";
// const prefix = 'https://undergroundblock.github.io/Real-Estate-And-Pirates';

interface userData {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_premium: boolean;
}

export default function Home() {
  
  const [userData, setUserData] = useState<userData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as userData);
    }
  }, []);

  return (
    <TabProvider>
      <main className="min-h-screen bg-black text-white">
        <CheckFootprint />
        <TabContainer />
        <NavigationBar />
      </main>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
        <AppLogo />
        
        <div>
        {userData ? (
          <p>User ID: {userData.id}</p>
          ): (
          <p>Not logged in</p>
          )
        }
        </div>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        
      </main>
 
    </div>
    </TabProvider>
  );
}
