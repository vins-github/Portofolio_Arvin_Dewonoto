import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { 
    name: "Python", 
    level: 90, 
    category: "Technical Skills",
    subskills: ["AI", "NLP", "Speech", "Data Analysis"] 
  },
  { 
    name: "React", 
    level: 80, 
    category: "Technical Skills",
    subskills: ["Hooks", "Next.js integration"] 
  },
  { 
    name: "Node.js", 
    level: 75, 
    category: "Technical Skills",
    subskills: ["REST API"] 
  },
  { 
    name: "Git/GitHub", 
    level: 85, 
    category: "tools",
    subskills: ["Branching", "CI/CD"] 
  },
    { 
    name: "HTML/CSS", 
    level: 80, 
    category: "Technical Skills",
    subskills: ["Responsive Design", "Flexbox", "Grid"] 
  },
  { 
    name: "Tailwind CSS", 
    level: 80, 
    category: "Technical Skills",
    subskills: ["Utility Classes", "Responsive Layouts"] 
  },
    { 
    name: "Burp Suite", 
    level: 80, 
    category: "tools",
    subskills: ["Web Security Testing"] 
  },
  { 
    name: "Figma", 
    level: 80, 
    category: "tools",
    subskills: ["Prototyping"] 
  },
    { 
    name: "Supabase", 
    level: 80, 
    category: "tools",
    subskills: ["Database", "Authentication"] 
  },
];

const categories = ["all", "Technical Skills", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1 mb-4">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div> */}

              {/* Subskills as mini-boxes */}
              {skill.subskills && (
                <div className="grid grid-cols-2 gap-2">
                  {skill.subskills.map((sub, i) => (
                    <div
                      key={i}
                      className="bg-secondary/40 text-foreground text-xs px-3 py-2 rounded-md text-center hover:bg-primary/30 transition"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
