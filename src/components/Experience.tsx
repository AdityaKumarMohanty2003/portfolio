import {
  CloudIcon,
  DatabaseIcon,
  TerminalIcon,
  CodeIcon,
  RocketIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: CodeIcon,
    name: "Backend Development",
    description: "Experience in building scalable APIs with FastAPI and Django.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmloYXM0OTQ2MWo5YnQ0OHJ4amhvMTFna2M2YXdla25rZ3I5cXRtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif" // Replace with your chosen Unsplash link
        alt="Backend Development"
        className="absolute  -top-20 opacity-60"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: TerminalIcon,
    name: "Automation & Scripting",
    description: "Writing efficient Python scripts for task automation.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdnNW91cW5sMGgweXp5bXJtb3AxNHR6ZDNpa2tzZXdndnBuczdrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12W5Sg2koWYnwA/giphy.gif" // Replace with your chosen Unsplash link
        alt="Automation & Scripting"
        className="absolute -top-28 opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: DatabaseIcon,
    name: "Database Management",
    description:
      "Experience with PostgreSQL, Redis, and ORM tools like SQLAlchemy.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2xhem5jaGJuNXRzYng3djJhemp4cnNwbGxkN3prcXMxajRma2h3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kLvKh4G00NBmw/giphy.gif" // Replace with your chosen Unsplash link
        alt="Database Management"
        className="absolute  -top-[12rem] opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CloudIcon,
    name: "Cloud & DevOps",
    description: "Deploying applications using AWS, Docker, and CI/CD pipelines.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaThybmRyejhneTVsNnM4OXZsNnp4bTRzdmNjc3c5Z2U1Yzczbzd3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kgUkCLMu3xhw1T6txv/giphy.gif" // Replace with your chosen Unsplash link
        alt="Cloud & DevOps"
        className="absolute  -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: RocketIcon,
    name: "AI & Machine Learning",
    description: "Working with NLP, LLMs, and building AI-powered applications.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBicGNhdHVoeDhuZmRjMzZ4b3JyMm12NnIwemh4YXlkbzc5ZmpzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kE6xCyOOHoxlS/giphy.gif" // Replace with your chosen Unsplash link
        alt="AI & Machine Learning"
        className="absolute  opacity-60 " />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function Experience() {
  return (
    <div id="about">

      <BentoGrid className="lg:grid-rows-3 mt-10 bg-[#0a0215]">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Experience;