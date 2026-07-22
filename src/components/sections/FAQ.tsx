"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import { faqs } from "@/constants/faq";

interface FAQProps {
  openModal: () => void;
}

export default function FAQ({ openModal }: FAQProps) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked{" "}
            <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}