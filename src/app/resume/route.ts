import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    new URL("/resume/chukwuemekapetereze_devops_resume.pdf", "https://chukwuemekapetereze.online")
  );
}