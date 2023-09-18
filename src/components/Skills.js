import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
  shadow-dark absolute dark:text-dark dark:bg-light
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold
  "
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:circularDarkLg
      md:bg-circularLightMd md:dark:circularDarkMd
      sm:bg-circularLightSm sm:dark:circularDarkSm
      ">
        {/* Center */}
        <Skill name={`ML`} x={`0vw`} y={`0vw`} />
        {/* First Circle */}
        <Skill name={`Python`} x={`-5.5vw`} y={`-6.8vw`} />
        <Skill name={`Java`} x={`13vw`} y={`-0vw`} />
        <Skill name={`MongoDB`} x={`3vw`} y={`7.5vw`} />

        {/* Second Circle */}
        <Skill name={`AWS`} x={`-19vw`} y={`2vw`} />
        <Skill name={`Supervised ML`} x={`11vw`} y={`-10vw`} />
        <Skill name={`Unupervised ML`} x={`0vw`} y={`12vw`} />

        {/* Third Circle */}
        <Skill name={`PyTorch`} x={`-3vw`} y={`-15vw`} />
        <Skill name={`TDD`} x={`-24vw`} y={`6vw`} />
        <Skill name={`Agile`} x={`24vw`} y={`6vw`} />
        <Skill name={`Deep learning`} x={`-19vw`} y={`-10vw`} />
        <Skill name={`Computer vision`} x={`23vw`} y={`6vw`} />
        {/* Fourth Circle */}
        <Skill name={`Node js`} x={`-20vw`} y={`15vw`} />
        <Skill name={`Flask`} x={`0vw`} y={`19vw`} />
        <Skill name={`Tensorflow`} x={`20vw`} y={`15vw`} />
        <Skill name={`Scikit-learn`} x={`31vw`} y={`-5vw`} />
        <Skill name={`Problem Solving`} x={`-31vw`} y={`-5vw`} />
      </div>
    </>
  );
};

export default Skills;
