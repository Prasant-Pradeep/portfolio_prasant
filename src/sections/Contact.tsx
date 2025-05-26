import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-50">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-30">

          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-40">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&#39;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&#39;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <a
                href="mailto:pcprasant376@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Prasant%2C%20I'd%20love%20to%20discuss%20a%20potential%20project%20with%20you!"
                className="inline-flex items-center gap-2 px-6 h-12 w-max text-white bg-gray-900 rounded-xl border border-gray-950 hover:bg-gray-800 transition relative z-50"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
