<script setup lang="ts">
  useSeoMeta({
    title: "Eclipseron",
    ogTitle: "Eclipseron",
    description: "Petrus Ariaa's portfolio website. Developer under development. Years of experience with Python, Go, and Node.js. Glad to meet you.",
    ogDescription: "Petrus Ariaa's portfolio website. Developer under development. Years of experience with Python, Go, and Node.js. Glad to meet you.",
    ogImage: "/resume-profile.jpg",
    twitterCard: 'summary_large_image',
  })

  const LANGUAGES = ["Python", "Go", "Javascript", "Typescript", "SQL", "C#", "C++"]
  const TECHNOLOGIES = ["FastAPI", "Flask", "Gin", "Next.js", "Vue", "TailwindCSS#",
    "Google Cloud Platform (GCP)", "PostgreSQL", "MySQL", "Redis", "MongoDB", "ScyllaDB"]
  const TOOLS = ["Linux", "Git", "Docker", "Raspberry Pi", "Figma", "Home Assistant"]
  const TOP_PROJECTS = [
    {
      id: "paroki-samara",
      title: "Profile and e-Magazine for Paroki Kosambi Baru",
      description: "End-to-end solution for Paroki Kosambi Baru Profile and content management system",
      imgUrl: "/img/icon-samara.svg",
      previewUrl: "https://parokikosambibaru.or.id",
      tags: ["Javascript", "Go", "Next.js", "Gin", "MySQL", "Google Cloud"]
    },
    {
      id: "flxa",
      title: "FLXA",
      description: "Cloud-based solution and blockchain gamification for mobile credit efficiency",
      imgUrl: "/img/icon-flxa.png",
      tags: ["Competition", "Huawei Cloud", "Go", "Javascript", "PostgreSQL", "Docker", "Blockchain", "IOTA"]
    },
    {
      id: "ha-hyperbase",
      title: "Hyperbase for Home Assistant",
      description: "Hyperbase integration for Home Assistant to collect commercial IoT data into local data center",
      imgUrl: "/img/icon-hyperbase.svg",
      previewUrl: "https://eclipseron.github.io/homeassistant-hyperbase",
      githubUrl: "https://github.com/eclipseron/homeassistant-hyperbase",
      tags: ["College project", "Python", "IoT", "Home Assistant", "Docker", "ScyllaDB", "PostgreSQL", "MQTT", "IT infrastructure"]
    },
    {
      id: "fitmotion",
      title: "FitMotion",
      description: "Track user's physical activities using machine learning and data collection system to recognize phone accelerometer pattern",
      imgUrl: "/img/icon-bangkit.jpg",
      githubUrl: "https://github.com/eclipseron/FitMotion-Core",
      tags: ["Bangkit Academy", "Python", "FastAPI", "Google Cloud", "Docker"]
    },
    {
      id: "eyefata",
      title: "EYEFATA",
      description: "Human fitness level prediction from saccadic and smooth-pursuit eye movement patterns",
      imgUrl: "/img/icon-eyefata.png",
      githubUrl: "https://github.com/CapstoneDTETIA06/EyeFata",
      previewUrl: "https://acadstaff.ugm.ac.id/karya_files/eyefata--pemanfaatan-eye-tracker-dan-heart-rate-sensor-untuk-mendeteksi-tingkat-kebugaran-individu-dcfcd07e645d245babe887e5e2daa016",
      tags: ["College project", "Python", "Javascript", "C#", "Next.js", "TailwindCSS"]
    },
    {
      id: "enova",
      title: "Enova.id",
      description: "Web profile for PT Inovasi Teknologi Berkelanjutan",
      imgUrl: "/img/icon-enova.png",
      previewUrl: "https://enova.id",
      tags: ["Typescript", "Next.js", "TailwindCSS"]
    },
    {
      id: "night-login",
      title: "Night Login",
      description: "Web profile for a DTETI student community",
      imgUrl: "/img/icon-nl.png",
      githubUrl: "https://github.com/Night-Login/night-login-website-2024",
      previewUrl: "https://nightlogin.id",
      tags: ["Typescript", "Next.js", "TailwindCSS"]
    },
    {
      id: "ppsmb-kesatria",
      title: "PPSMB Kesatria 2023",
      imgUrl: "/img/icon-kesatria.png",
      githubUrl: "https://github.com/PPSMB-Kesatria/kesatria23-frontend",
      previewUrl: "https://kesatria-preview.eclipseron.web.id/",
      description: "Information dashboard for faculty of engineering student orientation",
      tags: ["Javascript", "Next.js", "TailwindCSS"]
    },
    {
      id: "gkipi",
      title: "GKIPI",
      imgUrl: "/img/icon-gkipi.png",
      description: "Web based marketplace for small business in GKIPI",
      githubUrl: "https://github.com/GKIPI/frontend-gkipi",
      tags: ["Javascript", "Next.js", "TailwindCSS", "MongoDB"]
    },
    {
      id: "cekmata",
      title: "Cekmata.org",
      description: "Web based system for eye disease detection",
      githubUrl: "https://github.com/eclipseron/cekmata.org",
      tags: ["College project", "Javascript", "Python", "FastAPI", "Next.js", "ONNX", "PostgreSQL", "Azure"]
    },
    {
      id: "berkati-id",
      title: "Berkati",
      description: "Desktop app for non-profit organization",
      previewUrl: "https://eclipseron.github.io/Berkati-id/",
      githubUrl: "https://github.com/eclipseron/Berkati-id",
      tags: ["College project", "C#", "ASP.Net", "PostgreSQL", "Docker", "Amazon Web Service (AWS)"]
    },
    {
      id: "rental-bahari",
      title: "RentalBahari",
      description: "Web based dashboard for car renting system",
      previewUrl: "https://rental-bahari-fe.vercel.app/",
      githubUrl: "https://github.com/fajarrw/rentalBahari",
      tags: ["College project", "Javascript", "Express.js", "Next.js", "TailwindCSS", "MongoDB"]
    },
  ]
</script>

<template>
  <HomeNav />
  <section id="home"
    class="bg-dark-primary relative overflow-hidden z-10 py-56 md:py-72 flex flex-col items-center justify-center text-light-primary font-semibold min-h-screen w-full">
    <img src="~/assets/img/Me.svg" alt="" class="absolute w-screen bottom-0 select-none" />
    <img src="~/assets/img/Lightning1.svg" alt="" class="absolute z-43 bottom-0 select-none" />
    <img src="~/assets/img/Lightning2.svg" alt="" class="absolute z-42 w-screen bottom-0 select-none" />
    <img src="~/assets/img/Lightning3.svg" alt="" class="absolute z-41 w-screen bottom-0 select-none" />
    <img src="~/assets/img/Border.svg" alt="" class="absolute z-40 w-screen bottom-0 select-none" />
    <div class="z-47 w-2/3 flex flex-col justify-center items-center absolute">
      <div class="flex flex-col gap-8 relative">
        <div>
          <p class="text-3xl md:text-5xl">Hello Traveller&excl;</p>
          <p class="text-primary font-bold text-5xl md:text-7xl">I&apos;m Petrus Aria.</p>
          <p class="text-3xl md:text-5xl">Are you looking for</p>
          <p class="text-3xl md:text-5xl">a Backend Developer&quest;</p>
        </div>
        <div class="w-full h-0 sm:h-16 md:h-56"></div>
      </div>
    </div>
    <div class="w-full h-24 bg-linear-to-t from-dark-primary to-transparent absolute bottom-0 z-50"></div>
  </section>
  <section id="about"
    class="px-4 md:px-16 bg-dark-primary text-light-primary min-h-screen w-full flex justify-center items-center">
    <div class="flex max-w-[1300px] w-full gap-8 items-end">
      <div class="w-1/3 relative hidden lg:block">
        <img src="/Profile.png" alt="Petrus Aria Chevalier Rambing" title="profile-picture"
          class="w-full aspect-square object-cover" />
        <img src="~/assets/img/Me2.svg" alt="" class="w-1/2 absolute -bottom-10 right-0 select-none" />
      </div>
      <div class="w-full lg:w-2/3">
        <h1 class="text-3xl md:text-5xl font-semibold text-primary mb-4">Backstory</h1>
        <p class="font-normal text-lg leading-loose md:leading-relaxed mb-8">&quot;Sharpness alone doesn&apos;t
          make a
          good
          sword.&quot; it must also be strong and enduring to survive the fight. I forge systems <span
            class="font-semibold">not to just
            work, but to survive.</span> Through years of creating, I&apos;ve honed my skills in <span
            class="font-semibold">backend development</span>
          using
          tools like <span class="font-semibold">Python, Go, and Node.js</span>. I&apos;ve begun my journey into the
          world of <span class="font-semibold">Cloud
            computing</span>,
          seeking to
          master its depths. It&apos;s an honor to cross path with you. May we forge something remarkable together.</p>
        <div class="flex justify-end md:justify-start gap-4">
          <a href="/petrusariaa"
            class="text-xl text-dark-primary bg-primary px-5 py-2 rounded-lg hover:bg-primary/80 transition-colors">Know
            me more</a>
          <a title="download latest resume" download href="/documents/CV_General_20251102.pdf"
            class="p-3 bg-light-primary/10 rounded-lg">
            <svg class="fill-light-primary/75" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.0297 6.76641C20.1703 6.90703 20.25 7.09687 20.25 7.29609V21.75C20.25 22.1648 19.9148 22.5 19.5 22.5H4.5C4.08516 22.5 3.75 22.1648 3.75 21.75V2.25C3.75 1.83516 4.08516 1.5 4.5 1.5H14.4539C14.6531 1.5 14.8453 1.57969 14.9859 1.72031L20.0297 6.76641V6.76641ZM18.5203 7.64062L14.1094 3.22969V7.64062H18.5203ZM14.8411 14.9358C14.4853 14.9241 14.107 14.9515 13.6774 15.0052C13.1079 14.6538 12.7245 14.1713 12.4521 13.4623L12.4772 13.3596L12.5062 13.2382C12.607 12.8133 12.6612 12.5032 12.6773 12.1905C12.6895 11.9545 12.6764 11.7368 12.6345 11.535C12.5571 11.0993 12.2489 10.8445 11.8605 10.8288C11.4984 10.8141 11.1656 11.0163 11.0805 11.3297C10.942 11.8364 11.0231 12.5032 11.3168 13.6404C10.9427 14.5322 10.4484 15.5777 10.1168 16.1609C9.67406 16.3891 9.3293 16.5968 9.03961 16.827C8.65758 17.1309 8.41898 17.4434 8.35336 17.7715C8.32148 17.9236 8.36953 18.1223 8.47898 18.2852C8.6032 18.4699 8.79023 18.5899 9.01453 18.6073C9.58055 18.6511 10.2762 18.0675 11.0442 16.7496C11.1213 16.7238 11.2029 16.6966 11.3025 16.6629L11.5814 16.5687C11.7579 16.5091 11.8859 16.4665 12.0124 16.4255C12.5609 16.2469 12.9757 16.1341 13.353 16.0699C14.0088 16.421 14.7668 16.6512 15.2773 16.6512C15.6987 16.6512 15.9834 16.4327 16.0863 16.0889C16.1766 15.787 16.1051 15.4369 15.911 15.2433C15.7104 15.0462 15.3415 14.952 14.8411 14.9358V14.9358ZM9.02883 17.9456V17.9372L9.03187 17.9292C9.06617 17.8406 9.11019 17.756 9.16312 17.677C9.26344 17.5228 9.40148 17.3606 9.57258 17.1879C9.66445 17.0953 9.76008 17.0051 9.87234 16.9038C9.89742 16.8813 10.0577 16.7386 10.0877 16.7105L10.3495 16.4667L10.1592 16.7698C9.87047 17.2301 9.60937 17.5615 9.38578 17.7776C9.30352 17.8573 9.23109 17.9159 9.1725 17.9536C9.15316 17.9665 9.13268 17.9777 9.11133 17.9869C9.10172 17.9909 9.09328 17.9932 9.08484 17.9939C9.07594 17.995 9.06689 17.9938 9.05859 17.9904C9.04977 17.9867 9.04224 17.9805 9.03694 17.9725C9.03165 17.9645 9.02882 17.9552 9.02883 17.9456V17.9456ZM11.9805 12.8297L11.9276 12.9234L11.8948 12.8208C11.8221 12.5904 11.7687 12.2433 11.7539 11.9302C11.737 11.5739 11.7654 11.3602 11.8779 11.3602C12.0359 11.3602 12.1083 11.6133 12.1139 11.9941C12.1191 12.3288 12.0663 12.6771 11.9803 12.8297H11.9805ZM11.8444 14.1998L11.8802 14.1049L11.9292 14.194C12.2032 14.6918 12.5588 15.1071 12.9497 15.3966L13.0341 15.4589L12.9312 15.48C12.5484 15.5592 12.192 15.6783 11.7045 15.8749C11.7553 15.8543 11.1977 16.0826 11.0566 16.1367L10.9336 16.1838L10.9992 16.0695C11.2887 15.5655 11.5561 14.9604 11.8441 14.1998H11.8444ZM15.5386 15.9872C15.3544 16.0598 14.9578 15.9949 14.2596 15.6968L14.0824 15.6213L14.2746 15.6073C14.8207 15.5667 15.2074 15.5967 15.4329 15.6792C15.529 15.7144 15.593 15.7587 15.6213 15.8093C15.6363 15.8333 15.6413 15.8621 15.6353 15.8897C15.6294 15.9173 15.6129 15.9415 15.5895 15.9572C15.5746 15.9703 15.5573 15.9805 15.5386 15.9872V15.9872Z" />
            </svg>
          </a>
        </div>
        <div class="flex gap-2 items-center mt-8">
          <svg class="fill-primary" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM19.8563 6.30234L12.4617 12.0563C12.2789 12.1992 12.0234 12.1992 11.8406 12.0563L4.44375 6.30234C4.41587 6.28082 4.39541 6.25112 4.38526 6.21739C4.37511 6.18367 4.37576 6.14761 4.38713 6.11427C4.3985 6.08094 4.42002 6.052 4.44867 6.0315C4.47731 6.01101 4.51165 5.99999 4.54688 6H19.7531C19.7883 5.99999 19.8227 6.01101 19.8513 6.0315C19.88 6.052 19.9015 6.08094 19.9129 6.11427C19.9242 6.14761 19.9249 6.18367 19.9147 6.21739C19.9046 6.25112 19.8841 6.28082 19.8563 6.30234V6.30234Z" />
          </svg>
          <a href="mailto:petrusariacr25@gmail.com" class="text-primary">petrusariacr25@gmail.com</a>
        </div>
        <h2 class="text-xl md:text-2xl font-semibold text-primary mb-4 mt-12">Programming Languages</h2>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="lang in LANGUAGES" :title="lang" />
        </div>
        <h2 class="text-xl md:text-2xl font-semibold text-primary my-4">Technologies</h2>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="tech in TECHNOLOGIES" :title="tech" />
        </div>
        <h2 class="text-xl md:text-2xl font-semibold text-primary my-4">Other tools</h2>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="tool in TOOLS" :title="tool" />
        </div>
      </div>
    </div>
  </section>
  <section id="projects"
    class="px-4 md:px-8 py-16 bg-dark-primary text-light-primary min-h-screen w-full flex justify-center items-center">
    <div class="max-w-[1300px] w-full flex flex-col items-center">
      <h1 class="text-3xl md:text-5xl font-semibold text-primary mb-16">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 items-stretch gap-4">
        <ProjectCard v-for="project in TOP_PROJECTS" v-bind="project" />
      </div>
    </div>
  </section>
</template>