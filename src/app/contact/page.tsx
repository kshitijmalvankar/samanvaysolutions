"use client";

import Image from "next/image";
import { Mail, MapPin, Clock, ArrowRight, Send, Phone } from "lucide-react";
import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: [
      "404, Magnolia Business Center,",
      "Baner-Pashan Link Road,",
      "Pune, Maharashtra [IN] – 411021",
    ],
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["samanvaysolutions2024@gmail.com", "projects.samanvay@gmail.com"],
    links: [
      "mailto:samanvaysolutions2024@gmail.com",
      "mailto:projects.samanvay@gmail.com",
    ],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST"],
    color: "bg-green-100 text-green-600",
  },
];

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mrpgjlza");
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
             <Badge className="-translate-y-8 bg-orange-600/20 text-orange-300 border-orange-500/30 backdrop-blur-sm mb-4 px-4 py-1.5 text-lg md:text-xl font-semibold">
                Get in Touch
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Let&apos;s Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Something Great
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed">
                Whether you have a project in mind or need expert consultation,
                we&apos;re here to help.
              </p>
            </FadeIn>
          </div>
        </div>
       
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background -mt-16 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-8">
            {contactInfo.map((info) => (
              <StaggerItem key={info.title}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1.5">
                          {info.title}
                        </h3>
                        {info.lines.map((line, i) =>
                          info.links ? (
                            <a
                              key={i}
                              href={info.links[i]}
                              className="block text-sm text-foreground hover:text-primary transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={i} className="text-sm text-foreground">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="-translate-y-10 py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div>
                <Badge
                  variant="secondary"
                   className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5 text-lg md:text-xl font-semibold"
                >
                  Get in Touch
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-foreground mb-10 leading-relaxed">
                  Whether you have a specific project in mind or just want to
                  explore possibilities, we&apos;re here to help. Reach out to us
                  using the form or contact details below.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                        Visit Us
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        Office No. 404, 4th Floor,
                        <br />
                        Magnolia Business Center,
                        <br />
                        Baner-Pashan Link Road,
                        <br />
                        Pune, Maharashtra [IN] – 411021


                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                        Email Us
                      </h3>
                      <a
                        href="mailto:[EMAIL_ADDRESS]"
                        className="text-foreground hover:text-primary transition-colors text-lg"
                      >
                        samanvaysolutions2024@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                        Call Us
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="text-foreground hover:text-primary transition-colors text-lg"
                      >
                        +91 987 654 3210
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right">
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-foreground mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
                {state.succeeded && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                    <p className="font-semibold">Thank you!</p>
                    <p className="text-sm mt-1">
                      Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                {state.errors && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                    <p className="font-semibold">Something went wrong.</p>
                    <p className="text-sm mt-1">
                      Please try again or contact us directly by email.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-foreground"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        className="bg-background border-border focus:border-primary focus:ring-primary h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-foreground"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        className="bg-background border-border focus:border-primary focus:ring-primary h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="samanvay@company.com"
                      className="bg-background border-border focus:border-primary focus:ring-primary h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      className="bg-background border-border focus:border-primary focus:ring-primary h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Type
                      
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="flex h-11 w-full rounded-md border border-border bg-background px-3 py-2 text-muted-foreground ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <option value="">Select a project type</option>
                      <option value="industrial">Industrial</option>
                      <option value="institutional">Institutional</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="hospitality">
                        Hospitality & Residential
                      </option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      rows={5}
                      className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={state.submitting}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-[1.02]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </FadeIn>
            {/* Sidebar */}
            <FadeIn direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                {/* Map */}
                <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                    alt="Pune, Maharashtra"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold mb-1">
                      Baner-Pashan Link Road, Pune
                    </p>
                    <a
                      href="https://maps.google.com/?q=Magnolia+Business+Center+Baner+Pashan+Link+Road+Pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      View on Google Maps
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Quick Info */}
                <Card className="border-0 shadow-lg bg-primary text-primary-foreground overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <h3 className="font-semibold text-lg mb-3">
                      Why Choose Samanvay?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "50+ projects completed successfully",
                        "Expertise across 4 major sectors",
                        "Network of 8-decade experienced associates",
                        "GRIHA & IGBC certified project experience",
                        "End-to-end project life cycle management",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-primary-foreground/90"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/60 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Direct Email */}
                <Card className="border border-border hover:border-primary/50 transition-colors bg-card">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">
                      Prefer Email?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Write to us directly
                    </p>
                    <a
                      href="mailto:samanvaysolutions2024@gmail.com"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      samanvaysolutions2024@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
