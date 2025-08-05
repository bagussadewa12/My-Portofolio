// import Lanyard from './components/Lanyard/Lanyard';
import RotatingText from './components/RotatingText/RotatingText';
import SplitText from './components/SplitText/SplitText';
import BlurText from './components/BlurText/BlurText';
import Squares from './components/Squares/Squares';
import GradientText from './components/GradientText/GradientText';
import { Timeline } from './components/Timeline/Timeline';
import ScrollVelocity from './components/ScrollVelocity/ScrollVelocity';
import Image from 'next/image';
// import ProfileCard from './components/Profile/profilecard';
import Lanyard from './components/Lanyard/Lanyard';

export default function Home() {
  const data = [
    {
      title: '2023',
      content: (
        <div>
          <p className="mb-5 text-xs font-normal text-white md:text-sm dark:text-neutral-200 ">
            Bravorental is a web-based car rental platform I developed to simplify the process of renting vehicles throughout Bali. Built with PHP and styled using the Bootstrap framework, the website allows users to explore a range of
            cars, check real-time availability, and place bookings online. The system also includes a dedicated admin dashboard to manage car listings, monitor rental activity, and streamline overall operations. Bravorental aims to support
            both local and tourist transportation needs with a user-friendly and efficient digital solution.
          </p>
          <div className="flex gap-4">
            <Image src="/assets/icons/icons-bootstrap.png" alt="Bootstrap Icon" width={50} height={50} />
            <Image src="/assets/icons/icons-php.png" alt="Bootstrap Icon" width={50} height={50} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              key="pblgenius"
              src={'/assets/images/foto-2.png'}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="foto-2"
              src="/assets/images/foto1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="foto-3"
              src="/assets/images/foto-3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="foto-4"
              src="/assets/images/foto-4.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2024',
      content: (
        <div>
          <p className="mb-5 text-2xs font-normal text-white md:text-sm dark:text-neutral-200">
            LapangKita is a web-based application I built using React.js, Chakra UI, and Tailwind CSS to simplify the process of booking futsal fields online. The platform allows users to view available time slots and make reservations
            based on their preferred schedule. With a clean and responsive interface, LapangKita provides a seamless experience for both players and venue owners, replacing manual bookings with an efficient and modern digital system.
          </p>

          <div className="flex gap-2 mb-1">
            <Image src="/assets/icons/icons-react.png" alt="Bootstrap Icon" width={50} height={50} />
            <Image src="/assets/icons/icons-chakraui.png" alt="Bootstrap Icon" width={50} height={50} />
            <Image src="/assets/icons/icons-tailwind.png" alt="Bootstrap Icon" width={50} height={50} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              key="lapangkita1"
              src="/assets/images/lapangkita1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="lapangkita2"
              src="/assets/images/lapangkita2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="lapangkita3"
              src="/assets/images/lapangkita3.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="lapangkita4"
              src="/assets/images/lapangkita4.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2025',
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-white md:text-sm dark:text-neutral-200">
            Salon Asih is a web-based application I developed using Laravel and styled with Bootstrap to facilitate online booking for salon services. Users can explore available treatments, choose their preferred schedule, and confirm
            their booking by making a down payment (DP) directly through the website. This system enhances user convenience while helping salon staff manage appointments efficiently and minimize no-shows. Built with a focus on reliability
            and ease of use, Salon Asih provides a modern digital solution tailored to the needs of both salon owners and clients.
          </p>
          <div className="flex gap-4">
            <Image src="/assets/icons/icons-laravel.png" alt="Bootstrap Icon" width={50} height={50} />
            <Image src="/assets/icons/icons-bootstrap.png" alt="Bootstrap Icon" width={50} height={50} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              key="salon1"
              src="/assets/images/salon1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="salon-2"
              src="/assets/images/salon2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="salon-3"
              src="/assets/images/salon3.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              key="salon-4"
              src="/assets/images/salon4.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Certificate',
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            I&apos;m thrilled to have successfully completed the VOCASIA TECH ACADEMY: Full Stack Web Development program as part of Studi Independen Bersertifikat (MSIB) Batch 7, supported by Kampus Merdeka. From September to December
            2024, this journey has been filled with valuable learning experiences, challenges, and growth. I&apos;ve gained deeper knowledge in web development, problem-solving, and collaboration—skills that will drive me forward in my
            career. Huge thanks to my mentors, peers, and everyone who supported me along the way! Excited for the next steps and opportunities ahead. 🚀
          </p>

          <div className="grid grid-cols-2 gap-4 ">
            <Image
              key="salon1"
              src="/assets/images/msib.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />

            <div className="flex gap-4 self-start cursor-pointer">
              <a href="https://github.com/bagussadewa12" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/icons-github.png" alt="GitHub Icon" width={50} height={50} className="object-contain" />
              </a>
              <a href="https://www.instagram.com/bagussadewaaa_/" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/icons-instagram.png" alt="gmail Icon" width={50} height={50} className="object-contain" />
              </a>
              <a href="https://www.linkedin.com/in/bagus-sadewa-105365284/" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/icons-linkedin.png" alt="linkedin Icon" width={50} height={50} className="object-contain" />
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className=" min-h-screen oferflow-xhidden bg-[#191D1F]">
      <div className="absolute right-0 top-0 left-0 bottom-0  w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#244267"
        />
      </div>

      <div className="container mx-auto h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center">
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start h-full">
            <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
                <h1 className="text-md sm:text-xl lg:text-2xl font-bold text-white">I’m Ready For Job</h1>
                <RotatingText
                  texts={['Web Developer', 'UI/UX Designer', 'Frontend']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#58A5DF] text-black overflow-hidden py-1 inline-flex rounded-lg text-base sm:text-xl font-bold transition-all"
                  staggerFrom={'last'}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              <div className="mt-2 sm:mt-4 lg:py-10 flex flex-col items-start text-left w-full max-w-4xl mx-auto">
                <SplitText
                  text="I'm Bagus Sadewa"
                  className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-white"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />

                <SplitText
                  text="Frontend Developer"
                  className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-[#58A5DF] mt-2"
                  delay={75}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />

                <BlurText
                  text="Hi, I'm Bagus Sadewa — a web developer passionate about crafting fast, clean, and interactive experiences. I turn ideas into reality through structured code and intuitive, responsive UI design. I'm always learning to create solutions that are both useful and impactful."
                  delay={80}
                  animateBy="words"
                  direction="top"
                  className="text-sm sm:text-md md:text-lg lg:text-xl text-white mt-4 text-left"
                />

                <div className="mt-6">
                  <a href="https://wa.me/6281338057046?text=Halo,%20saya%20tertarik%20dengan%20booking%20lapangan" target="_blank" rel="noopener noreferrer">
                    <GradientText
                      colors={['#183CF2', '#2477DC', '#244267', '#4079ff', '#40ffaa']}
                      animationSpeed={3}
                      showBorder={false}
                      className="text-sm md:text-base lg:text-lg text-shadow-md rounded-lg border px-4 md:px-6 py-2 md:py-3 border-[#27A2D3]"
                    >
                      Contact Us
                    </GradientText>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-6 h-full">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
      <ScrollVelocity texts={['Web Developer', 'UI/UX Designer']} className="custom-scroll-text text-white" />
      <Timeline data={data} />
    </div>
  );
}
