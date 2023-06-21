import Twitter from "@/public/images/twitter.svg";
import { CONTRIBUTORS } from "@/constants";
import React, {
  useCallback,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";

export default function Contributors({
  active,
  ...props
}: {
  active: boolean;
}) {
  return active ? (
    <InfiniteScrollLoop>
      {CONTRIBUTORS.map((data, index) => (
        <ContributorCard key={index} data={data} />
      ))}
    </InfiniteScrollLoop>
  ) : null;
}

function ContributorCard({ data, ...props }: { data: any }) {
  return (
    <div className="flex flex-col text-white mt-3">
      <div className="">
        <img
          src={data.avatar}
          height={128}
          style={{
            filter: "drop-shadow(8px 8px 8px white) grayscale(60%)",
          }}
          className="rounded-md"
        />
      </div>
      <div className="info flex flex-row mt-3">
        <a href={data.twitter} target="_blank">
          <Twitter fill="white" width={32} height={32} />
        </a>
        <div className="grow ml-2 my-auto text-left">{data.name}</div>
      </div>
    </div>
  );
}

function InfiniteScrollLoop({
  surroundingBackup = 2,
  children,
}: {
  surroundingBackup?: number;
  children: React.ReactNode;
}): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null!);
  const scrollRef = useRef<HTMLDivElement>(null!);
  const [height, setHeight] = useState<number>(0);
  let timer = useMemo(
    () =>
      new PausableTimer(() => {
        if (scrollRef.current) scrollRef.current?.scrollBy(0, 1.2);
      }, 50),
    []
  );

  const backupHeight = height * surroundingBackup;

  const handleScroll = useCallback(() => {
    setHeight(contentRef.current.offsetHeight);
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (
        height !== 0 &&
        (scroll < backupHeight || scroll >= backupHeight + height)
      ) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  }, [height]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      scrollRef.current.scrollTop = backupHeight;
    }
  });

  useEffect(() => {
    // timer.start();
    handleScroll();
    return () => {
      timer.stop();
    };
  }, []);

  return (
    <div
      onScroll={handleScroll}
      ref={scrollRef}
      onMouseEnter={() => timer.stop()}
      onMouseLeave={() => timer.start()}
      className="absolute right-0 flex flex-col bg-black/80 overflow-y-scroll mt-3 h-[60vh] w-48 text-sm mx-auto border-2 border-white px-5 pb-2 rounded-lg cursor-auto no-scrollbar animate__animated animate__fadeInDown z-50"
    >
      <div className="">
        {Array(surroundingBackup)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{children}</div>
          ))}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{children}</div>
          ))}
      </div>
    </div>
  );
}

class PausableTimer {
  //@ts-ignore
  timer: NodeJS.Timer;
  action;
  interval;
  constructor(action: Function, interval: number = 50) {
    {
      this.action = action;
      this.interval = interval;
    }
  }
  start() {
    this.timer = setTimeout(() => {
      this.action();
      this.start();
    }, this.interval);
  }
  stop() {
    clearTimeout(this.timer);
  }
}
