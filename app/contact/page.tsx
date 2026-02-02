"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send, Twitter, Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { sendEmail } from "@/app/actions";

const campaignTypes = [
  { value: "", label: "Select campaign type" },
  { value: "artist-release", label: "Artist Release" },
  { value: "label-campaign", label: "Label Campaign" },
  { value: "ongoing-partnership", label: "Ongoing Partnership" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "", label: "Select budget range" },
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "discuss", label: "Let's Discuss" },
];

const inputStyles = "w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-foreground placeholder:text-foreground-muted/50 transition-all duration-200 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    campaignType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setFormState("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          campaignType: "",
          budget: "",
          message: "",
        });
      } else {
        setFormState("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormState("error");
      const msg = error instanceof Error ? error.message : "An unexpected error occurred.";
      setErrorMessage(msg);
      console.error("Client side form error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Start a Project
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll get back to you with a strategy tailored to your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-white/10 rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    Message Sent
                  </h2>
                  <p className="text-foreground-muted mb-8">
                    We&apos;ll get back to you soon.
                  </p>
                  <Button variant="outline" onClick={() => setFormState("idle")}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState === "error" && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 text-red-400">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputStyles}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputStyles}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company / Artist Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputStyles}
                      placeholder="Your company or artist name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="campaignType" className="block text-sm font-medium text-foreground mb-2">
                        Campaign Type
                      </label>
                      <select
                        id="campaignType"
                        name="campaignType"
                        value={formData.campaignType}
                        onChange={handleChange}
                        className={`${inputStyles} appearance-none cursor-pointer`}
                      >
                        {campaignTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`${inputStyles} appearance-none cursor-pointer`}
                      >
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputStyles} resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-bold tracking-wide"
                    disabled={formState === "loading"}
                  >
                    {formState === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-white/5 rounded-2xl p-8 sticky top-32">
                <h2 className="text-xl font-serif font-bold mb-6">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-6">
                  <a
                    href="mailto:contact@kayswan.xyz"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-6 h-6 text-foreground-muted group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        Email
                      </p>
                      <p className="text-foreground-muted">contact@kayswan.xyz</p>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/Kayswan__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <Twitter className="w-6 h-6 text-foreground-muted group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        Twitter/X
                      </p>
                      <p className="text-foreground-muted">@Kayswan__</p>
                    </div>
                  </a>
                </div>

                {/* Divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-8" />

                <div>
                  <h3 className="font-medium text-foreground mb-3">
                    Response Time
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    We typically respond to inquiries within 24-48 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
