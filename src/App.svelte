<script lang="ts">
  import { fade, fly } from "svelte/transition";
  let y;
  console.log(screen.height);
  let yfull = screen.height;
  let offset;
  if (screen.height > 900) {
    offset = 200;
  } else {
    offset = 50;
  }
  import Nav from "./lib/Nav.svelte";
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<svelte:window bind:scrollY={y} />

<main class="overflow-hidden bg-black">
  <div
    id="home"
    class="relative bg-black min-h-screen min-w-screen flex items-center justify-center px-16 overflow-hidden"
  >
    <div class="relative w-full max-w-3xl">
      <div
        class="absolute left-20 top-10 md:top-10 md:left-60 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob"
      />
      <div
        class="absolute -top-20 -right-20 md:-top-10 md:-right-5 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-2000 pr-[200px]"
      />
      <div
        class="absolute -top-40 -left-20 md:-top-20 md:left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-4000 pr-10"
      />
      <div
        class="m-8 relative space-y-10 w-3/4 flex justify-center mx-auto text-ellipsis"
      >
        <div
          class="mockup-code w-fit animated bg-transparent border-2 border-base-200 truncate text-ellipsis"
        >
          <pre data-prefix="$"><code class="long-text">My name is Maxwell</code
            ><code class="short-text">My name is Maxwell</code></pre>
          <pre data-prefix="$"><code class="long-text"
              >I am a full-stack developer from Oregon</code
            ><code class="short-text">I'm a developer from OR</code></pre>
          <pre data-prefix="$"><code class="long-text"
              >I like to build apps that live on the web</code
            ><code class="short-text">I make pretty web apps</code></pre>
        </div>
      </div>
    </div>
    <div
      on:click|preventDefault={scrollIntoView}
      href="#about-me-scroll"
      class="meet absolute center center mt-[265px] font-bold rounded-md p-2 bg-transparent border-2 border-base-200 animated fadeInUp shadow-2xl"
    >
      <p
        on:click|preventDefault={scrollIntoView}
        href="#about-me-scroll"
        class="titleFont1 animate-pulse"
      >
        👇🏼 Learn more
      </p>
    </div>
  </div>
  <div class="invisible mb-40" id="about-me-scroll">s</div>
  {#if y >= 200}
    <div
      in:fly={{ y: 200, duration: 2000 }}
      out:fade
      id="about-me"
      class="relative hero2 hero min-h-[1000px] min-w-screen bg-transparent "
    >
      <div
        class="absolute top-10 -left-40 w-64 h-64 bg-transparent-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob"
      />
      <div
        class="absolute top-40 -left-20 w-64 h-64 bg-transparent-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-2000"
      />
      <div
        class="absolute top-80 -left-10 w-64 h-64 bg-transparent-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-4000"
      />
      <h1
        class="absolute text-5xl font-bold -top-10 mt-10 opacity-100 bg-transparent lg:-top-8"
      >
        About me
      </h1>
      <div class="pl-1 pr-1 sm:pl-0 sm:pr-0">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div
            class="relative fourCards mt-12 w-[475px] ml-[-29px] xs:ml-0 sm:ml-2 mdsm:ml-7 500px:ml-1"
          >
            <div
              class="relative flex-shrink-0 card max-w-sm min-w-[1px] shadow-2xl bg-base-transparent ml-5 sm:ml-10 w-[300px] 500px:w-[500px] mt-20 top-0 border-2 border-base-200"
            >
              <ul
                class="block md:hidden menu bg-transparent w-md p-2 rounded-box collapse-title"
              >
                <li>
                  <a class="font-bold" href="mailto:maxprehoda@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg> Contact me
                  </a>
                </li>
              </ul>
              <div class="hidden md:block card-body pt-1 md:pt-8">
                <div class="avatar hidden md:block md:pt-2">
                  <div class="w-24 mask mask-squircle">
                    <img src="../prof_pic.jpg" alt="Picture of me" />
                  </div>
                </div>
                <div
                  class="absolute hidden w-[300px] right-0 bottom-0 mb-16 md:mb-[65px] md:block p-4 pb-9 pr-6 pl-14"
                >
                  <p class="pl-2 mb-1">
                    Interested in working together? Got a great idea for a
                    project? Let's chat!
                  </p>
                </div>
                <a
                  href="mailto:maxprehoda@gmail.com"
                  class="w-[300px] hidden md:block"
                  ><button
                    class="btn bg-transparent border-0 text-white hover:bg-black hover:border-2 w-[220px] md:w-[325px] md:mt-2"
                    >Contact Me</button
                  ></a
                >
              </div>
            </div>
            <div
              class="relative card flex-shrink-0 max-w-sm shadow-2xl bg-base-transparent ml-5 sm:ml-10 w-[300px] 500px:w-[500px] mb-10 mt-8 top-0 border-2 border-base-200"
            >
              <div class="card-body items-center pt-5 pb-5">
                <div class="grid grid-cols-4 grid-rows-1 gap-10">
                  <a href="https://www.twitter.com/lunarisachef" class="socials"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="white"
                      fill="white"
                      ><path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      /></svg
                    >
                  </a>
                  <a href="https://www.instagram.com/maxpreh" class="socials"
                    ><img
                      src="../instagram.png"
                      alt="instagram Icon"
                      class="w-[24px] invert"
                    /></a
                  >
                  <a
                    href="https://www.linkedin.com/in/maxwellprehoda"
                    class="socials"
                    ><img
                      src="../linkedin.png"
                      alt="linkedin Icon"
                      class="w-[24px] invert"
                    /></a
                  >
                  <a class="socials" href="https://www.github.com/maxprehoda"
                    ><img
                      src="../github-logo.png"
                      alt="github Icon"
                      class="w-[25px] invert"
                    /></a
                  >
                </div>
              </div>
            </div>
            <div
              tabindex="0"
              class="relative dropdown border-2 border-base-200 border-base-300 bg-transparent rounded-box w-[300px] 500px:w-[384px] ml-5 sm:ml-10 mb-10 bottom-0"
            >
              <ul
                class="menu bg-transparent w-md p-2 rounded-box collapse-title"
              >
                <li>
                  <a class="font-bold" href="./MaxwellPrehoda.pdf" download>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>Resume/CV
                  </a>
                </li>
              </ul>
            </div>
            <div
              tabindex="0"
              class="dropdown collapse-arrow border-2 border-base-200 border-base-300 bg-transparent rounded-box w-[300px] 500px:w-[384px] mb-12 ml-5 sm:ml-10 lg:mb-24"
            >
              <ul
                class="menu bg-transparent w-md p-2 rounded-box collapse-title"
              >
                <li>
                  <a class="font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>Skills
                  </a>
                </li>
              </ul>
              <div
                class="relative dropdown-content card card-compact w-[300px] md:w-[384px] p-2 shadow bg-transparent text-current rounded-lg"
              >
                <div class="grid grid-cols-2 gap-2 pl-2 pr-2 pt-2">
                  <div class="relative">Javascript/Typescript</div>
                  <div class="relative">
                    <progress
                      class="absolute progress progress-accent w-[120px] pl-3 md:w-[168px] md:pl-0 left-0 top-0 mt-2"
                      value="100"
                      max="100"
                    />
                  </div>
                  <div class="relative">Python</div>
                  <div class="relative">
                    <progress
                      class="absolute progress progress-accent w-[100px] pl-3 md:w-[134px] md:pl-0 left-0 top-0 mt-2"
                      value="100"
                      max="100"
                    />
                  </div>
                  <!---ROW-->
                  <div class="relative">HTML/CSS/Tailwind</div>
                  <div class="relative">
                    <progress
                      class="absolute progress progress-accent w-[115px] pl-3 md:w-[154px] md:pl-0 left-0 top-0 mt-2"
                      value="100"
                      max="100"
                    />
                  </div>
                  <!---ROW-->
                  <div class="relative">Svelte/React</div>
                  <div class="relative">
                    <progress
                      class="absolute progress progress-accent w-[105px] pl-3 md:w-[146px] md:pl-0 left-0 top-0 mt-2"
                      value="100"
                      max="100"
                    />
                  </div>
                  <!---ROW-->
                  <div class="relative">MySQL/MongoDB</div>
                  <div class="relative">
                    <progress
                      class="absolute progress progress-accent w-[95px] pl-3 md:w-[129px] md:pl-0 left-0 top-0 mt-2"
                      value="100"
                      max="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              tabindex="0"
              class="collapse collapse-arrow collapse-open border-2 border-base-300 bg-base-transparent rounded-box w-8/12 -ml-4 xs:ml-3 sm:11/12 sm:ml-8 mdsm:ml-12 500px:ml-0 500px:w-full mt-20 mb-20 md:mb-0 lg:mt-0"
            >
              <ul
                class="menu bg-transparent w-md p-2 rounded-box collapse-title"
              >
                <li>
                  <a class="font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg> Experience
                  </a>
                </li>
              </ul>
              <div class="collapse-content">
                <ul class="pb-5">
                  <li>
                    <a
                      ><p class="text-left p-0 font-bold pb-1">
                        Tycho Industries (2019-2021)
                      </p>
                      I helped found Tycho as a side project at the beginning of
                      the quarantine. At our peak, we had a team of 7 and serviced
                      almost 3000 customers.<br />
                      <p class="font-bold pb-1">Responsibilities:</p></a
                    >
                  </li>
                  <li class="bullet">
                    <a
                      >Building <a href="#www.tychotools.com"
                        >the Tycho Tools website</a
                      > and hooking it up to Stripe, our payment processor.</a
                    >
                  </li>
                  <li class="bullet">
                    <a
                      >Setting up a MySQL database to store customer
                      subscription information</a
                    >
                  </li>
                  <li class="bullet">
                    <a
                      >Creating various Discord bots to help customers receive
                      technical support and subscription info</a
                    >
                  </li>
                  <li class="bullet">
                    <a
                      >Mocking up our app's UI/UX experience in Figma and then
                      building it as frontend HTML/CSS</a
                    >
                  </li>
                  <li class="bullet">
                    <a
                      >Writing the licensing code on our server to ensure only
                      current subscribers can access our software.</a
                    >
                  </li>
                  <li class="bullet">
                    <a
                      >Building the backend of our Electron app built to help
                      small businesses manage their inventory and forms of
                      payment.</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              tabindex="0"
              class="collapse collapse-arrow collapse-open  border-2 border-base-300 bg-base-transparent rounded-box w-8/12 -ml-4 xs:ml-3 sm:11/12 sm:ml-8 mdsm:ml-12 500px:ml-0 500px:w-full mt-20 mb-20 md:mb-0  md:mt-10"
            >
              <ul
                class="menu bg-transparent w-md p-2 rounded-box collapse-title"
              >
                <li>
                  <a class="font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg> Education
                  </a>
                </li>
              </ul>
              <div class="collapse-content">
                <ul class="pb-5">
                  <li>
                    <a
                      ><p class="text-left p-0 font-bold pb-1">
                        Bachelor's Degree in Computer Science
                      </p>
                      I am currently set to graduate in May 2023 from Oregon State
                      University.<br />
                      <p class="font-bold pb-1">Relevant courses:</p></a
                    >
                  </li>
                  <li class="bullet"><a>Data Structures (C)</a></li>
                  <li class="bullet">
                    <a>Analysis of Algorithms, Operating Systems (Python)</a>
                  </li>
                  <li class="bullet">
                    <a>Assembly Language (MASM, Intel x86)</a>
                  </li>
                  <li class="bullet">
                    <a>Introduction to Databases (mySQL, Postgres)</a>
                  </li>
                  <li class="bullet">
                    <a>Web development (React, CSS, JS)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
  <div
    id="projects"
    class="relative hero hero3 sm:pt-10 min-h-[2700px] sm:min-h-[2700px] md:min-h-[1300px] lg:min-h-[1300px] lg:pt-[190px] min-w-screen bg-black xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
  >
    {#if y >= 1500}
      <div
        in:fly={{ duration: 5000 }}
        out:fade
        class="absolute top-0 mr-2 container text-center"
      >
        <h1 class="font-bold text-5xl  opacity-100 mt-2">My Projects</h1>
        <h2 class="text-center  opacity-90 text-xl mt-6 pb-6">
          Over the last few years I've designed and built a plethora of desktop
          and web apps, here are a few I am particularly proud of.
        </h2>
      </div>
      <div
        class="absolute -bottom-40 -left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob"
      />
      <div
        class="absolute bottom-2 -left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-2000"
      />
      <div
        class="absolute bottom-7 left-40 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-4000"
      />
      <div
        class="absolute -top-80 mb-60 -right-40 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-2000"
      />
      <div
        class="absolute -top-20 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob"
      />
      <div
        class="absolute -top-60 -right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-2000"
      />
      <div
        class="absolute -top-80 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-4000"
      />
      <div
        in:fly={{ duration: 5000 }}
        out:fade
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:pl-10 2xl:pr-10 gap-10 pl-3 pr-3 items-center absolute top-60 md:top-40 max-w-[1900px]"
      >
        <a
          href="https://tychotools.com"
          class="tooltip md:tooltip-top tooltip-primary"
          data-tip="Click me to view our website!"
        >
          <div
            class="relative bg-base-transparent w-md h-[340px] rounded-md border-2 border-base-200 project text-center:"
          >
            <div
              class=" h-[280px] grid place-items-center cols-1 gap-0 mt-6 pl-2 pr-2"
            >
              <img
                src="../tychologo.svg"
                alt="Tycho Icon"
                class="card-logo w-24 relative "
              />
              <div class="mt-0 p-0 font-semibold">Tycho Tools</div>
              <div class="mt-0 text-center w-md pl-2 pr-2">
                A desktop app built with Electron with the purpose of helping
                small businesses manage their inventory and forms of payment.
              </div>
              <div class="mt-0 text-center w-md font-semibold">
                Tech used: Electron, Node, Typescript, and HTML/CSS
              </div>
              <div class="badge badge-white badge-outline learn-badge">
                Learn More
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://down-the-rabbit-hole-three.vercel.app/"
          class="tooltip md:tooltip-top tooltip-primary"
          data-tip="Click me for a demo!"
        >
          <div
            class="bg-base-transparent w-md h-[340px] rounded-md border-2 border-base-200 project"
          >
            <div
              class=" h-[280px] grid place-items-center cols-1 gap-0 mt-6 pl-2 pr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="emoji"
                viewBox="0 0 72 72"
                class=" card-logo w-28 relative"
              >
                <g id="color">
                  <path
                    fill="#FFFFFF"
                    stroke="none"
                    d="M25.9899,27.3286l-2.496,8.7105l-9.6982,1.4448c0,0-0.0205,3.1489,0.2295,3.6802 s2.7634,4.3159,2.7634,4.3159l4.3616,2.8091l1.5625,1.6562l-1.3125,2.1875c0,0-3.1009,2.3394-2.9375,2.5625 c0.1634,0.2231,0.9193,1.8738,0.9193,1.8738L23.4627,57c0,0,3.2812-1.1484,3.3125-1.2421s2.9688-4.8125,2.9688-4.8125 s3.939-1.0638,5.3438,1.6562l4.2188-3.6875l2.25-11.6562c0,0-1.8438-3.625-1.875-3.75s-5.284-5.0518-5.284-5.0518l-5.9035,1.8643 L25.9899,27.3286z"
                  />
                  <path
                    fill="#FFFFFF"
                    stroke="none"
                    d="M19.2752,22.7266l-6.2269,3.6503l-3.9338,6.1468c0,0,0.8481,4.1092,0.9419,4.0779 s7.875,1.6315,7.875,1.6315l6.5312-2.6003L19.2752,22.7266z"
                  />
                  <path
                    fill="#3F3F3F"
                    stroke="none"
                    d="M27.6303,22.0205l1.8557-5.3811l-0.815-5.3491l-3.4166,1.4572l-1.9167,1.3333 c0,0-1.1652-2.8309-2.9993-2.7905l-3.2566,3.838l-0.7857,4.7025l-0.8751,0.9167c0,0,0.2626,3.0269,0.8751,3.1667 c0.2308,0.0527,0.6721,0.0043,1.1324-0.0764l-3.4191,1.91c0,0-2.4218,8.3974,5.2054,12.3349 c2.3502,0.1295,3.1521,0.6518,5.4978-1.4832c0,0,3.4489-4.3574,0.5786-10.4797l0,0c-0.028-0.2242-0.0581-0.3881-0.0581-0.3881 L27.6303,22.0205z"
                  />
                  <path
                    fill="#3F3F3F"
                    stroke="none"
                    d="M31.7581,29.0103c0,0,13.4042,8.9663,4.2419,21.5913l-1.0373,2.9375l1.6686,1.9443l6.2064,1.8057 l7.5-0.625l5.0625-3.6875l0.4316-3.8946l-0.9941-5.8554l-3.2855-5.6251l-4.5973-5.4061l-4.7366-2.8584L31.7581,29.0103z"
                  />
                  <path
                    fill="#FFFFFF"
                    stroke="none"
                    d="M55.566,47.5168l3.2404-0.5402l3.6875,1.8438c0,0,0.1038,3.3438,0.1769,3.4375 c0.0731,0.0938-3.0519,3.1698-3.1456,3.2255c-0.0938,0.0557-2.375,0.962-2.375,0.962s-3.2812,0.3261-4.8438-0.962l2.9375-2.6318 L55.566,47.5168z"
                  />
                </g>
                <g id="hair" />
                <g id="skin" />
                <g id="skin-shadow" />
                <g id="line">
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M23.886,35.5323c-2.3651,5.1127-13.2378,1.0229-13.2378,1.0229c-0.5968-0.2704-1.0232-0.816-1.1416-1.4603l-0.3697-2.0127 c-0.0882-0.4801,0.0022-0.976,0.2543-1.394l1.9397-3.2171c0.9308-1.5438,2.2842-2.7888,3.9002-3.5877l3.7161-1.8372 c0,0,3.5476-10.8515,9.3212-11.7558c0,0,4.591,4.6606-3.478,15.0252c0,0,2.0247,1.3871,3.6172,4.0345 c0,0,15.2559-8.8797,24.9028,10.3646c8.946,17.8462-8.3356,16.735-14.2114,15.8977c-1.4891-0.2122-2.836-1.1028-3.4651-2.4691 c-0.6568-1.4264-0.5172-3.1231,3.347-3.6205"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M15,41.1641c0.3333,2.9167,2.0746,6.1553,6.6667,6.8193c0,0,1.4608,1.8086,0,3.3389c0,0-1.351,1.1679-2.4473,2.2562 C17.9523,54.8362,18.8443,57,20.6295,57h3.8928c0.6864,0,1.3249-0.352,1.6913-0.9325l3.7193-5.8926l1.2571-3.965"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M59,47.9834c0,0,4.9053-0.1041,3.375,3.8609s-5.0417,3.6322-5.0417,3.6322"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M16.3125,20.2041c-0.1542-3.0543,0.75-7.2275,4.0259-8.9138c0,0,1.9372-0.233,3.1598,3.1876"
                  />
                </g>
              </svg>
              <div class="mt-0 p-0 font-semibold">Down The Rabbit Hole</div>
              <div class="mt-0 text-center w-md pl-2 pr-2">
                A dynamic, interactive experience that explains a tricky CS
                problem.
              </div>
              <div class="mt-0 text-center w-md font-semibold">
                Tech used: React JS and Tailwind CSS
              </div>
              <div class="badge badge-white badge-outline learn-badge">
                Learn More
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://test-proj-di5gsfggc-maxprehoda.vercel.app/"
          class="tooltip md:tooltip-top tooltip-primary"
          data-tip="Click me for a demo!"
        >
          <div
            class="bg-base-transparent w-md h-[340px] rounded-md border-2 border-base-200 project"
          >
            <div
              class=" h-[280px] grid place-items-center cols-1 gap-0 mt-6 pl-2 pr-2"
            >
              <img
                src="../minterlogo.png"
                alt="Minter Icon"
                class="card-logo w-24 relative "
              />
              <div class="mt-0 p-0 font-semibold">Minter</div>
              <div class="mt-0 text-center w-md pl-2 pr-2">
                A desktop app that allows users to quickly mint large amounts of
                NFTs upon their release.
              </div>
              <div class="mt-0 text-center w-md font-semibold">
                Tech used: Electron, Node, Typescript, and HTML/CSS
              </div>
              <div class="badge badge-white badge-outline learn-badge">
                Learn More
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://test-proj-di5gsfggc-maxprehoda.vercel.app/"
          class="tooltip tooltip-top md:tooltip-bottom tooltip-primary"
          data-tip="Click me for a demo!"
        >
          <div
            class="bg-base-transparent w-md h-[340px] rounded-md border-2 border-base-200 project"
          >
            <div
              class=" h-[280px] grid place-items-center cols-1 gap-0 mt-6 pl-2 pr-2"
            >
              <img
                src="../journimal-icon.png"
                alt="Journimal Icon"
                class="card-logo w-24 relative "
              />
              <div class="mt-0 p-0 font-semibold">Journimal</div>
              <div class="mt-0 text-center w-md pl-2 pr-2">
                A python app using a curses library (Urwid) to manipulate the
                terminal allowing programmers to use a journal to record idioms,
                bugs/fixes, and more all from within the terminal.
              </div>
              <div class="mt-0 text-center w-md font-semibold">
                Tech used: Python, Urwid, and Arrow
              </div>
              <div class="badge badge-white badge-outline learn-badge">
                Learn More
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://test-proj-di5gsfggc-maxprehoda.vercel.app/"
          class="tooltip tooltip-top md:tooltip-bottom tooltip-primary"
          data-tip="Click me for a demo!"
        >
          <div
            class="bg-base-transparent w-md h-[340px] rounded-md border-2 border-base-200 project"
          >
            <div
              class=" h-[280px] grid place-items-center cols-1 gap-0 mt-6 pl-2 pr-2"
            >
              <img
                src="../pug.png"
                alt="Rambunctious Pug Icon"
                class="card-logo w-24 relative "
              />
              <div class="mt-0 p-0 font-semibold">Rambunctious Pugs</div>
              <div class="mt-0 text-center w-md pl-2 pr-2">
                A small 2d side scroller game I made based on the NFT I created
                on the Solana Network.
              </div>
              <div class="mt-0 text-center w-md font-semibold">
                Tech used: Python, Pygame, Aseprite
              </div>
              <div class="badge badge-white badge-outline learn-badge">
                Learn More
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://maxprehoda.info"
          class="tooltip tooltip-top md:tooltip-bottom tooltip-primary"
          data-tip="Click me for a demo!"
        >
          <div
            class="bg-base-transparent w-md h-[340px] rounded-md border-2 border-base-200 project"
          >
            <div
              class=" h-[280px] grid place-items-center cols-1 gap-0 mt-6 pl-2 pr-2"
            >
              <img
                src="../svelte.png"
                alt="Portfolio Icon"
                class="card-logo w-24 relative "
              />
              <div class="mt-0 p-0 font-semibold">Portfolio</div>
              <div class="mt-0 text-center w-md pl-2 pr-2">
                This website was built with some of my favirote tech on the web.
                I wrote a little bit about how I designed and built it below.
              </div>
              <div class="mt-0 text-center w-md font-semibold">
                Tech used: Svelte, Typescript, Tailwind, and Vite
              </div>
              <div class="badge badge-white badge-outline learn-badge">
                Case Study
              </div>
            </div>
          </div>
        </a>
      </div>
    {/if}
    {#if y >= 100}
      <Nav />
    {/if}
  </div>
  <footer class="footer items-center p-4 bg-black mt-0 pt-0 text-base-100 pt-8">
    <div class="items-center grid-flow-col">
      <p class="text-white">
        This site was built with Svelte, Typescript, Tailwind, Vite, deployed on
        Vercel and made with love
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="white"
        viewBox="0 0 24 24"
        stroke="white"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  </footer>
  <script
    defer
    src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
</main>
