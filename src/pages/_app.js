import { useState,useEffect } from "react";
import RootLayout from "@/components/RootLayout.js";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeProvider, useTheme } from 'next-themes'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
})


  

{
  const { theme, setTheme } = useTheme();

  const [mounted,setMounted] = useState(false);
  useEffect(()=>{

    setMounted(true)

  },[])

   if(!mounted){
    return <>
     <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    
    </>
   }

  return (
    <div className="font-bodyFont">
       <ThemeProvider  enableSystem={true} attribute="class" >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      </ThemeProvider>
    </div>
  );
}
