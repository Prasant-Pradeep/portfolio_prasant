import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";

import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML",       iconType: HTMLIcon      },
  { title: "CSS",        iconType: CssIcon       },
  { title: "React",      iconType: ReactIcon     },
  { title: "Chrome",     iconType: ChromeIcon    },
  { title: "Github",     iconType: GithubIcon    },
];

const hobbies = [
  { title: "Painting",    emoji: "🎨", left: "5%",  top: "5%"  },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%"  },
  { title: "Gaming",      emoji: "🎮", left: "10%", top: "35%" },
  { title: "Hiking",      emoji: "🥾", left: "35%", top: "40%" },
  { title: "Music",       emoji: "🎵", left: "70%", top: "45%" },
  { title: "Fitness",     emoji: "💪", left: "5%",  top: "65%" },
  { title: "Reading",     emoji: "📚", left: "45%", top: "70%" },
];

export const AboutSection = () => (
  <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />

      <div className="mt-20 flex flex-col gap-8">
        {/* top row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-2">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>

          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6 -translate-x-1/2"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
        </div>

        {/* bottom row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((h) => (
                <div
                  key={h.title}
                  className="absolute inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"
                  style={{ left: h.left, top: h.top }}
                >
                  <span className="font-medium text-gray-950">
                    {h.title}
                  </span>
                  <span>{h.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-2 outline-gray-950/30">
              <Image
                src={smileMemoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
