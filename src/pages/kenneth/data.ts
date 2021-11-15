type KennethProject = {
    title: string;
    subtitle: string;
    description: string;
    image: number;
    link: string;
}

type KennethSkill = {
    name: string;
}

export const projects: KennethProject[] = [
    {
        title: "MSM Property Manager",
        subtitle: ".NET Stack",
        description:
            "A React and .NET full-stack web application for Managing Properties",
        image: 1,
        link: "https://github.com/kennethcole5/CMPS285",
    },
    {
        title: "React Pokedex",
        subtitle: "Pure React",
        description:
            "A React Pokedex built with an API",
        image: 1,
        link: "https://github.com/kennethcole5/Pokedex-React-App",
    },
    {
        title: "CMPS 375",
        subtitle: "OpenCV and Python",
        description:
            "Detects Teacher's Face and alerts students.",
        image: 1,
        link: "",
    },
    {
        title: "CMPS 411",
        subtitle: "OpenCV and Python",
        description:
            "Detect's Student's Face.",
        image: 1,
        link: "https://github.com/heidiWesty/ala-kazim",
    },
];

export const skills: KennethSkill[] = [
    {
        name: "JavaScript"
    },
    {
        name: "React"
    },
    {
        name: ".NET"
    },
    {
        name: "Python"
    },
    {
        name: "Networking"
    },
    {
        name: "OpenCV"
    },
];
