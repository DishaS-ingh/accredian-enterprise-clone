import Container from "../ui/Container";
import Button from "../ui/Button";
import { CheckCircle2, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-28 bg-blue-50 py-10 lg:py-16"
    >
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-[#EEF5FF] shadow-lg">

          <div className="grid items-center gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1fr_0.9fr] lg:px-16 lg:py-14">

            {/* Left Content */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <GraduationCap className="h-4 w-4" />
                Trusted by 200+ Enterprises
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Next-Gen{" "}
                <span className="text-blue-600">
                  Expertise
                </span>

                <br />

                For Your{" "}
                <span className="text-blue-600">
                  Enterprise
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-700">
                Empower your workforce with industry-focused learning programs
                designed to build practical skills, drive innovation and
                accelerate business growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <span className="font-medium">
                    Tailored Solutions
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <span className="font-medium">
                    Industry Experts
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <span className="font-medium">
                    Business Outcomes
                  </span>
                </div>

              </div>

              <div className="mt-10">
                <Button>
                  Enquire Now
                </Button>
              </div>

            </div>

            {/* Right Image */}

            <div className="flex items-end justify-center">

              <Image
                src="/images/hero.webp"
                alt="Enterprise Learning"
                width={650}
                height={650}
                priority
                className="h-auto w-full max-w-[320px] md:max-w-[460px] lg:max-w-[620px] object-contain"
              />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}