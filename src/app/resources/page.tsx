import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "National Suicide Prevention Lifeline",
    description: "Call or text 988 anytime in the US and Canada for free, confidential support from a trained crisis counselor.",
    href: "https://988lifeline.org/",
    cta: "Visit Website",
  },
  {
    title: "Crisis Text Line",
    description: "Text HOME to 741741 from anywhere in the US, anytime, about any type of crisis. A live, trained Crisis Counselor receives the text and responds.",
    href: "https://www.crisistextline.org/",
    cta: "Visit Website",
  },
  {
    title: "The Trevor Project",
    description: "The world's largest suicide prevention and crisis intervention organization for LGBTQ (lesbian, gay, bisexual, transgender, queer, and questioning) young people.",
    href: "https://www.thetrevorproject.org/",
    cta: "Get Support",
  },
  {
    title: "NAMI (National Alliance on Mental Illness)",
    description: "The nation's largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
    href: "https://www.nami.org/",
    cta: "Learn More",
  },
  {
    title: "Psychology Today Therapist Finder",
    description: "A comprehensive directory to find licensed and verified therapists, psychologists, and counselors near you.",
    href: "https://www.psychologytoday.com/us/therapists",
    cta: "Find a Therapist",
  },
  {
    title: "Headspace",
    description: "An app for meditation and sleep. Learn to meditate and live mindfully with hundreds of themed sessions on everything from stress to sleep.",
    href: "https://www.headspace.com/",
    cta: "Explore App",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 animate-in fade-in duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Helpful Resources
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
          While KindredAI is here to listen, sometimes professional help is the best next step. Here are some trusted resources.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-1000" style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader>
              <CardTitle className="font-headline">{resource.title}</CardTitle>
              <CardDescription className="pt-2">{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={resource.href} target="_blank" rel="noopener noreferrer">
                  {resource.cta}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
