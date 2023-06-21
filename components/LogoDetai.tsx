import { PanelContext } from "@/constants";
import Information from "@/public/images/information.svg";
import React, { useContext, useEffect, useState } from "react";
import { GOD } from "@/constants";

export default function LogoDetail({
  setActive,
  active = false,
  ...props
}: {
  setActive: Function;
  active?: boolean;
}) {
  // const ref = useRef(null!);
  const { sponsor } = useContext(PanelContext);
  const { name, logo, desc, color, handleClick } = sponsor;

  return active ? (
    <div
      className="flex flex-col rounded-md  border-2  h-full w-80 p-4 animate__animated animate__zoomIn animate__faster"
      style={{
        borderColor: color,
        backgroundColor: `${color}33`,
        color: color,
      }}
    >
      <div className="flex flex-row justify-left ">
        <div className="logo my-auto">
          <img src={logo} alt={name} width={60} />
        </div>
        <div className="my-auto grow text-3xl mx-3">{name}</div>
      </div>
      <div
        className="desc text-md mx-2 mt-3 normal-case  leading-relaxed whitespace-normal break-all hyphens-auto"
        style={{ minHeight: (desc?.length / 24) * 30 }}
      >
        <TextFromRandomLetters text={desc} speed={1} />
      </div>
      <div className="mt-auto flex text-white mb-5">
        <a
          className="ml-auto mx-2 text-[#FFF8DC] z-30 cursor-pointer"
          onClick={handleClick}
        >
          [{name === "dfarchon" ? "Enter Game" : "View More"}]
        </a>
      </div>
    </div>
  ) : (
    <Information
      fill={color ?? "#cd5c5c"}
      width="96"
      height="96"
      className="animate__animated animate__zoomIn"
      onMouseOver={() => sponsor !== GOD && setActive(true)}
    />
  );
}

function TextFromRandomLetters({
  text,
  speed = 5,
  ...props
}: {
  text: string;
  speed?: number;
}) {
  const letters = "abcdefghijklmnopqrstuvwxyz+=-* "; //#%
  const increment = 2; // frames per step. Must be >2
  const [result, setResult] = useState("");
  let clen = text?.length;
  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";

  useEffect(() => {
    setTimeout(() => {
      animateIn(clen * increment + 1);
    }, 0);
  }, [text]);

  const animateIn = (i: number) => {
    setTimeout(function () {
      if (--i) {
        animateIn(i);
      }
      nextFrame();
      si = si + 1;
    }, speed);
  };

  const nextFrame = () => {
    for (var i = 0; i < clen - stri; i++) {
      //Random number
      var num = Math.floor(letters.length * Math.random());
      //Get random letter
      var letter = letters.charAt(num);
      block = block + letter;
    }
    if (si == increment - 1) {
      stri++;
    }
    if (si == increment) {
      // Add a letter;
      // every speed*10 ms
      fixed = fixed + text.charAt(stri - 1);
      si = 0;
    }
    setResult(fixed + block);
    block = "";
  };

  return <div className="overflow-hidden ">{result}</div>;
}

function TextFromRandomLetters2({
  text,
  speed = 50,
  ...props
}: {
  text: string;
  speed?: number;
}) {
  const letters = "&#*+%?£@§$";
  const increment = 8; // frames per step. Must be >2
  const [result, setResult] = useState("");
  let cl = 0;
  let fadeBuffer: { c: number; l: string }[] = [];

  useEffect(() => {
    setTimeout(animateIn, 100);
  }, [text]);

  const generateRandomString = function (length: number) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return random_text;
  };
  const animateIn = function () {
    if (cl < text.length) {
      cl = cl + 2;
      if (cl > text.length) {
        cl = text.length;
      }

      var message = generateRandomString(cl);
      setResult(message);

      setTimeout(animateIn, 20);
    } else {
      setTimeout(animateFadeBuffer, 20);
    }
  };

  const animateFadeBuffer = function () {
    if (fadeBuffer.length === 0) {
      for (var i = 0; i < text.length; i++) {
        fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: text.charAt(i),
        });
      }
    }

    var do_cycles = false;
    var message = "";

    for (var i = 0; i < fadeBuffer.length; i++) {
      var fader = fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += letters.charAt(Math.floor(Math.random() * letters.length));
      } else {
        message += fader.l;
      }
    }

    setResult(message);

    if (do_cycles === true) {
      setTimeout(animateFadeBuffer, 50);
    }
  };

  return <div className="overflow-hidden ">{result}</div>;
}
