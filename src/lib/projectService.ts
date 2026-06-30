import { projects } from "@/data/projects";

import { getRepository } from "./github";

export async function getProjects() {

  const repositories = await Promise.all(

    projects.map(async (project) => {

      const github = await getRepository(project.github);

      return {

        ...project,

        github,

      };

    })

  );

  return repositories;

}