import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HeartHandshake,
  Lock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Completely Anonymous",
    description:
      "Your conversations are private and secure. No sign-up required, ensuring your complete anonymity.",
    delay: "animation-delay-200",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Compassionate AI",
    description:
      "Powered by Gemini, our AI is designed to listen, understand, and provide supportive guidance.",
    delay: "animation-delay-400",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Helpful Resources",
    description:
      "Access a curated list of mental health resources for when you need extra support.",
    delay: "animation-delay-200",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center animate-in fade-in duration-1000">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6 text-center md:ml-28">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline animate-in fade-in slide-in-from-bottom-5 duration-1000">
              A safe space for NITC students.
            </h1>
            <p className="text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 animation-delay-200">
              NITC-MindCare offers a gentle, judgment-free zone to explore your
              feelings with a compassionate AI companion.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/chat">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Chatting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24">
        <div className="container px-4 md:px-6 md:ml-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Why Use NITC-MindCare?
            </h2>
            <p className="max-w-2xl mx-auto mt-2 text-muted-foreground md:text-lg">
              We're here to support your mental wellness journey at NIT Calicut.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 animate-in fade-in slide-in-from-bottom-10 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0 mb-4">{feature.icon}</CardHeader>
                <CardContent className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2 font-headline">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="-mt-2 w-full px-4 md:px-6">
      <div className="text-white text-sm md:text-base text-right">
        <p className="font-semibold">For enquiries contact Thomas James</p>
        <p>
          <a href="mailto:thomaspjames433@gmail.com" className="underline hover:opacity-80">
            thomaspjames433@gmail.com
          </a>
        </p>
      </div>
    </footer>
    </div>
  );
}
