// "use client"

// import { useEffect, useState } from 'react';

// type TelegramUser = {
//     id: number;
//     first_name?: string;
//     last_name?: string;
//     username?: string;
//     photo_url?: string;
//     language_code?: string;
//   };

// const useTelegramUser = () => {
//   const [user, setUser] = useState<TelegramUser | null>(null);

//   useEffect(() => {
//     if ((window as any).Telegram?.WebApp) {
//       const initData = (window as any).Telegram.WebApp.initDataUnsafe;

//       if (initData?.user) {
//         setUser(initData.user);
//       }
//     }
//   }, []);

//   return user;
// };

// export default useTelegramUser;
