import { SectionHeader } from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolboxItems =[
  {
    title:"JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title:"HTML",
    iconType: HTMLIcon,
  },
  {
    title:"CSS",
    iconType: CssIcon,
  },
  {
    title:"React",
    iconType: ReactIcon,
  },
  {
    title:"Chrome",
    iconType: ChromeIcon,
  },
  {
    title:"Github",
    iconType: GithubIcon,
  }
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photography',
    emoji: '📷',
  },
  {
    title: 'Gaming',
    emoji: '📷',
  },
  {
    title: 'Reading',
    emoji: '🎨',
  },
  {
    title: 'Fitness',
    emoji: '📷',
  },
  {
    title: 'Hiking',
    emoji: '📷',
  },
  {
    title: 'Music',
    emoji: '🎨',
  }
]

export const AboutSection = () => {
  return (
   <div className="py-20">
    <div className="container">
    <SectionHeader 
      eyebrow="About Me" 
      title="A Glimpse Into My World" 
      description="Learn more about who I am, what I do, and What inspires me" 
    />
    <div className="mt-20">
      <Card>
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2">
            <StarIcon classname="size-9 text-emerald-300"/>
            <h3 className="font-serif text-3xl">My Reads</h3>
          </div>
          <p className="text-sm text-white/60 mt-2">
            Explore the books shaping my perspectives.
          </p>
        </div>
        <Image src={bookImage} alt="Book cover" />
      </Card>
      <Card>
        <div>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>Explore the technologies and tools I use to craft exceptional digital experiences .</p>
        </div>
        <div>
          {toolboxItems.map(item => (
            <div key={item.title}>
              <TechIcon component={item.iconType}/>
              <span>{item.title}</span>
              </div>

          ))}
        </div>
      </Card>
      <Card>
        <div>
            <StarIcon />
            <h3>Beyond the Code</h3>
            <p>Explore my Interests and Hobbies beyond the digital realm .</p>
        </div>
        <div>
          {hobbies.map(hobby => (
            <div key={hobby.title}>
              <span>{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </div>

          ))}
        </div>
      </Card>
      <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="smiling memoji" />
      </Card>
      </div>
    </div>
   </div>
  );
};
