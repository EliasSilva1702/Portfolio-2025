"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of Experience",
  },
  {
    num: 15,
    text: "Projects Completed",
  },
  {
    num: 3,
    text: "Technologies Mastered",
  },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:pt-12 xl:pb-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 justify-center max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 xl:gap-4"
            >
              {/* Animación del número */}
              <CountUp
                end={stat.num}
                duration={2}
                delay={0.5}
                className="text-4xl xl:text-6xl font-extrabold text-white"
              />
              {/* Descripción del texto */}
              <span className="text-base xl:text-lg text-white/80 leading-snug">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
