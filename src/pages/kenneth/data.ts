type KennethProject = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
}

type KennethSkill = {
    name: string;
}

export const projects: KennethProject[] = [
    {
        title: "React Reserve",
        subtitle: "MERN Stack",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "./project-1.jpg",
        link: "",
    },
    {
        title: "React Tracks",
        subtitle: "React and Python",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "./project-1.jpg",
        link: "",
    },
    {
        title: "DevChat",
        subtitle: "React and Firebase",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "./project-1.jpg",
        link: "",
    },
    {
        title: "Epic Todo App",
        subtitle: "React Hooks",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "./project-1.jpg",
        link: "",
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
        name: "Next.js"
    },
    {
        name: "Node"
    },
    {
        name: "GraphQL"
    },
    {
        name: "Material UI"
    },
];
