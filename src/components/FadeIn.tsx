import React, { useEffect, useState } from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: keyof JSX.IntrinsicElements;
  childTag?: keyof JSX.IntrinsicElements;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => void;
}

const FadeIn: React.FC<React.PropsWithChildren<Props>> = ({
  delay = 50,
  transitionDuration = 400,
  wrapperTag: WrapperTag = "div",
  childTag: ChildTag = "div",
  className = "",
  childClassName = "",
  visible = true,
  onComplete,
  children,
}) => {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const childCount = React.Children.count(children);

  useEffect(() => {
    if (!visible) return setMaxIsVisible(0); // Hide all if not visible

    let count = childCount;
    if (count === maxIsVisible) {
      setTimeout(() => onComplete?.(), transitionDuration);
      return;
    }

    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => setMaxIsVisible((prev) => prev + increment), delay);

    return () => clearTimeout(timeout);
  }, [childCount, visible, maxIsVisible, transitionDuration, delay, onComplete]);

  return (
    <WrapperTag className={className}>
      {React.Children.map(children, (child, i) => (
        <ChildTag
          className={childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
            transform: maxIsVisible > i ? "none" : "translateY(10px)",
            opacity: maxIsVisible > i ? 1 : 0,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
};

export default FadeIn;
