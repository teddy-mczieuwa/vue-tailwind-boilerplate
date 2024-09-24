<template>
  <div class="bg-green-50 h-screen md:h-none overflow-y-scroll mt-2 md:mt-0">
    <section class="mt-4 md:mt-4 md:w-full bg-green-50 md:overflow-y-scroll">
      <div class="rounded-lg md:overflow-y-scroll">
        <h3 class="text-2xl text-green-800 mb-3 md:text-left text-center">
          Accordion
        </h3>

        <div
          class="mx-auto rounded-lg md:border-0 border-green-800 md:py-8 mt-16 md:mt-10 mb-8 md:mb-2 h-96 flex justify-center w-full"
        >
          <accordion-list
            class="w-3/5 rounded-lg overflow-hidden shadow-lg h-fit"
            tag="ul"
          >
            <accordion-item v-slot="{ setCurrentItem, active }" activeItem="1">
              <li
                :aria-expanded="active"
                class="border-green-500 bg-green-200 border-b last:border-b-0 accordion-item"
                @click="() => setCurrentItem()"
              >
                <div class="cursor-pointer py-4 mx-4 flex justify-between">
                  <h2 class="text-green-900">Vue</h2>
                  <svg
                    :class="{ 'rotate-180': active }"
                    class="text-green-600 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
                    />
                  </svg>
                </div>

                <div
                  v-if="active"
                  class="py-4 border-t-1 bg-green-100 border-green-500 px-4"
                >
                  <p class="text-green-800">
                    Builds on top of standard HTML, CSS and JavaScript with
                    intuitive API and world-class documentation.Truly reactive,
                    compiler-optimized rendering system that rarely requires
                    manual optimization. A rich, incrementally adoptable
                    ecosystem.
                  </p>
                </div>
              </li>
            </accordion-item>
            <accordion-item v-slot="{ setCurrentItem, active }" activeItem="2">
              <li
                :aria-expanded="active"
                class="border-green-500 bg-green-200 border-b last:border-b-0 accordion-item"
                @click="() => setCurrentItem()"
              >
                <div class="cursor-pointer py-4 mx-4 flex justify-between">
                  <h2 class="text-green-900">Tailwind</h2>
                  <svg
                    :class="{ 'rotate-180': active }"
                    class="text-green-600 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
                    />
                  </svg>
                </div>

                <div
                  v-if="active"
                  class="py-4 border-t-1 bg-green-100 border-green-500 px-4"
                >
                  <p class="text-green-800">
                    Because Tailwind is so low-level, it never encourages you to
                    design the same site twice. Even with the same color palette
                    and sizing scale, it's easy to build the same component with
                    a completely different look in the next project.
                  </p>
                </div>
              </li>
            </accordion-item>
            <accordion-item v-slot="{ setCurrentItem, active }" activeItem="3">
              <li
                :aria-expanded="active"
                class="border-green-500 bg-green-200 border-b last:border-b-0 accordion-item"
                @click="() => setCurrentItem()"
              >
                <div class="cursor-pointer py-4 mx-4 flex justify-between">
                  <h2 class="text-green-900">Typescript</h2>
                  <svg
                    :class="{ 'rotate-180': active }"
                    class="text-green-600 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
                    />
                  </svg>
                </div>

                <div
                  v-if="active"
                  class="py-4 border-t-1 bg-green-100 border-green-500 px-4"
                >
                  <p class="text-green-800">
                    TypeScript adds additional syntax to JavaScript to support a
                    tighter integration with your editor. Catch errors early in
                    your editor. TypeScript code converts to JavaScript, which
                    runs anywhere JavaScript runs: In a browser, on Node.js or
                    Deno and in your apps.
                  </p>
                </div>
              </li>
            </accordion-item>
          </accordion-list>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { AccordionList, AccordionItem } from "@/components/Accordion";
</script>
