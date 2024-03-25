import { useEffect, useRef, useState } from "react";

const useVisibility = () => {
  const myRef = useRef<HTMLDivElement | null>(null); // HTMLDivElement 타입을 명시합니다.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isElementInViewport = () => {
        if (myRef.current) {
          const rect = myRef.current.getBoundingClientRect();

          return (
            rect.top <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
          );
        }

        return false;
      };

      // isVisible 상태가 false이고 요소가 뷰포트에 있는 경우에만 isVisible 상태를 true로 변경합니다.
      if (!isVisible && myRef.current && isElementInViewport()) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref: myRef, isVisible }; // 항상 MutableRefObject<HTMLDivElement | null> 타입을 반환합니다.
};

export default useVisibility;
