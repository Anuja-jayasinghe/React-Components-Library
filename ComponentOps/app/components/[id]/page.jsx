"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Code, Check } from "lucide-react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Import your actual components here
import SocialIconsCircle from "./components/SocialIconsCircle"
import SocialIconsMarquee from "./components/SocialIconsMarquee"

export default function ComponentDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState("preview")
  const [copied, setCopied] = useState(false)

  // Component registry - add your components here
  const componentRegistry = {
    socialiconscircle: {
      name: "Social Icons Circle",
      description: "A rotating circle of social media icons that reveals color on hover.",
      category: "Social",
      component: SocialIconsCircle,
      code: `/**
 * Social Icons Circle Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

"use client";
import React, { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/github.svg",
    angle: 0,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/linkedin.svg",
    angle: 60,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/x.svg",
    angle: 120,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/instagram.svg",
    angle: 180,
  },
  {
    href: "https://discord.com",
    label: "Discord",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/discord.svg",
    angle: 240,
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    blackIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-black.svg",
    whiteIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook-white.svg",
    colorIcon: "https://raw.githubusercontent.com/Anuja-jayasinghe/React-Components-Library/master/Social_IconOptions/socialIcons/facebook.svg",
    angle: 300,
  },
];

const SocialIconsCircle = () => {
  const radius = 80;
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    let start = null;
    const duration = 25000;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const rot = ((elapsed % duration) / duration) * 360;
      setRotation(rot);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-64 h-64 group">
        <div
          className="absolute inset-0"
          style={{
            transform: \`rotate(\${rotation}deg)\`
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: \`translate(-50%, -50%) rotate(\${link.angle}deg) translateY(-\${radius}px) rotate(\${-link.angle - rotation}deg)\`
              }}
            >
              <div className="relative w-11 h-11 group/link">
                <img
                  src={link.blackIcon}
                  alt={\`\${link.label} icon\`}
                  className="w-full h-full transition-all duration-300 group-hover/link:opacity-0"
                />
                <img
                  src={link.colorIcon}
                  alt={\`\${link.label} icon colored\`}
                  className="absolute inset-0 w-full h-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:scale-110"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialIconsCircle;`,
      usage: `import SocialIconsCircle from './components/SocialIconsCircle'

// Basic usage
<SocialIconsCircle />

// The component automatically rotates and shows color on hover
// Customize the social links by modifying the socialLinks array
// Adjust rotation speed by changing the duration value`,
      props: [
        { name: "radius", type: "number", default: "80", description: "Radius of the circle in pixels" },
        {
          name: "duration",
          type: "number",
          default: "25000",
          description: "Duration for one full rotation in milliseconds",
        },
        {
          name: "socialLinks",
          type: "array",
          default: "predefined",
          description: "Array of social link objects with href, label, and icon URLs",
        },
      ],
    },
    socialiconsmarquee: {
      name: "Social Icons Marquee",
      description:
        "A horizontally scrolling marquee of social media icons that reveals color when centered or hovered.",
      category: "Social",
      component: SocialIconsMarquee,
      code: `/**
 * Social Icons Marquee Component
 * Created by Anuja Jayasinghe [anujajay.com]
 * https://github.com/Anuja-jayasinghe/React-Components-Library
 */

"use client";
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
      content.style.transform = \`translateX(-\${offset}px)\`;

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
      className="overflow-hidden h-40 bg-transparent w-full max-w-sm sm:max-w-md mx-auto"
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
              key={\`\${link.label}-\${index}\`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={\`relative w-11 h-11 group/link flex-shrink-0\${
                isCenter ? " mobile-center" : ""
              }\`}
              aria-label={link.label}
            >
              <img
                src={link.blackIcon}
                alt={\`\${link.label} icon\`}
                className={\`w-full h-full transition-all duration-300 group-hover/link:opacity-0\${
                  isCenter ? " opacity-0" : ""
                }\`}
              />
              <img
                src={link.colorIcon}
                alt={\`\${link.label} icon colored\`}
                className={\`absolute inset-0 w-full h-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:scale-110\${
                  isCenter ? " opacity-100 scale-110" : ""
                }\`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIconsMarquee;`,
      usage: `import SocialIconsMarquee from './components/SocialIconsMarquee'

// Basic usage
<SocialIconsMarquee />

// The component automatically scrolls horizontally
// Icons show color effect when centered or on hover
// Customize the social links by modifying the socialLinks array`,
      props: [
        { name: "speed", type: "number", default: "1.2", description: "Scrolling speed of the marquee" },
        { name: "gap", type: "string", default: "gap-10", description: "Gap between icons (Tailwind class)" },
        {
          name: "socialLinks",
          type: "array",
          default: "predefined",
          description: "Array of social link objects with href, label, and icon URLs",
        },
      ],
    },
  }

  const component = componentRegistry[params.id]

  if (!component) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Component Not Found</h1>
          <Link href="/components" className="text-blue-400 hover:text-blue-300">
            ← Back to Components
          </Link>
        </div>
      </div>
    )
  }

  const ComponentToRender = component.component

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header activePage="components" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/components"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Components
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{component.name}</h1>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {component.category}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => copyToClipboard(component.code)}
                className="flex items-center px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
          <p className="text-xl text-gray-300">{component.description}</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {["preview", "code", "usage", "props"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          {activeTab === "preview" && (
            <div className="p-8">
              <div
                className="rounded-lg p-8 border border-gray-700"
                style={{
                  backgroundImage: 'url(/gradient.svg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <ComponentToRender />
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="relative">
              <button
                onClick={() => copyToClipboard(component.code)}
                className="absolute top-4 right-4 p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors z-10"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                <code>{component.code}</code>
              </pre>
            </div>
          )}

          {activeTab === "usage" && (
            <div className="relative">
              <button
                onClick={() => copyToClipboard(component.usage)}
                className="absolute top-4 right-4 p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors z-10"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                <code>{component.usage}</code>
              </pre>
            </div>
          )}

          {activeTab === "props" && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Prop</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Type</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Default</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop, index) => (
                      <tr key={index} className="border-b border-gray-700/50">
                        <td className="py-3 px-4 text-blue-400 font-mono text-sm">{prop.name}</td>
                        <td className="py-3 px-4 text-purple-400 font-mono text-sm">{prop.type}</td>
                        <td className="py-3 px-4 text-gray-400 font-mono text-sm">{prop.default}</td>
                        <td className="py-3 px-4 text-gray-300 text-sm">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer size="small" />
    </div>
  )
}
