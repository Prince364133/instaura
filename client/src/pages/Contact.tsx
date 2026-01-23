import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
  Bot
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

import { saveFormSubmission } from "@/lib/firebase";
import { useChatbot } from "@/context/ChatbotContext";

export default function Contact() {
  const { toast } = useToast();
  // const [isYasChatOpen, setIsYasChatOpen] = useState(false); // Removed local state
  const { openChatbot } = useChatbot();
  const [selectedEmail, setSelectedEmail] = useState("general");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      serviceInterest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Save to Firestore first
      await saveFormSubmission("contact_forms", data);
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // First store the contact in the database
    contactMutation.mutate(data);

    // Then compose and open email with all the details
    const emailSubject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`;
    const emailBody = `
Contact Form Submission Details:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Service Interest: ${data.serviceInterest || 'Not specified'}

Message:
${data.message}

---
This email was generated from the INSTAURA contact form.
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link with all the information
    const mailtoLink = `mailto:team@sales.consultinstaura.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client
    window.open(mailtoLink, '_blank');
  };

  const emailOptions = [
    { value: "general", label: "General Information", email: "info@info.consultinstaura.com" },
    { value: "sales", label: "Sales & Inquiries", email: "team@sales.consultinstaura.com" },
    { value: "media", label: "Media & Press", email: "info@media.consultinstaura.com" },
    { value: "support", label: "Support Escalation", email: "support@ops.consultinstaura.com" },
    { value: "mpo", label: "Managing Partner's Office", email: "mpo@mpo.consultinstaura.com" },
    { value: "partner", label: "Partner's Office", email: "icpo@icpo.consultinstaura.com" }
  ];

  const getCurrentEmail = () => {
    return emailOptions.find(option => option.value === selectedEmail)?.email || emailOptions[0].email;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-raleway font-bold mb-6">
                Start Your <span className="text-brand-red">Signal Journey</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform market insights into strategic advantage? Let's discuss how our signal intelligence can accelerate your growth.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form and Options */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Talk to YAS - Now in left column with same height as form */}
            <ScrollReveal>
              <Card className="bg-white border-2 border-gray-100 shadow-xl h-full">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center mr-4">
                      <Bot className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-raleway font-bold text-gray-900">Talk to YAS</h3>
                      <p className="text-gray-600">Your Strategic Intelligence Assistant</p>
                    </div>
                  </div>
                  <div className="text-gray-700 mb-6 leading-relaxed space-y-3">
                    <p>
                      Get instant answers to your strategic questions and explore how our signal methodology can transform your business approach.
                    </p>
                    <p>
                      YAS combines advanced AI with real-time market intelligence to deliver actionable insights for strategic decision-making. Whether you need market analysis, competitive intelligence, or growth strategy guidance, our assistant provides data-driven recommendations tailored to your business needs.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">
                        💡 Perfect for: Market research, competitive analysis, strategic planning, and business intelligence
                      </p>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-brand-red to-red-600 text-white hover:from-red-600 hover:to-red-700 mb-6"
                    onClick={openChatbot}
                    data-testid="button-talk-to-yas"
                  >
                    <MessageCircle className="mr-2" size={16} />
                    Start Conversation with YAS
                  </Button>

                  {/* Removed local chat UI */}

                  {/* Contact Options integrated within the same card */}
                  <div className="space-y-4 flex-1">
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-xl font-raleway font-bold mb-4 text-gray-900">Quick Contact Options</h4>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <Phone className="text-white" size={16} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">WhatsApp Channel</h5>
                          <p className="text-gray-600 text-sm">Quick questions and consultations</p>
                        </div>
                        <a
                          href="https://signalwa.consultinstaura.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-red font-semibold hover:text-red-600 bg-brand-red/10 hover:bg-brand-red/20 px-3 py-1 rounded transition-colors duration-300"
                          data-testid="link-whatsapp"
                        >
                          Connect
                        </a>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center mr-3">
                            <Mail className="text-white" size={16} />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900">Email</h5>
                            <p className="text-gray-600 text-sm">Select department and send email</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <Select value={selectedEmail} onValueChange={setSelectedEmail}>
                              <SelectTrigger className="w-full bg-white border-gray-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20">
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                              <SelectContent>
                                {emailOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <a
                            href={`mailto:${getCurrentEmail()}`}
                            className="text-brand-red font-semibold hover:text-red-600 bg-brand-red/10 hover:bg-brand-red/20 px-3 py-1 rounded transition-colors duration-300"
                            data-testid="link-email"
                          >
                            Send
                          </a>
                        </div>

                        <div className="text-xs text-gray-500">
                          Email: {getCurrentEmail()}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Form - Now in right column */}
            <ScrollReveal>
              <Card className="bg-white border-2 border-gray-100 shadow-xl h-full">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-raleway font-bold mb-6 text-gray-900">Get In Touch</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex flex-col h-full">
                      <div className="space-y-6 flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your first name"
                                    data-testid="input-first-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your last name"
                                    data-testid="input-last-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Enter your email address"
                                  data-testid="input-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your company name"
                                  data-testid="input-company"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="serviceInterest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Interest (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service-interest">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="signal-architecture">Signal Architecture</SelectItem>
                                  <SelectItem value="strategy-consulting">Strategy Consulting</SelectItem>
                                  <SelectItem value="gtm-funnels">GTM & Funnels</SelectItem>
                                  <SelectItem value="fund-raising">Fund Raising</SelectItem>
                                  <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  rows={4}
                                  placeholder="Tell us about your strategic challenges..."
                                  data-testid="textarea-message"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="mt-auto pt-6">
                        <Button
                          type="submit"
                          className="w-full bg-brand-red text-white hover:bg-red-700 py-4 text-lg font-semibold"
                          disabled={contactMutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {contactMutation.isPending ? (
                            "Processing & Opening Email..."
                          ) : (
                            <>
                              <Send className="mr-2" size={16} />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl font-raleway font-bold text-brand-red mb-8">
                Our Global Presence
              </h2>
              <p className="text-xl text-brand-black">
                India • Southeast Asia • Middle East • USA
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}