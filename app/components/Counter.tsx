"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [showBtn, setShowBtn] = useState(true);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    if (counter <= 0) {
      return;
    }
    setCounter((prev) => prev - 1);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      const container = document.querySelector("#container") as HTMLDivElement;

      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          container.remove();
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
          container.remove();
        }
        deferredPrompt = null;
      });
    }
  };

  let deferredPrompt: any;

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }

    window.addEventListener("beforeinstallprompt", (e) => {
      if (/Android/i.test(navigator.userAgent)) {
        setShowBtn(true);
      }
      e.preventDefault();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      deferredPrompt = e;
    });
  }, []);

  return (
    <div className="relative">
      {showBtn && (
        <div
          id="container"
          className="w-1/3 max-[480px]:w-full m-auto flex items-center justify-between bg-gray-200 rounded-md py-4 px-2 absolute bottom-0 left-[50%] translate-x-[-50%]"
        >
          <div className="flex items-center">
            <Image
              src={"/icon-384x384.png"}
              alt="app icon"
              width={60}
              height={60}
            />
            <h1 className="text-black text-lg max-[480px]:text-base ml-3">
              NEXT PWA
            </h1>
          </div>

          <button
            id="installBTN"
            className="bg-blue-300 text-black px-6 py-2 rounded-2xl border-none"
            onClick={handleInstallClick}
          >
            Install
          </button>
        </div>
      )}
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="h-[70%] w-[30%] max-[500px]:w-[90%] bg-[#D3D3D3] rounded-lg flex items-center justify-center">
          <div className="text-[#000000] w-[90%] flex items-center justify-between">
            <button
              className="bg-red-600 border-none px-4 py-2 rounded-md"
              onClick={decrementCounter}
            >
              Decrement
            </button>
            <span className="text-4xl font-bold">{counter}</span>
            <button
              className="bg-green-600 border-none px-4 py-2 rounded-md"
              onClick={incrementCounter}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
