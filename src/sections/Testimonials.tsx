import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Guilherme Rossoni",
    position: "Co-Founder & CEO @ Harpa Global",
    text: "Working with Prasant was a great experience. His openness, insightful questions, and collaborative approach helped us create a productive and engaging environment. I truly appreciate his time, support, and interest in Harpa Global.",
    avatar: memojiAvatar1,
  },
  {
    name: "Updating Soon",
    position: "Updating Soon",
    text: "Updating Soon",
    avatar: memojiAvatar2,
  },
  {
    name: "Yasin Shah",
    position: "Founder & CEO @ Technocolabs",
    text: "During the internship, he was found to be proactive, punctual, and inquisitive and demonstrated a good work ethic and interpersonal skills. Mr. Prasant.P carried out all the tasks that were assigned by the company and he made sure to put in extra hours of effort and completed the work within the mentioned deadlines. Our team grouped him up with a few other interns to complete the company’s major project and we found out that Mr. Prasant.P exhibited profound team management and communication skills that helped him throughout the completion of the project. Besides this, he gained experience in numerous concepts in Data Analysis that enhanced his existing skillset. I am impressed by his professionalism and dedication. I definitely believe that he would be an excellent fit and will bring great laurels to any university or company that he applies to, in the near future.",
    avatar: memojiAvatar3,
  },
  {
    name: "Updating Soon",
    position: "Updating Soon",
    text: "Updating Soon",
    avatar: memojiAvatar4,
  },
  {
    name: "Astle Russell",
    position: "Software Developer @ Deloitte",
    text: "Prasant is a highly dedicated and passionate developer with a strong academic background in Data Science. Known for his relentless work ethic and commitment to excellence, he consistently delivers high-quality solutions that blend analytical thinking with practical implementation. His proficiency in data-driven technologies, combined with a deep curiosity for problem-solving, enables him to build innovative and efficient applications. Whether working independently or collaborating with a team, Prasant brings a results-oriented mindset and a continuous drive to learn and grow in the ever-evolving field of technology.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Trusted Voices" 
          title="What Teammates and Mentors Say About Me" 
          description="Whether it&#39;s data modeling or debugging AI pipelines, here&#39;s how people describe our time working together."
        />
        
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:190s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card 
                    key={testimonial.name} 
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="max-h-full" 
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>           
            ))}   
          </div>
        </div>
      </div>
    </div>
  );
};
