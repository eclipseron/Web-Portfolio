<script setup lang="ts">
import { computed, ref } from 'vue'
import { TOP_PROJECTS, getProjectById, type ProjectImage } from '~/data/projects'

const route = useRoute()
const projectId = computed(() => String(route.params.id || ''))
const project = computed(() => getProjectById(projectId.value))

const activeImage = ref<ProjectImage | null>(null)

const currentIndex = computed(() =>
  TOP_PROJECTS.findIndex((p) => p.id === projectId.value)
)

const prevProject = computed(() =>
  currentIndex.value > 0 ? TOP_PROJECTS[currentIndex.value - 1] : null
)

const nextProject = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < TOP_PROJECTS.length - 1
    ? TOP_PROJECTS[currentIndex.value + 1]
    : null
)

useSeoMeta({
  title: () =>
    project.value
      ? `${project.value.title} | Petrus Ariaa - eclipseron.dev`
      : 'Project Not Found | Petrus Ariaa - eclipseron.dev',
  ogTitle: () =>
    project.value
      ? `${project.value.title} | Petrus Ariaa - eclipseron.dev`
      : 'Project Not Found | Petrus Ariaa - eclipseron.dev',
  twitterTitle: () =>
    project.value
      ? `${project.value.title} | Petrus Ariaa - eclipseron.dev`
      : 'Project Not Found | Petrus Ariaa - eclipseron.dev',
  description: () =>
    project.value?.brief.headline ||
    project.value?.description ||
    'Project case study and technical architecture by Petrus Ariaa.',
  ogDescription: () =>
    project.value?.brief.headline ||
    project.value?.description ||
    'Project case study and technical architecture by Petrus Ariaa.',
  twitterDescription: () =>
    project.value?.brief.headline ||
    project.value?.description ||
    'Project case study and technical architecture by Petrus Ariaa.',
  ogUrl: () => `https://eclipseron.dev/projects/${projectId.value}`,
  ogType: 'article',
  ogSiteName: 'Eclipseron',
  author: 'Petrus Aria Chevalier Rambing',
  robots: 'index,follow',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <!-- Floating Navigation Pill matching HomeNav / ResumeNav -->
  <div class="z-100 fixed flex justify-center w-full py-4">
    <nav
      class="bg-slate-900/95 backdrop-blur-md border border-primary/15 flex gap-4 md:gap-8 items-center text-light-primary px-6 md:px-14 py-4 text-lg rounded-full shadow-lg">
      <NuxtLink
        class="hover:text-primary transition-colors flex items-center gap-1.5"
        to="/#projects">
        <span>&larr;</span>
        <span>Projects</span>
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary transition-colors hidden md:block"
        to="/">
        Home
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary transition-colors"
        to="/petrusariaa">
        Resume
      </NuxtLink>
      <div class="border-l border-light-primary/50 h-5"></div>
      <a href="https://linkedin.com/in/petrusariaa" target="_blank" rel="noopener noreferrer">
        <svg
          class="fill-light-primary hover:fill-primary transition-colors"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM8.18672 18.6023H5.40469V9.65391H8.18672V18.6023ZM6.79688 8.43047C6.47795 8.43047 6.16619 8.3359 5.90102 8.15871C5.63584 7.98153 5.42917 7.72969 5.30712 7.43505C5.18507 7.1404 5.15314 6.81618 5.21536 6.50339C5.27758 6.19059 5.43115 5.90327 5.65667 5.67776C5.88218 5.45225 6.1695 5.29867 6.48229 5.23645C6.79509 5.17423 7.11931 5.20617 7.41395 5.32821C7.7086 5.45026 7.96044 5.65694 8.13762 5.92211C8.3148 6.18729 8.40937 6.49905 8.40937 6.81797C8.40703 7.70859 7.68516 8.43047 6.79688 8.43047ZM18.6023 18.6023H15.8227V14.25C15.8227 13.2117 15.8039 11.8781 14.3766 11.8781C12.9305 11.8781 12.7078 13.0078 12.7078 14.175V18.6023H9.93047V9.65391H12.5977V10.8773H12.6352C13.0055 10.1742 13.9125 9.43125 15.2672 9.43125C18.0844 9.43125 18.6023 11.2852 18.6023 13.6945V18.6023V18.6023Z" />
        </svg>
      </a>
      <a href="https://github.com/eclipseron" target="_blank" rel="noopener noreferrer">
        <svg
          class="fill-light-primary hover:fill-primary transition-colors"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.9906 1.78906C6.19453 1.78672 1.5 6.47891 1.5 12.2703C1.5 16.85 4.43672 20.743 8.52656 22.1727C9.07734 22.3109 8.99297 21.9195 8.99297 21.6523V19.8359C5.8125 20.2086 5.68359 18.1039 5.47031 17.7523C5.03906 17.0164 4.01953 16.8289 4.32422 16.4773C5.04844 16.1047 5.78672 16.5711 6.64219 17.8344C7.26094 18.7508 8.46797 18.5961 9.07969 18.4438C9.21328 17.893 9.49922 17.4008 9.89297 17.0188C6.59766 16.4281 5.22422 14.4172 5.22422 12.0266C5.22422 10.8664 5.60625 9.8 6.35625 8.93985C5.87812 7.52188 6.40078 6.30781 6.47109 6.12734C7.83281 6.00547 9.24844 7.10235 9.35859 7.18906C10.132 6.98047 11.0156 6.87031 12.0047 6.87031C12.9984 6.87031 13.8844 6.98516 14.6648 7.19609C14.9297 6.99453 16.2422 6.05234 17.5078 6.16719C17.5758 6.34766 18.0867 7.5336 17.6367 8.93281C18.3961 9.79531 18.7828 10.8711 18.7828 12.0336C18.7828 14.4289 17.4 16.4422 14.0953 17.0234C14.3784 17.3018 14.6031 17.6338 14.7564 18C14.9098 18.3662 14.9886 18.7593 14.9883 19.1563V21.793C15.007 22.0039 14.9883 22.2125 15.3398 22.2125C19.4906 20.8133 22.4789 16.8922 22.4789 12.2727C22.4789 6.47891 17.782 1.78906 11.9906 1.78906V1.78906Z" />
        </svg>
      </a>
    </nav>
  </div>

  <main class="bg-dark-primary text-light-primary min-h-screen w-full flex justify-center pt-32 pb-24 px-4 md:px-8">
    <!-- Fallback if unknown project ID -->
    <div v-if="!project" class="max-w-[900px] w-full flex flex-col items-center justify-center text-center py-24">
      <p class="font-mono text-primary text-sm tracking-widest uppercase mb-3">404 // Archive Entry Missing</p>
      <h1 class="text-3xl md:text-5xl font-bold mb-4">Project Not Found</h1>
      <p class="text-light-primary/70 mb-8 max-w-md">
        Looks like this path leads to uncharted territory, Traveller. Let&apos;s head back to the forge.
      </p>
      <NuxtLink
        to="/#projects"
        class="text-dark-primary bg-primary font-semibold px-6 py-2.5 rounded-lg hover:bg-primary/80 transition-colors">
        Return to Projects
      </NuxtLink>
    </div>

    <!-- Project Detail Content -->
    <div v-else class="max-w-[1100px] w-full">
      <!-- Top Identity Header -->
      <header class="mb-8">
        <div class="flex items-center gap-2 font-mono text-xs md:text-sm text-primary/80 mb-4">
          <NuxtLink to="/#projects" class="hover:text-primary hover:underline">~/projects</NuxtLink>
          <span>/</span>
          <span class="text-light-primary/90">{{ project.id }}</span>
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="flex items-center gap-5">
            <div
              v-if="project.imgUrl"
              class="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary/10 border border-primary/30 p-3 flex items-center justify-center shrink-0">
              <img :src="project.imgUrl" :alt="project.title" class="w-full h-full object-contain" />
            </div>
            <div>
              <h1 class="text-3xl md:text-5xl font-bold text-primary leading-tight">
                {{ project.title }}
              </h1>
              <p class="text-light-primary/75 text-base md:text-lg mt-1">
                {{ project.description }}
              </p>
            </div>
          </div>

          <!-- External Links -->
          <div class="flex items-center gap-3 shrink-0">
            <a
              v-if="project.previewUrl"
              :href="project.previewUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-primary text-dark-primary font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/80 transition-colors flex items-center gap-2 text-sm md:text-base">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12V12ZM11.25 1.6155C10.245 1.9215 9.2475 2.8455 8.4195 4.398C8.1467 4.91414 7.91207 5.44958 7.7175 6H11.25V1.6155ZM6.135 6C6.38501 5.20323 6.70631 4.4306 7.095 3.6915C7.35436 3.20108 7.65388 2.73298 7.9905 2.292C6.13201 3.06274 4.53301 4.34943 3.3825 6H6.135ZM5.262 11.25C5.307 9.9345 5.469 8.673 5.73 7.5H2.511C1.95168 8.67758 1.61792 9.94952 1.527 11.25H5.262ZM7.2705 7.5C6.97547 8.7297 6.80561 9.9861 6.7635 11.25H11.25V7.5H7.2705ZM12.75 7.5V11.25H17.235C17.1934 9.98615 17.0241 8.72975 16.7295 7.5H12.75ZM6.765 12.75C6.80662 14.0138 6.97598 15.2702 7.2705 16.5H11.25V12.75H6.765ZM12.75 12.75V16.5H16.7295C17.01 15.3525 17.1885 14.088 17.2365 12.75H12.75ZM7.7175 18C7.9245 18.579 8.16 19.116 8.4195 19.602C9.2475 21.1545 10.2465 22.077 11.25 22.3845V18H7.7175ZM7.9905 21.708C7.65386 21.267 7.35434 20.7989 7.095 20.3085C6.70632 19.5694 6.38502 18.7968 6.135 18H3.3825C4.53295 19.6506 6.13196 20.9373 7.9905 21.708V21.708ZM5.73 16.5C5.45875 15.2671 5.30208 14.0118 5.262 12.75H1.527C1.62 14.085 1.9635 15.3495 2.511 16.5H5.73ZM16.0095 21.708C17.868 20.9373 19.4671 19.6506 20.6175 18H17.865C17.615 18.7968 17.2937 19.5694 16.905 20.3085C16.6457 20.799 16.3462 21.2671 16.0095 21.708V21.708ZM12.75 18V22.3845C13.755 22.0785 14.7525 21.1545 15.5805 19.602C15.84 19.116 16.0755 18.579 16.2825 18H12.75ZM18.27 16.5H21.489C22.0365 15.3495 22.38 14.085 22.473 12.75H18.738C18.6979 14.0118 18.5413 15.2671 18.27 16.5ZM22.473 11.25C22.382 9.94952 22.0483 8.67759 21.489 7.5H18.27C18.531 8.673 18.693 9.9345 18.738 11.25H22.473ZM16.905 3.6915C17.2755 4.3875 17.598 5.1615 17.865 6H20.6175C19.4671 4.34937 17.868 3.06267 16.0095 2.292C16.3365 2.718 16.6365 3.189 16.905 3.6915V3.6915ZM16.2825 6C16.0879 5.44957 15.8533 4.91413 15.5805 4.398C14.7525 2.8455 13.755 1.923 12.75 1.6155V6H16.2825Z"
                  fill="#09131C" />
              </svg>
              <span>Live Preview</span>
            </a>

            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-primary/15 text-primary border border-primary/40 font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/25 transition-colors flex items-center gap-2 text-sm md:text-base">
              <svg
                class="fill-primary"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9906 1.78906C6.19453 1.78672 1.5 6.47891 1.5 12.2703C1.5 16.85 4.43672 20.743 8.52656 22.1727C9.07734 22.3109 8.99297 21.9195 8.99297 21.6523V19.8359C5.8125 20.2086 5.68359 18.1039 5.47031 17.7523C5.03906 17.0164 4.01953 16.8289 4.32422 16.4773C5.04844 16.1047 5.78672 16.5711 6.64219 17.8344C7.26094 18.7508 8.46797 18.5961 9.07969 18.4438C9.21328 17.893 9.49922 17.4008 9.89297 17.0188C6.59766 16.4281 5.22422 14.4172 5.22422 12.0266C5.22422 10.8664 5.60625 9.8 6.35625 8.93985C5.87812 7.52188 6.40078 6.30781 6.47109 6.12734C7.83281 6.00547 9.24844 7.10235 9.35859 7.18906C10.132 6.98047 11.0156 6.87031 12.0047 6.87031C12.9984 6.87031 13.8844 6.98516 14.6648 7.19609C14.9297 6.99453 16.2422 6.05234 17.5078 6.16719C17.5758 6.34766 18.0867 7.5336 17.6367 8.93281C18.3961 9.79531 18.7828 10.8711 18.7828 12.0336C18.7828 14.4289 17.4 16.4422 14.0953 17.0234C14.3784 17.3018 14.6031 17.6338 14.7564 18C14.9098 18.3662 14.9886 18.7593 14.9883 19.1563V21.793C15.007 22.0039 14.9883 22.2125 15.3398 22.2125C19.4906 20.8133 22.4789 16.8922 22.4789 12.2727C22.4789 6.47891 17.782 1.78906 11.9906 1.78906V1.78906Z" />
              </svg>
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </header>

      <!-- =========================================================================
           VISUAL SHOWCASE (2+ PROJECT IMAGES WITH LIGHTBOX)
           ========================================================================= -->
      <section v-if="project.images && project.images.length" class="mb-14">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl md:text-3xl font-semibold text-primary">
            Showcase
          </h2>
          <span class="font-mono text-xs text-primary/60 uppercase tracking-wider">
            Click to expand
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure v-for="(image, idx) in project.images" :key="idx" @click="activeImage = image"
            class="group rounded-xl border border-primary/25 bg-dark-secondary/90 overflow-hidden cursor-pointer hover:border-primary/60 transition-all flex flex-col">
            <!-- Top Figure Header Bar -->
            <div
              class="px-4 py-2.5 bg-primary/10 border-b border-primary/20 flex items-center justify-between font-mono text-xs">
              <span class="text-primary font-semibold truncate">{{ image.label }}</span>
              <span class="text-light-primary/60 group-hover:text-primary transition-colors shrink-0">
                [EXPAND &#8599;]
              </span>
            </div>

            <!-- Image Viewport -->
            <div class="relative aspect-video w-full overflow-hidden bg-dark-primary">
              <img :src="image.src" :alt="image.alt"
                class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
            </div>

            <!-- Caption Footer -->
            <figcaption class="p-4 text-sm text-light-primary/80 leading-relaxed border-t border-primary/15">
              {{ image.caption }}
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- =========================================================================
           FRESH TOP SUMMARY: "FORGE DOSSIER & SIGNAL TRACE" (No Generic 3-Cards!)
           A unified architectural blueprint combining a live telemetry ribbon,
           connected signal-flow trace (Challenge -> Forged System -> Outcome),
           and a technical specification ledger.
           ========================================================================= -->
      <section
        aria-label="Project Summary Dossier"
        class="rounded-2xl border border-primary/30 bg-dark-secondary/90 overflow-hidden mb-14 shadow-[0_0_50px_-15px_rgba(107,231,241,0.12)]">
        <!-- Top Telemetry Ribbon -->
        <div
          class="bg-primary/10 border-b border-primary/20 px-5 md:px-8 py-3 flex flex-wrap items-center justify-between gap-y-2 gap-x-6 font-mono text-xs md:text-sm">
          <div class="flex items-center gap-2.5 text-primary font-semibold">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>PROJECT INFO // {{ project.status.toUpperCase() }}</span>
          </div>
          <!-- <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-light-primary/80">
            <span><strong class="text-primary/80">ROLE:</strong> {{ project.role }}</span>
            <span class="text-primary/40 hidden sm:inline">|</span>
            <span><strong class="text-primary/80">TIMELINE:</strong> {{ project.timeline }}</span>
            <span class="text-primary/40 hidden sm:inline">|</span>
            <span><strong class="text-primary/80">DOMAIN:</strong> {{ project.category }}</span>
          </div> -->
        </div>

        <!-- Asymmetric Split Blueprint -->
        <div class="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-primary/20">
          <!-- Left Column (7/12): Executive Synthesis + Continuous Signal Trace -->
          <div class="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
            <!-- Executive Headline -->
            <div class="border-l-2 border-primary pl-4 md:pl-5 mb-8">
              <p class="font-mono text-xs uppercase tracking-widest text-primary/70 mb-1.5">
                summary
              </p>
              <p class="text-lg md:text-xl font-medium leading-relaxed text-light-primary">
                {{ project.brief.headline }}
              </p>
            </div>

            <!-- Continuous Signal Trace (Instead of 3 cards) -->
            <div class="relative pl-6 md:pl-7 border-l border-dashed border-primary/40 space-y-6 ml-2">
              <!-- Node 1: The Bottleneck -->
              <div class="relative">
                <span
                  class="absolute -left-[31px] md:-left-[35px] top-1 w-3.5 h-3.5 rounded-full bg-dark-secondary border-2 border-primary"></span>
                <div class="flex items-baseline gap-2 mb-1">
                  <span class="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                    01 // bottleneck
                  </span>
                </div>
                <div class="text-sm md:text-base text-light-primary/85 leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:space-y-1">
                  <component :is="project.brief.challenge" />
                </div>
              </div>

              <!-- Node 2: Forged Architecture -->
              <div class="relative">
                <span
                  class="absolute -left-[31px] md:-left-[35px] top-1 w-3.5 h-3.5 rounded-full bg-primary/40 border-2 border-primary"></span>
                <div class="flex items-baseline gap-2 mb-1">
                  <span class="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                    02 // proposal
                  </span>
                </div>
                <div class="text-sm md:text-base text-light-primary/85 leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:space-y-1">
                  <component :is="project.brief.solution" />
                </div>
              </div>

              <!-- Node 3: Field Outcome -->
              <div class="relative">
                <span
                  class="absolute -left-[31px] md:-left-[35px] top-1 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_10px_#6BE7F1]"></span>
                <div class="flex items-baseline gap-2 mb-1">
                  <span class="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                    03 // impact
                  </span>
                </div>
                <div class="text-sm md:text-base text-light-primary/85 leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:space-y-1">
                  <component :is="project.brief.impact" />
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column (5/12): System Specifications Ledger & Arsenal -->
          <div class="lg:col-span-5 p-6 md:p-8 bg-primary/3 flex flex-col justify-between gap-8">
            <!-- Technical Spec Ledger -->
            <div>
              <div class="flex items-center justify-between mb-4">
                <h2 class="font-mono text-xs uppercase tracking-widest text-primary">
                  System Specifications
                </h2>
                <span class="font-mono text-xs text-primary/50">[SPEC_SHEET]</span>
              </div>
              <dl class="divide-y divide-primary/15 border-y border-primary/15">
                <div
                  v-for="spec in project.brief.specs"
                  :key="spec.label"
                  class="py-3 flex items-baseline justify-between gap-4 text-sm">
                  <dt class="font-mono text-light-primary/65 shrink-0">{{ spec.label }}</dt>
                  <dd class="font-mono text-right text-light-primary font-medium">{{ spec.value }}</dd>
                </div>
              </dl>
            </div>

            <!-- Arsenal / Tech Stack Badges -->
            <!-- <div>
              <div class="flex items-center justify-between mb-3">
                <h2 class="font-mono text-xs uppercase tracking-widest text-primary">
                  Tools &amp; Arsenal
                </h2>
                <span class="font-mono text-xs text-primary/50">{{ project.tags.length }} MODULES</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="font-mono text-xs md:text-sm px-2.5 py-1 bg-primary/20 text-light-primary border border-primary/30 rounded-lg">
                  {{ tag }}
                </span>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <!-- =========================================================================
           DETAILED CASE STUDY BODY
           ========================================================================= -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Main Narrative & Architecture (8 cols) -->
        <div class="lg:col-span-8 space-y-12">
          <!-- Backstory Section -->
          <!-- <section>
            <h2 class="text-2xl md:text-3xl font-semibold text-primary mb-4">
              The Backstory
            </h2>
            <div class="space-y-4 text-base md:text-lg leading-relaxed text-light-primary/90">
              <p v-for="(paragraph, idx) in project.story" :key="idx">
                {{ paragraph }}
              </p>
            </div>
          </section> -->

          <!-- Architecture / How It Was Forged -->
          <section>
            <h2 class="text-2xl md:text-3xl font-semibold text-primary mb-6">
              How It Was Forged
            </h2>
            <div class="divide-y divide-primary/20 border-y border-primary/20">
              <div
                v-for="(item, idx) in project.architecture"
                :key="item.title"
                class="py-5 flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
                <span class="font-mono text-primary/80 text-sm font-semibold pt-1 shrink-0">
                  0{{ idx + 1 }} //
                </span>
                <div>
                  <h3 class="text-lg md:text-xl font-semibold text-light-primary mb-1.5">
                    {{ item.title }}
                  </h3>
                  <p class="text-light-primary/80 leading-relaxed text-sm md:text-base">
                    {{ item.detail }}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Side Column: Key Highlights & Quick Actions (4 cols) -->
        <!-- <aside class="lg:col-span-4 space-y-8">
          <div class="bg-primary/10 border border-primary/25 rounded-xl p-6">
            <h2 class="text-xl font-semibold text-primary mb-4">
              Key Highlights
            </h2>
            <ul class="space-y-3.5">
              <li
                v-for="(highlight, idx) in project.highlights"
                :key="idx"
                class="flex items-start gap-3 text-sm md:text-base leading-relaxed text-light-primary/90">
                <span class="text-primary font-mono mt-0.5 shrink-0">&#9670;</span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>

          <div class="border border-light-primary/15 rounded-xl p-6">
            <p class="font-mono text-xs uppercase tracking-widest text-primary mb-2">
              Cross Paths
            </p>
            <p class="text-sm text-light-primary/80 leading-relaxed mb-4">
              Curious about the engineering decisions behind <span class="text-light-primary font-semibold">{{ project.title }}</span>? Let&apos;s forge something remarkable together.
            </p>
            <a
              href="mailto:petrusariacr25@gmail.com"
              class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <span>petrusariacr25@gmail.com</span>
              <span>&rarr;</span>
            </a>
          </div>
        </aside> -->
      </div>

      <!-- Bottom Navigation: Previous / Next Project -->
      <nav
        aria-label="Project pagination"
        class="mt-16 pt-8 border-t border-light-primary/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NuxtLink
          v-if="prevProject"
          :to="`/projects/${prevProject.id}`"
          class="group p-4 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all flex flex-col items-start">
          <span class="font-mono text-xs text-primary/70 mb-1">&larr; Previous Project</span>
          <span class="text-lg font-semibold text-light-primary group-hover:text-primary transition-colors">
            {{ prevProject.title }}
          </span>
        </NuxtLink>
        <div v-else></div>

        <NuxtLink
          v-if="nextProject"
          :to="`/projects/${nextProject.id}`"
          class="group p-4 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all flex flex-col items-end text-right">
          <span class="font-mono text-xs text-primary/70 mb-1">Next Project &rarr;</span>
          <span class="text-lg font-semibold text-light-primary group-hover:text-primary transition-colors">
            {{ nextProject.title }}
          </span>
        </NuxtLink>
      </nav>
    </div>

    <!-- Lightbox Modal for Expanding Project Images -->
    <div
      v-if="activeImage"
      @click="activeImage = null"
      class="fixed inset-0 z-200 bg-dark-primary/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10">
      <div
        @click.stop
        class="max-w-5xl w-full rounded-2xl border border-primary/40 bg-dark-secondary overflow-hidden shadow-2xl">
        <div class="px-5 py-3 bg-primary/10 border-b border-primary/25 flex items-center justify-between font-mono text-xs md:text-sm">
          <span class="text-primary font-semibold">{{ activeImage.label }}</span>
          <button
            type="button"
            @click="activeImage = null"
            class="text-light-primary/80 hover:text-primary cursor-pointer px-2 py-0.5 rounded border border-primary/30">
            CLOSE &times;
          </button>
        </div>
        <div class="bg-dark-primary p-2 md:p-4 flex items-center justify-center max-h-[75vh]">
          <img
            :src="activeImage.src"
            :alt="activeImage.alt"
            class="max-h-[70vh] w-auto object-contain rounded-lg" />
        </div>
        <div class="px-5 py-3.5 text-sm text-light-primary/85 border-t border-primary/20">
          {{ activeImage.caption }}
        </div>
      </div>
    </div>
  </main>
</template>
