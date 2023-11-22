import Container from "./Container";
import Image from "next/image";
import vert from "@/public/img/vert.png";
import bg_pro from "@/public/img/bg-pro.png";
import box from "@/public/img/box.png";
import box2 from "@/public/img/box2.png";
import img from "@/public/img/Image.png";
import icon1 from "@/public/img/icon1.png";
import icon2 from "@/public/img/icon2.png";
import icon3 from "@/public/img/icon3.png";
import launchpad from "@/public/img/launchpad.png";
import launchpad2 from "@/public/img/launchpad2.png";
import launchpad3 from "@/public/img/launchpad3.png";
import icon from "@/public/img/icon.png";
import ai1 from "@/public/img/ai1.png";
import hand from "@/public/img/hand.png";
import circle from "@/public/img/circle.png";
import background from "@/public/img/background.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Creon = () => {
  return (
    <Container>
      <div className="flex flex-col gap-8 items-start xl:px-[14rem] lg:px-0 py-14">
        <h1 className="lg:hidden md:flex hidden text-[39px] leading-[2.9rem]">
          CREON PASS NFT
        </h1>
        <h1 className="md:hidden flex text-[39px] leading-[2.9rem]">
          CREON PASS
          <br /> NFT
        </h1>
        <p className="lg:hidden flex font-[400] italic text-sm bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
          Access to confidential AI tools enabling business optimization and
          development. Only NFT holders will have the ability to use a given
          tool.
        </p>
        <Image
          className="md:hidden w-full object-contain"
          src={vert}
          alt=""
        />
        <div className="md:grid md:grid-cols-6 lg:grid lg:grid-cols-2 lg:items-center gap-4 text-white items-start">
          <div className="w-full md:col-span-2 lg:col-span-1 flex flex-col gap-8 items-start justify-center">
            <h1 className="lg:flex hidden text-[39px] leading-[2.9rem]">
              CREON PASS
              <br /> NFT
            </h1>
            <p className="xl:flex hidden font-[400] italic text-sm bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </p>
            <p className="xl:hidden lg:flex hidden font-[400] italic text-sm bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
              Access to confidential AI tools enabling business optimization and
              development. Only NFT holders will have the ability to use a given
              tool.
            </p>
            <ul className="xl:hidden font-[700] italic text-xs lg:flex md:hidden flex flex-col gap-2">
              <li className="border py-1 px-2 rounded border-[#13171D]">
                Prospect to derive financial benefits through the redistributed
                profit generated from AI tools, but only when the majority of
                NFT holders decide to release the tool publicly.
              </li>
              <ul className="flex gap-2">
                <li className="border py-1 px-2 rounded border-[#13171D]">
                  The possibility of allocating investments into new,
                  exceptional tokenized AI tools through Creon Launchpad.
                </li>
                <li className="border py-1 px-2 rounded border-[#13171D]">
                  Early access to allocations in inspiring tokenized projects,
                  real businesses based on AI.
                </li>
              </ul>
            </ul>
            <ul className="hidden font-[700] italic text-xs xl:flex flex-col gap-2">
              <li className="border py-1 px-2 rounded border-[#13171D]">
                Pre-launch investment opportunities for upcoming AI projects
              </li>
              <li className="border py-1 px-2 rounded border-[#13171D]">
                Free and early access to Creon built AI projects
              </li>
              <li className="border py-1 px-2 rounded border-[#13171D]">
                Higher allocation limits on the Creon AI Launchpad
              </li>
              <li className="border py-1 px-2 rounded border-[#13171D]">
                Revenue share distribution from Creon built AI projects
              </li>
            </ul>
            <ul className="lg:hidden md:flex col-span-2 font-[700] italic text-xs hidden flex-col gap-8">
              <li className="border py-1 px-2 rounded border-[#13171D]">
                Prospect to derive financial benefits through the redistributed
                profit generated from AI tools, but only when the majority of
                NFT holders decide to release the tool publicly.
              </li>
              <li className="border py-1 px-2 rounded border-[#13171D]">
                The possibility of allocating investments into new, exceptional
                tokenized AI tools through Creon Launchpad.
              </li>
              <li className="border py-1 px-2 rounded border-[#13171D]">
                Early access to allocations in inspiring tokenized projects,
                real businesses based on AI.
              </li>
            </ul>
            <span className="font-[400] italic text-xs text-center bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] lg:w-[50%] w-full py-2 rounded">
              Buy Creon Pass
            </span>
          </div>
          <Image
            className="md:flex hidden lg:col-span-1 md:col-span-4 w-full object-contain"
            src={vert}
            alt=""
          />
        </div>
      </div>
      <div className="w-full xl:grid xl:grid-cols-6 md:flex md:flex-col text-white xl:px-[14rem] lg:px-0 pb-16">
        <h1 className="text-[36px] xl:col-span-4 xl:mb-20 md:mb-1">
          PROFITING THROUGH
        </h1>
        <h1 className="xl:hidden text-[28px] text-right mb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">
          AI INNOVATION & DECENTRALIZATION
        </h1>
        <div className="w-full col-span-6 grid grid-cols-6 items-center">
          <Image src={bg_pro} alt="" className="hidden xl:flex col-span-4" />
          <Image
            src={box2}
            alt="box"
            className="hidden xl:hidden lg:flex g:col-span-4 col-span-4"
          />
          <Image
            src={box}
            alt="box"
            className="lg:hidden flex col-span-6 object-cover w-full"
          />
          <div className="hidden col-span-2 xl:flex flex-col items-start justify-center gap-5 px-4 ml-4">
            <h1 className="font-[400] italic text-sm">
              The dynamic community driven business model of the future.
            </h1>
            <p className="font-[700] italic text-xs">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
          </div>
          <div className="xl:hidden lg:col-span-2 col-span-6 flex flex-col items-start justify-center gap-5 lg:px-4 lg:ml-4 pt-8">
            <h1 className="font-[400] italic text-md">
              A Dynamic Business Model for Sustainable Growth and Community
              Engagement
            </h1>
            <p className="font-[700] italic text-sm lg:leading-6">
              At Creon, we merge AI tools with the crypto and NFT markets,
              leveraging a dynamic business model to generate profits. Our
              commitment to innovation and decentralization allows us to
              strengthen our market position and foster a sustainable ecosystem.{" "}
              <br />
              We empower our community, ensuring transparency and actively
              involving NFT holders in our success.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start xl:px-[14rem] lg:px-0 py-16">
        <div className="col-span-1 flex flex-col items-start justify-center gap-2">
          <div className="xl:flex hidden">
            <p className=" text-[21px] leading-[2rem]">
              OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS{" "}
              <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
                WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS
              </span>
            </p>
          </div>
          <p className="xl:hidden lg:flex hidden text-[21px] leading-[2rem] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
            OUR MISSION IS TO PROVIDE UNIQUE, CONFIDENTIAL AI-BASED TOLS, TO
            WHICH YOU WILL GAIN LIFETIME ACCESS THROUGH NFT TOKENS AND OUR CREON
            TOKEN.
          </p>
          <p className="lg:hidden text-[21px] leading-[2rem] z-10">
            OUR MISSION IS TO PROVIDE UNIQUE, CONFIDENTIAL AI-BASED TOLS, TO
            WHICH YOU WILL GAIN{" "}
            <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
              LIFETIME ACCESS THROUGH NFT TOKENS AND OUR CREON TOKEN.
            </span>
          </p>
          <Image
            src={img}
            alt=""
            className="md:hidden lg:flex flex mt-[-28px] md:mt-0 md:ml-0 ml-[96px] lg:ml-32 "
          />
        </div>
        <div className="w-full xl:col-span-1 lg:flex md:grid md:grid-cols-6 md:gap-4 lg:pt-0 md:pt-8">
          <ul className="md:col-span-4 lg:col-span-1 flex flex-col items-start justify-center gap-2 w-full lg:pl-24">
            <li className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start gap-2">
                <Image src={icon} alt="icon" className="w-[50px] object-contain" />
                <h1 className="font-[400] italic text-sm">
                  Profitability and Growth
                </h1>
              </div>
              <RiArrowDropDownLine className="rotate-180" />
            </li>
            <p className="border-b pb-4 border-[#13171D] font-[700] italic text-xs pl-14">
              At Creon, we handpick cutting-edge AI projects and offer our
              community and token holders early access and investment
              opportunities. Our community actively contributes to the growth
              and profitability of these projects, creating a dynamic ecosystem
              of innovation and shared success.
            </p>

            <li className="flex items-center justify-between w-full border-b py-4 border-[#13171D]">
              <div className="flex items-center justify-start gap-2">
                <Image src={icon1} alt="" className="w-[50px] object-contain" />
                <h1 className="font-[400] italic text-sm">
                  Transparent & Fair Decentralized Earnings
                </h1>
              </div>
              <RiArrowDropDownLine />
            </li>
            <li className="flex items-center justify-between w-full border-b py-4 border-[#13171D]">
              <div className="flex items-center justify-start gap-2">
                <Image src={icon2} alt="" className="w-[50px] object-contain" />
                <h1 className="font-[400] italic text-sm">
                  Launching the future
                </h1>
              </div>
              <RiArrowDropDownLine />
            </li>
            <li className="flex items-center justify-between w-full border-b py-4 border-[#13171D]">
              <div className="flex items-center justify-start gap-2">
                <Image src={icon3} alt="" className="w-[50px] object-contain" />
                <h1 className="font-[400] italic text-sm">
                  Limitless Possibilities of AI & Crypto
                </h1>
              </div>
              <RiArrowDropDownLine />
            </li>
          </ul>
          <div className="md:col-span-2 md:flex lg:hidden relative">
            <Image
              src={img}
              alt=""
              className="md:flex lg:hidden hidden absolute bottom-0 left w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="token lg:grid lg:grid-cols-3 flex gap-5 xl:px-[14rem] lg:px-0 pt-8 overflow-x-auto overflow-hidden">
        <div className="lg:w-auto flex-shrink-0 w-72 lg:col-span-1 flex flex-col items-start justify-start bg-[#13171D] bg-opacity-60 gap-2 relative">
          <h1 className="text-[24px] pt-4 px-2 w-full text-left">TOKEN</h1>
          <p className="font-[400] italic text-xs w-full text-left px-2 pb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">
            The Gateway token to the world of AI
          </p>
          <div className="pr-4 py-2 w-full">
            <Image
              src={launchpad}
              alt="launchpad"
              className="w-full object-cover"
              style={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            />
          </div>
          <p className="font-[700] italic text-xs px-2 pb-6">
            Set to debut in the latter half of 2024, the CREON token serves as
            the pioneering link between cutting-edge AI initiatives and
            blockchain technology. This innovative token provides NFT and token
            holders with unparalleled access to our Launchpad, AI tools, and
            exclusive pre-launch investment prospects.
          </p>
          <span className="z-10 absolute top-[-7px] right-3 font-[700] italic text-[0.5rem] px-1 bg-white text-black rounded-xl">
            COMING SOON
          </span>
        </div>
        <div className="lg:w-auto flex-shrink-0 w-72 lg:col-span-1 flex flex-col items-start justify-start bg-[#13171D] bg-opacity-60 gap-2 relative">
          <h1 className="text-[24px] pt-4 px-2 w-full text-left">REVENUE</h1>
          <p className="font-[400] italic text-xs w-full text-left px-2 xl:pb-0 lg:pb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">
            Driving income and growth through decentralization
          </p>
          <div className="pr-4 py-2 w-full">
            <Image
              src={launchpad2}
              alt="launchpad"
              className="w-full object-cover"
              style={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            />
          </div>
          <p className="font-[700] italic text-xs px-2 pb-6">
            CREON NFT and token holders are integral participants in the
            profit-sharing from our launched AI-based enterprises. We support
            the development of AI tools, ensuring a steady revenue stream, all
            while allowing early investors to enjoy the benefits of their
            support.
          </p>
          <span className="z-10 absolute top-[-7px] right-3 font-[700] italic text-[0.5rem] px-1 bg-white text-black rounded-xl">
            COMING SOON
          </span>
        </div>
        <div className="lg:w-auto flex-shrink-0 w-72 lg:col-span-1 flex flex-col items-start justify-start bg-[#13171D] bg-opacity-60 gap-2 relative">
          <h1 className="text-[24px] pt-4 px-2 w-full text-left">LAUNCHPAD</h1>
          <p className="font-[400] italic text-xs w-full text-left px-2 pb-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">
            Driving the future of AI Innovation
          </p>
          <div className="pr-4 py-2 w-full">
            <Image
              src={launchpad3}
              alt="launchpad"
              className="w-full object-cover"
              style={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            />
          </div>
          <p className="font-[700] italic text-xs px-2 pb-6">
            The Creon AI Launchpad, an essential component of our initiative,
            represents a groundbreaking opportunity in the realm of AI and
            blockchain. It provides the first known platform for acquiring
            allocations in tokenized AI projects, offering our community of NFT
            and CREON token holders early access to innovative and promising AI
            endeavors.
          </p>
          <span className="z-10 absolute top-[-7px] right-3 font-[700] italic text-[0.5rem] px-1 bg-white text-black rounded-xl">
            COMING SOON
          </span>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${background.src})` }} className=" bg-cover">
        <ul className="w-full hidden md:flex flex-col xl:px-[14rem] lg:px-0 gap-4">
          <li className="w-full grid grid-cols-6 items-center bg-[#13171D] bg-opacity-60">
            <div className="flex flex-col p-4 col-span-4 gap-2">
              <h1 className="xl:text-[23px] lg:text-[33px] lg:leading-[2rem]">
                AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE
              </h1>
              <p className="font-[700] italic text-xs">
                The AI market is one of the most dynamically growing areas of
                technology. According to reports, the global AI market is
                expected to reach $190.61 billion by 2025, with a CAGR (Compound
                Annual Growth Rate) of 36.6%. The key drivers behind this growth
                include advancements in machine learning, increasing demand for
                big data analytics, and growing adoption of AI technology across
                various sectors such as healthcare, finance, and transportation.
              </p>
            </div>
            <Image
              src={ai1}
              alt="image"
              className="col-span-2  w-full h-auto object-cover"
            />
          </li>
          <li className="grid grid-cols-6 items-center justify-center bg-[#13171D] bg-opacity-60">
            <div className="flex flex-col p-4 col-span-4 gap-2">
              <h1 className="xl:text-[23px] lg:text-[33px] lg:leading-[2rem]">
                AI TOOLS AND MARKET
              </h1>
              <p className="font-[700] italic text-xs">
                AI tools refer to the technologies and software that enable
                computer systems to perform tasks usually requiring human
                intellect. The market for these tools is dynamic and diverse,
                encompassing areas such as Natural Language Processing (NLP),
                machine learning, computer vision, and robotics. With a wide
                range of applications, AI tools are becoming increasingly
                indispensable in many sectors, from healthcare to finance,
                retail, manufacturing, and many others.
              </p>
            </div>
            <Image
              src={hand}
              alt="hand"
              className="col-span-2 w-full h-auto object-cover"
            />
          </li>
          <li className="grid grid-cols-6 items-center justify-center bg-[#13171D] bg-opacity-60">
            <div className="flex flex-col p-4 col-span-4 gap-2">
              <h1 className="xl:text-[23px] lg:text-[33px] lg:leading-[2rem]">
                AI, CRYPTO, AND NFT MARKET
              </h1>
              <p className="font-[700] italic text-xs">
                Artificial Intelligence and blockchain technology are two
                groundbreaking areas leading new technological innovations. The
                combination of these two technologies creates intriguing
                possibilities. For instance, Non-Fungible Tokens (NFTs) can
                leverage AI to create unique digital artworks or to provide
                exclusive AI-based services. Meanwhile, cryptocurrencies can
                benefit from AI by improving security mechanisms, transaction
                efficiency, and service personalization. Such combination brings
                substantial benefits for both developers and users, paving the
                way for unprecedented possibilities.
              </p>
            </div>
            <Image
              src={circle}
              alt="circle"
              className="col-span-2 w-full h-auto object-cover"
            />
          </li>
        </ul>
        <ul className="market w-full md:hidden flex overflow-x-auto xl:px-[14rem] lg:px-0 gap-4">
          <li className="flex-shrink-0 w-72 flex flex-col items-center bg-[#13171D] bg-opacity-60">
            <Image src={ai1} alt="image" className="w-full h-auto object-cover" />
            <div className="flex flex-col p-4 gap-2">
              <h1 className="xl:text-[23px] lg:text-[33px] lg:leading-[2rem]">
                AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE
              </h1>
              <p className="font-[700] italic text-xs">
                The AI market is one of the most dynamically growing areas of
                technology. According to reports, the global AI market is
                expected to reach $190.61 billion by 2025, with a CAGR (Compound
                Annual Growth Rate) of 36.6%. The key drivers behind this growth
                include advancements in machine learning, increasing demand for
                big data analytics, and growing adoption of AI technology across
                various sectors such as healthcare, finance, and transportation.
              </p>
            </div>
          </li>
          <li className="flex-shrink-0 w-72 flex flex-col items-center bg-[#13171D] bg-opacity-60">
            <Image
              src={hand}
              alt="hand"
              className="w-full h-auto object-cover"
            />
            <div className="flex flex-col p-4 gap-2">
              <h1 className="xl:text-[23px] lg:text-[33px] lg:leading-[2rem]">
                AI TOOLS AND MARKET
              </h1>
              <p className="font-[700] italic text-xs">
                AI tools refer to the technologies and software that enable
                computer systems to perform tasks usually requiring human
                intellect. The market for these tools is dynamic and diverse,
                encompassing areas such as Natural Language Processing (NLP),
                machine learning, computer vision, and robotics. With a wide
                range of applications, AI tools are becoming increasingly
                indispensable in many sectors, from healthcare to finance,
                retail, manufacturing, and many others.
              </p>
            </div>
          </li>
          <li className="flex-shrink-0 w-72 flex flex-col items-center bg-[#13171D] bg-opacity-60">
            <Image
              src={circle}
              alt="circle"
              className="w-full h-auto object-cover"
            />
            <div className="flex flex-col p-4 gap-2">
              <h1 className="xl:text-[23px] lg:text-[33px] lg:leading-[2rem]">
                AI, CRYPTO, AND NFT MARKET
              </h1>
              <p className="font-[700] italic text-xs">
                Artificial Intelligence and blockchain technology are two
                groundbreaking areas leading new technological innovations. The
                combination of these two technologies creates intriguing
                possibilities. For instance, Non-Fungible Tokens (NFTs) can
                leverage AI to create unique digital artworks or to provide
                exclusive AI-based services. Meanwhile, cryptocurrencies can
                benefit from AI by improving security mechanisms, transaction
                efficiency, and service personalization. Such combination brings
                substantial benefits for both developers and users, paving the
                way for unprecedented possibilities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Creon;
