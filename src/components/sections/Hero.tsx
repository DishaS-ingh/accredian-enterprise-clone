import Container from "../ui/Container";
import Button from "../ui/Button";
import { CheckCircle2 } from "lucide-react";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-blue-50 py-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Side */}
            <div className="min-h-[550px] rounded-3xl bg-white p-10 shadow-md">
              <div className="flex h-full flex-col justify-center">
                <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                    Next-Gen Expertise
                    <br />
                    For Your Enterprise
                  </h1>
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                    Empower your workforce with industry-focused learning programs designed
                    to build practical skills, drive innovation, and accelerate business
                    growth.
                  </p>
                  <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Tailored learning solutions</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Industry-leading experts</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Measurable business outcomes</span>
                  </div>
                </div>
                <div className="mt-10">
                    <Button>
                      Enquire Now
                    </Button>
                  </div>
              </div>
            </div>

          {/* Right Side */}
          <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 via-blue-50 to-white">
                <GraduationCap className="h-24 w-24 text-blue-500" />

                <p className="mt-6 text-xl font-medium text-slate-500">
                  Hero Illustration
                </p>
              </div>

        </div>
      </Container>
    </section>
  );
}