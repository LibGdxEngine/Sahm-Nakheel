import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProjectImg1 from "../../public/images/projects/project1.png";
import ProjectImg2 from "../../public/images/projects/project2.png";
import ProjectImg3 from "../../public/images/projects/project3.png";
import ProjectImg4 from "../../public/images/projects/project4.png";
import ProjectImg5 from "../../public/images/projects/project5.png";
import ProjectImg6 from "../../public/images/projects/project6.png";
import ProjectImg from "../../public/images/projects/project2.png";

import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
       bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          priority={true}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
          alt={`${title}`}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark 
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={`${title}`}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Ahmed Fathy | Projects Page</title>
        <meta
          name="description"
          content="My Own ML and software development projects"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center over dark:text-light">
        <Layout className="pt-16 mb-16">
          <AnimatedText
            text={`Projects that fit the future`}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={`Routing Optimization Server`}
                link={`https://github.com/LibGdxEngine/Routing-Optimization-`}
                type={`Featured Project`}
                github={`/`}
                img={ProjectImg2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={`DATOS - NO-CODE Machine Learning framework`}
                link={`#`}
                type={`Featured Project`}
                github={`#`}
                img={ProjectImg6}
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title={`Automatic Images Colorization using GANs`}
                summary={`Image Colorization model using GANs is my graduation project`}
                link={`/`}
                type={`Side Project`}
                github={`/`}
                img={ProjectImg4}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={`Face Recognition app for blind people`}
                link={`/`}
                type={`Featured Project`}
                github={`/`}
                img={ProjectImg5}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={`Online courses website`}
                link={`https://itqan.vercel.app/`}
                type={`My own Project`}
                github={`https://github.com/LibGdxEngine/ItqanNextjs`}
                img={ProjectImg3}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={`Letaskono web app for Islamic marriage`}
                summary={`A feature-rich web App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail about each user and users can have real-time chat with eachother if they have agree.`}
                link={`https://frontend-dot-letaskono.oa.r.appspot.com/`}
                type={`Freelancing Project`}
                github={`https://frontend-dot-letaskono.oa.r.appspot.com/`}
                img={ProjectImg1}
              />
            </div>{" "}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
