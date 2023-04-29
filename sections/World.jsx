"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

import { TitleText, TypingText } from "@/components";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full "
            style={{
              boxShadow: "1px 1px 30px #e7664757 ,-1px -1px 30px #e7664757 ",
            }}
          />
        </div>

        <div className="absolute bottom-20 lg:left-40 -left-3  lg:w-[240px] w-[175px] lg:h-[170px] h-[110px] p-[4px] rounded-2xl bg-[#5c4572]">
          <img
            src="Mask Group.png"
            alt="people"
            className="w-full h-full "
            style={{
              boxShadow:
                "1px 1px 30px hsl(295deg 43.48% 28.21% / 43%) ,-1px -1px 30px hsl(295deg 43.48% 28.21% / 43%) ",
            }}
          />
          <div className="flex flex-col items-center -mt-[70px]">
            <div className="flex items-center">
              <img
                src="/Ellipse 39.png"
                alt="people"
                className="w-[24px] h-[24px] "
              />
              <img
                src="/Ellipse 40.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[10px] "
              />
              <img
                src="/Ellipse 41.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[10px] "
              />
              <p className="text-white text-[12px] leading-[15px] font-[400] ml-[10px] ">
                + 264 has joined
              </p>
            </div>
            <h4 className="text-white text-[18px] font-bold leading-[23px] mt-[10px] ">
              The Upside Down
            </h4>
          </div>
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full "
            style={{
              boxShadow:
                "1px 1px 30px rgb(229 173 173 / 39%) ,-1px -1px 30px rgb(229 173 173 / 39%)",
            }}
          />
        </div>
        <div className="absolute top-20 lg:right-60 -right-3 lg:w-[240px] w-[175px] lg:h-[170px] h-[110px] p-[4px] rounded-2xl bg-[#5c4572]">
          <img
            src="cart2.png"
            alt="people"
            className="w-full h-full rounded-[22px] "
            style={{
              boxShadow:
                "1px 1px 30px hsl(220deg 72.03% 25.91% / 48%) ,-1px -1px 30px hsl(220deg 72.03% 25.91% / 48%) ",
            }}
          />
          <div className="flex flex-col items-center -mt-[70px]">
            <div className="flex items-center">
              <img
                src="/Ellipse 39.png"
                alt="people"
                className="w-[24px] h-[24px] "
              />
              <img
                src="/Ellipse 40.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[10px] "
              />
              <img
                src="/Ellipse 41.png"
                alt="people"
                className="w-[24px] h-[24px] -ml-[10px] "
              />
              <p className="text-white text-[12px] leading-[15px] font-[400] ml-[10px] ">
                + 264 has joined
              </p>
            </div>
            <h4 className="text-white text-[18px] font-bold leading-[23px] mt-[10px] ">
              Hawkins Labs
            </h4>
          </div>
        </div>
        <div className="absolute top-1/2 left-[45%] right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full "
            style={{
              boxShadow:
                "1px 1px 30px hsl(203.33deg 17.48% 39.11%) ,-1px -1px 30px hsl(203.33deg 17.48% 39.11%) ",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
