// link-preview.tsx
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: "fixed" | "intrinsic" | "responsive";
  isStatic?: boolean;
  imageSrc?: string;
};

const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  const isMailto = url.startsWith("mailto:");
  let src: string | undefined;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  if (!isStatic && !isMailto) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else if (isStatic) {
    src = imageSrc;
  }

  return (
    <>
      {isMounted && !isMailto && src && (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
            alt="hidden image"
          />
        </div>
      )}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => setOpen(open)}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
          href={url}
          target="_blank" // Add target="_blank" to open link in new tab
        >
          {children}
        </HoverCardPrimitive.Trigger>

        {!isMailto && (
          <HoverCardPrimitive.Content
            className="transform-origin-var(--radix-hover-card-content-transform-origin)"
            side="top"
            align="center"
            sideOffset={10}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  className="shadow-xl rounded-xl"
                  style={{ x: translateX }}
                >
                  <Link
                    href={url}
                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                    style={{ fontSize: 0 }}
                    target="_blank" // Add target="_blank" to open link in new tab
                  >
                    {src && (
                      <Image
                        src={src}
                        width={width}
                        height={height}
                        quality={quality}
                        layout={layout}
                        priority={true}
                        className="rounded-lg"
                        alt="preview image"
                      />
                    )}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </HoverCardPrimitive.Content>
        )}
      </HoverCardPrimitive.Root>
    </>
  );
};

export default LinkPreview;
