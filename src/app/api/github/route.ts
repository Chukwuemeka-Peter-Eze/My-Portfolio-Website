import { NextResponse } from "next/server";

import { getProjects } from "@/lib/projectService";

export async function GET() {

  try {

    const projects = await getProjects();

    return NextResponse.json(projects);

  }

  catch (error) {

    return NextResponse.json(

      {

        success: false,

        error:

          error instanceof Error

            ? error.message

            : "Unknown error",

      },

      {

        status: 500,

      }

    );

  }

}