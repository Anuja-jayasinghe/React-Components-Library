"use client";

/**
 * Social Icons Marquee Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

import React, { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github.svg",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin.svg",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x.svg",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram.svg",
  },
  {
    href: "https://discord.com",
    label: "Discord",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord.svg",
  },
  {
    href: "https://facebook.com",
    label: "Facebook", 
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook.svg",
  },
];

const SocialIconsMarquee = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [centeredIndex, setCenteredIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let offset = 0.5;
    const speed = 1.2;

    const scroll = () => {
      offset += speed;
      if (offset >= content.scrollWidth / 2) {
        offset = 0;
      }
      content.style.transform = `translateX(-${offset}px)`;

      // Center icon logic
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      let minDist = Infinity;
      let closestIdx = null;
      const iconNodes = Array.from(content.children);
      iconNodes.forEach((node, idx) => {
        const rect = node.getBoundingClientRect();
        const iconCenter = rect.left + rect.width / 2;
        const dist = Math.abs(centerX - iconCenter);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });
      setCenteredIndex(closestIdx);

      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  const duplicatedLinks = [...socialLinks, ...socialLinks];

  return (
    <div
      ref={containerRef}
      className="overflow-hidden h-20 bg-transparent w-full max-w-sm sm:max-w-md mx-auto"
    >
      <div
        ref={contentRef}
        className="flex gap-10 w-max"
        style={{ willChange: "transform" }}
      >
        {duplicatedLinks.map((link, index) => {
          const isCenter = centeredIndex === index;
          return (
            <a
              key={`${link.label}-${index}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-11 h-11 group/link flex-shrink-0${
                isCenter ? " mobile-center" : ""
              }`}
              aria-label={link.label}
            >
              <img
                src={link.blackIcon}
                alt={`${link.label} icon`}
                className={`w-full h-full transition-all duration-300 group-hover/link:opacity-0${
                  isCenter ? " opacity-0" : ""
                }`}
              />
              <img
                src={link.colorIcon}
                alt={`${link.label} icon colored`}
                className={`absolute inset-0 w-full h-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:scale-110${
                  isCenter ? " opacity-100 scale-110" : ""
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIconsMarquee;
