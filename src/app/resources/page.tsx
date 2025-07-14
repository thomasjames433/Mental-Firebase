import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "KIRAN Mental Health Helpline",
    description: "A 24/7 toll-free mental health rehabilitation helpline (1800-599-0019) launched by the Ministry of Social Justice and Empowerment.",
    href: "https://www.google.com/search?q=KIRAN+Mental+Health+Helpline",
    cta: "Learn More",
  },
  {
    title: "Vandrevala Foundation",
    description: "A non-profit organization in India that provides free psychological counseling and crisis mediation. Call 9999666555.",
    href: "https://www.vandrevalafoundation.com/",
    cta: "Visit Website",
  },
  {
    title: "iCALL Psychosocial Helpline",
    description: "A helpline by TISS that provides free telephone and email-based counseling services for psychosocial support. Call 022-25521111.",
    href: "https://icallhelpline.org/",
    cta: "Visit Website",
  },
  {
    title: "Fortis Stress Helpline",
    description: "A 24x7 helpline by Fortis Healthcare for people experiencing stress, anxiety, and depression. Call +91-8376804102.",
    href: "https://www.fortishealthcare.com/india/speciality-detail/mental-health-and-behavioural-sciences",
    cta: "Get Support",
  },
  {
    title: "Indian Association of Clinical Psychologists",
    description: "A directory to find registered clinical psychologists across India for professional help.",
    href: "https://iacp.in/iacp-register-of-members/",
    cta: "Find a Psychologist",
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
          While our AI is here to listen, sometimes professional help is the best next step. Here are some trusted resources available in India.
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
