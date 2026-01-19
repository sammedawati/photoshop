import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photographyType: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  photographyType?: string;
  message?: string;
}

interface TouchedFields {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  photographyType: boolean;
  message: boolean;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    photographyType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    photographyType: false,
    message: false,
  });

  // Validation functions
  const validateName = (name: string, fieldName: string): string | undefined => {
    if (!name.trim()) {
      return `${fieldName} is required`;
    }
    if (name.trim().length < 2) {
      return `${fieldName} must be at least 2 characters`;
    }
    if (!/^[a-zA-Z\s-]+$/.test(name)) {
      return `${fieldName} can only contain letters, spaces, and hyphens`;
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    // Remove any non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    if (!/^\d+$/.test(cleanPhone)) {
      return "Phone number can only contain digits";
    }
    if (cleanPhone.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }
    return undefined;
  };

  const validatePhotographyType = (type: string): string | undefined => {
    if (!type.trim()) {
      return "Photography type is required";
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (message.length > 500) {
      return "Message must not exceed 500 characters";
    }
    return undefined;
  };

  // Validate a single field
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "firstName":
        return validateName(value, "First name");
      case "lastName":
        return validateName(value, "Last name");
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "photographyType":
        return validatePhotographyType(value);
      case "message":
        return validateMessage(value);
      default:
        return undefined;
    }
  };

  // Check if form is valid
  const isFormValid = useMemo(() => {
    const requiredFields: (keyof FormData)[] = ["firstName", "lastName", "email", "phone", "photographyType"];

    // Check if all required fields have values
    const allRequiredFieldsFilled = requiredFields.every(field => formData[field].trim() !== "");

    // Check if there are no errors
    const noErrors = Object.keys(errors).length === 0;

    return allRequiredFieldsFilled && noErrors;
  }, [formData, errors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched: TouchedFields = {
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      photographyType: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Success
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      photographyType: "",
      message: "",
    });
    setErrors({});
    setTouched({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      photographyType: false,
      message: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Special handling for phone - only allow digits
    if (name === "phone") {
      const cleanedValue = value.replace(/\D/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: cleanedValue,
      }));

      // Validate on change if field has been touched
      if (touched[name as keyof TouchedFields]) {
        const error = validateField(name as keyof FormData, cleanedValue);
        setErrors(prev => {
          const newErrors = { ...prev };
          if (error) {
            newErrors[name as keyof FormErrors] = error;
          } else {
            delete newErrors[name as keyof FormErrors];
          }
          return newErrors;
        });
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Validate on change if field has been touched
      if (touched[name as keyof TouchedFields]) {
        const error = validateField(name as keyof FormData, value);
        setErrors(prev => {
          const newErrors = { ...prev };
          if (error) {
            newErrors[name as keyof FormErrors] = error;
          } else {
            delete newErrors[name as keyof FormErrors];
          }
          return newErrors;
        });
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    // Validate the field
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name as keyof FormErrors] = error;
      } else {
        delete newErrors[name as keyof FormErrors];
      }
      return newErrors;
    });
  };

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-12 border border-border/50">
          <h2 className="text-3xl md:text-4xl font-heading text-secondary text-center mb-10">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your first name e.g. Jane"
                  className={touched.firstName && errors.firstName ? "border-red-500 focus:border-red-500" : ""}
                  aria-invalid={touched.firstName && errors.firstName ? "true" : "false"}
                  aria-describedby={touched.firstName && errors.firstName ? "firstName-error" : undefined}
                />
                {touched.firstName && errors.firstName && (
                  <p id="firstName-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your Last Name e.g. Smith"
                  className={touched.lastName && errors.lastName ? "border-red-500 focus:border-red-500" : ""}
                  aria-invalid={touched.lastName && errors.lastName ? "true" : "false"}
                  aria-describedby={touched.lastName && errors.lastName ? "lastName-error" : undefined}
                />
                {touched.lastName && errors.lastName && (
                  <p id="lastName-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className={touched.email && errors.email ? "border-red-500 focus:border-red-500" : ""}
                aria-invalid={touched.email && errors.email ? "true" : "false"}
                aria-describedby={touched.email && errors.email ? "email-error" : undefined}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone <span className="text-destructive">*</span>
              </label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your 10-digit phone number"
                maxLength={10}
                className={touched.phone && errors.phone ? "border-red-500 focus:border-red-500" : ""}
                aria-invalid={touched.phone && errors.phone ? "true" : "false"}
                aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
              />
              {touched.phone && errors.phone && (
                <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="photographyType" className="block text-sm font-medium mb-1">
                Which type of Photography are you looking for? <span className="text-destructive">*</span>
              </label>
              <Input
                id="photographyType"
                name="photographyType"
                value={formData.photographyType}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Newborn, Maternity, Family"
                className={touched.photographyType && errors.photographyType ? "border-red-500 focus:border-red-500" : ""}
                aria-invalid={touched.photographyType && errors.photographyType ? "true" : "false"}
                aria-describedby={touched.photographyType && errors.photographyType ? "photographyType-error" : undefined}
              />
              {touched.photographyType && errors.photographyType && (
                <p id="photographyType-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.photographyType}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message <span className="text-muted-foreground text-xs">(Optional)</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us more about what you're looking for..."
                rows={4}
                maxLength={500}
                className={touched.message && errors.message ? "border-red-500 focus:border-red-500" : ""}
                aria-invalid={touched.message && errors.message ? "true" : "false"}
                aria-describedby={touched.message && errors.message ? "message-error" : undefined}
              />
              <div className="flex justify-between mt-1">
                <div>
                  {touched.message && errors.message && (
                    <p id="message-error" className="text-red-500 text-xs" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
                <p className="text-muted-foreground text-xs">
                  {formData.message.length}/500
                </p>
              </div>
            </div>

            <Button
              type="submit"
              variant="terracotta"
              className="w-full md:w-auto h-14 md:h-12 text-lg md:text-base px-8 rounded-xl font-bold shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={!isFormValid}
              aria-label={isFormValid ? "Send message" : "Please fix errors before sending"}
            >
              Send Message
            </Button>
            {!isFormValid && Object.keys(touched).some(key => touched[key as keyof TouchedFields]) && (
              <p className="text-xs text-muted-foreground mt-2">
                Please fill in all required fields correctly to send your message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
