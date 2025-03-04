import { IconCloud } from "@/components/ui/interactive-icon-cloud"

import { SparklesText } from "@/components/ui/sparkles-text"


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "python",
]

export default function Skills() {
  return (
    <div className="mt-10 h-screen flex flex-col items-center justify-center space-y-8 bg-[#0a0215]" id="skills">
      <div className="flex space-x-2 ">
        <SparklesText text="Core" />
        <SparklesText text="Competencies" className="text-purple" />
      </div>
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg pb-20 pt-8">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  )
}
