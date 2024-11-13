import { APP_NAME } from "@/lib/constatns";
import Image from "next/image";
import Link from "next/link";


export default function AppLogo() {
    return (
    <Link href="/" className="flex-start">
        <div className="flex flex-row items-end space-x-2">
        <Image
            className="dark:invert"
            src="./pirates.svg"
            alt={`${APP_NAME} logo` }
            width={180}
            height={38}
            priority
        />
        <span className="text-xl">Real Estate and pirates</span> 
        </div>
    </Link>
      )
}




        