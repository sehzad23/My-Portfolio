import { useRef, useState } from "react";
import { ArrowRight, Mail, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Section from "../common/Section";
import contactInfo from "../../data/contactInfo";

function ContactSection() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success(
            "Message sent successfully! I'll get back to you shortly.",
            {
              position: "top-right",
              autoClose: 3000,
              theme: "dark",
            }
          );

          reset();
          setIsLoading(false);
        },
        (error) => {
          console.log(error);

          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });

          setIsLoading(false);
        }
      );
  };

  const onError = () => {
    toast.error("Please fill all required fields correctly.", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  return (
    <Section
      id="contact"
      title="Let's build something great"
      subtitle="Open for freelance and full-time opportunities"
    >
      <div className="grid gap-[32px] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-[1px]">
          <div className="rounded-[27px] bg-[#0b0b0c]/70 p-8 backdrop-blur-xl">
            <p className="text-[15px] text-white/70">
              Tell me about your business, goals, and timeline. I’ll reply
              with a clear plan, scope, and estimate.
            </p>

            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit, onError)}
              className="mt-6 grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm text-white/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/35 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-orange-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/35 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-orange-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/*Contact Number */}
                 <div>
                  <label className="mb-2 block text-sm text-white/80">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    placeholder="123.."
                    {...register("phone", {
                      required: "Contact number is required",
                      // pattern: {
                      //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      //   message: "Enter a valid email address",
                      // },
                    })}
                    className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/35 ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-orange-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Project Type
                </label>
                <input
                  type="text"
                  placeholder="Business website / Booking system / Dashboard..."
                  {...register("project_type", {
                    required: "Project type is required",
                  })}
                  className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/35 ${
                    errors.project_type
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/10 focus:border-orange-500"
                  }`}
                />
                {errors.project_type && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.project_type.message}
                  </p>
                )}
              </div>

              {/* Project Details */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Briefly describe your goals, features, and timeline..."
                  {...register("Project_details", {
                    required: "Project details are required",
                    minLength: {
                      value: 10,
                      message: "Please enter at least 10 characters",
                    },
                  })}
                  className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/35 ${
                    errors.Project_details
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/10 focus:border-orange-500"
                  }`}
                />
                {errors.Project_details && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.Project_details.message}
                  </p>
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[15px] font-medium text-black transition ${
                    isLoading
                      ? "cursor-not-allowed bg-gray-500"
                      : "bg-gradient-to-r from-orange-500 to-amber-500"
                  }`}
                >
                  {isLoading ? (
                    <span className="h-5 w-5 rounded-full border-2 border-black border-t-transparent animate-spin"></span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <a
                  href="mailto:sehaans87@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[14px] text-white/85 hover:border-white/30"
                >
                  <Mail className="h-4 w-4" />
                  Email me directly
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="grid gap-4">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-orange-500/30"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <contact.icon className="h-5 w-5 text-white/80" />
                </div>

                <div>
                  <p className="text-[12px] text-white/55">
                    {contact.label}
                  </p>
                  <p className="text-[15px]">{contact.value}</p>
                </div>
              </div>

              <ArrowRight className="h-4 w-4 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-orange-300" />
            </a>
          ))}

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[13px] text-white/60">
              Typical response time
            </p>

            <p className="mt-1 text-[15px]">
              Within 24 hours on weekdays
            </p>

            <div className="mt-3 flex items-center gap-2 text-[12px] text-white/60">
              <Star className="h-3.5 w-3.5 text-orange-400" />
              Client-focused • Transparent pricing • Clean code
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;