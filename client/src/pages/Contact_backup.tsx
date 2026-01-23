import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar,
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

export default function Contact() {
  const { toast } = useToast();
  const [isYasChatOpen, setIsYasChatOpen] = useState(false);

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
    contactMutation.mutate(data);
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Talk to YAS - Now in larger left column */}
            <ScrollReveal>
              <Card className="bg-brand-light">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-raleway font-bold mb-6">Get In Touch</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
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
                                placeholder="Enter your email" 
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
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your company" 
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
                            <FormLabel>Service Interest</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-interest">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="signal-architecture">Signal Architecture</SelectItem>
                                <SelectItem value="gtm-funnels">GTM & Funnels</SelectItem>
                                <SelectItem value="fund-raising">Fund Raising</SelectItem>
                                <SelectItem value="strategy-consulting">Strategy Consulting</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
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
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-red text-white hover:bg-red-700"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {contactMutation.isPending ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2" size={16} />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Options & Yas Chatbot */}
            <div className="space-y-8">
              {/* Yas Chatbot */}
              <ScrollReveal>
                <Card className="bg-gradient-to-br from-brand-red to-red-600 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                        <Bot className="text-brand-red" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-raleway font-bold">Talk to YAS</h3>
                        <p className="text-red-100">Your Strategic Intelligence Assistant</p>
                      </div>
                    </div>
                    <p className="text-red-100 mb-6 leading-relaxed">
                      Get instant answers to your strategic questions and explore how our signal methodology can transform your business approach.
                    </p>
                    <Button 
                      className="w-full bg-white text-brand-red hover:bg-gray-100"
                      onClick={() => setIsYasChatOpen(!isYasChatOpen)}
                      data-testid="button-talk-to-yas"
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Start Conversation with Yas
                    </Button>
                    
                    {isYasChatOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-6 p-4 bg-white/10 rounded-lg"
                      >
                        <p className="text-red-100 text-sm">
                          Yas Chatbot is currently in development. Please use the contact form or other methods to reach us!
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Contact Options */}
              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">WhatsApp</h4>
                          <p className="text-brand-gray">Quick questions and consultations</p>
                        </div>
                        <a 
                          href="https://wa.me/1234567890" 
                          className="text-brand-red font-semibold hover:text-red-700"
                          data-testid="link-whatsapp"
                        >
                          Connect
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>



                <ScrollReveal delay={0.3}>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mr-4">
                          <Mail className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-brand-gray">mpo@mpo.consultinstaura.com</p>
                        </div>
                        <a 
                          href="mailto:mpo@mpo.consultinstaura.com" 
                          className="text-brand-red font-semibold hover:text-red-700"
                          data-testid="link-email"
                        >
                          Send
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
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
