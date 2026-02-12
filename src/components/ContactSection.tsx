import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  customerName: string;
  mobileNo: string;
  whatsappNo: string;
  instagramId: string;
  emailId: string;
  babyName: string;
  babyDob: string;
  shootDate: string;
  shootTime: string;
  shootType: string;
  packageName: string;
  billNumber: string;
  deliveryDate: string;
  socialMediaPermission: string;
  totalBill: string;
  advance: string;
  balance: string;
  balanceDate: string;
  takenBy: string;
  photographedBy: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    mobileNo: "",
    whatsappNo: "",
    instagramId: "",
    emailId: "",
    babyName: "",
    babyDob: "",
    shootDate: "",
    shootTime: "",
    shootType: "",
    packageName: "",
    billNumber: "",
    deliveryDate: "",
    socialMediaPermission: "",
    totalBill: "",
    advance: "",
    balance: "",
    balanceDate: "",
    takenBy: "",
    photographedBy: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "customerName":
        if (!value.trim()) return "Customer name is required / ग्राहकाचे नाव आवश्यक आहे";
        return "";
      case "mobileNo":
        if (!value.trim()) return "Mobile number is required / मोबाईल नंबर आवश्यक आहे";
        if (!/^\d{10}$/.test(value.replace(/\D/g, ""))) return "Must be 10 digits / १० अंक असणे आवश्यक आहे";
        return "";
      case "whatsappNo":
        if (value && !/^\d{10}$/.test(value.replace(/\D/g, ""))) return "Must be 10 digits / १० अंक असणे आवश्यक आहे";
        return "";
      case "emailId":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format / ईमेल फॉरमॅट चुकीचा आहे";
        return "";
      case "shootDate":
        if (!value) return "Shoot date is required / शूटची तारीख आवश्यक आहे";
        return "";
      case "shootType":
        if (!value) return "Shoot type is required / शूटचा प्रकार आवश्यक आहे";
        return "";
      default:
        return "";
    }
  };

  const isFormValid = useMemo(() => {
    const requiredFields: (keyof FormData)[] = ["customerName", "mobileNo", "shootDate", "shootType"];
    const hasRequired = requiredFields.every(field => !!formData[field]);
    const hasNoErrors = Object.values(errors).every(error => !error);
    return hasRequired && hasNoErrors;
  }, [formData, errors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched to show any missed errors
    const allTouched: TouchedFields = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!isFormValid) {
      toast({
        title: "Validation Error",
        description: "Please check the required fields / कृपया आवश्यक फील्ड तपासा",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Form Submitted!",
      description: "Thank you for providing the details. We'll be in touch soon.",
    });

    setFormData({
      customerName: "",
      mobileNo: "",
      whatsappNo: "",
      instagramId: "",
      emailId: "",
      babyName: "",
      babyDob: "",
      shootDate: "",
      shootTime: "",
      shootType: "",
      packageName: "",
      billNumber: "",
      deliveryDate: "",
      socialMediaPermission: "",
      totalBill: "",
      advance: "",
      balance: "",
      balanceDate: "",
      takenBy: "",
      photographedBy: "",
    });
    setErrors({});
    setTouched({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Numeric handling for specific fields
    let processedValue = value;
    if (["mobileNo", "whatsappNo", "totalBill", "advance", "balance", "billNumber"].includes(name)) {
      processedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    // Real-time validation if touched
    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, processedValue);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const getInputClass = (name: keyof FormData) => {
    const base = "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all";
    const errorClass = touched[name] && errors[name] ? "border-red-500 ring-red-500" : "border-input";
    return `${base} ${errorClass}`;
  };

  return (
    <section className="pt-0 pb-12 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-10 border border-border/50">
          <div className="text-center mb-10 border-b border-border pb-6">
            <h2 className="text-3xl md:text-4xl font-heading text-secondary mb-2">
              माहिती फॉर्म / Information Form
            </h2>
            <p className="text-muted-foreground italic">
              Please fill in your details below for our records
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Customer Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Customer Name <span className="text-red-500">*</span></span>
                  <span className="text-xs text-secondary/70">ग्राहकाचे नाव</span>
                </label>
                <input name="customerName" value={formData.customerName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter name" className={getInputClass("customerName")} />
                {touched.customerName && errors.customerName && <p className="text-[10px] text-red-500">{errors.customerName}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Mobile No <span className="text-red-500">*</span></span>
                  <span className="text-xs text-secondary/70">मोबाईल नं</span>
                </label>
                <input name="mobileNo" value={formData.mobileNo} onChange={handleChange} onBlur={handleBlur} placeholder="10 digits" maxLength={10} className={getInputClass("mobileNo")} />
                {touched.mobileNo && errors.mobileNo && <p className="text-[10px] text-red-500">{errors.mobileNo}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>WhatsApp Number</span>
                  <span className="text-xs text-secondary/70">Whats App नंबर</span>
                </label>
                <input name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} onBlur={handleBlur} placeholder="10 digits" maxLength={10} className={getInputClass("whatsappNo")} />
                {touched.whatsappNo && errors.whatsappNo && <p className="text-[10px] text-red-500">{errors.whatsappNo}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Instagram ID</span>
                  <span className="text-xs text-secondary/70">Instagram Id</span>
                </label>
                <input name="instagramId" value={formData.instagramId} onChange={handleChange} onBlur={handleBlur} placeholder="@username" className={getInputClass("instagramId")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Email ID</span>
                  <span className="text-xs text-secondary/70">ईमेल आयडी</span>
                </label>
                <input name="emailId" type="email" value={formData.emailId} onChange={handleChange} onBlur={handleBlur} placeholder="Enter email" className={getInputClass("emailId")} />
                {touched.emailId && errors.emailId && <p className="text-[10px] text-red-500">{errors.emailId}</p>}
              </div>
            </div>

            <div className="h-px bg-border/50" />

            {/* Section 2: Baby Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Baby Name</span>
                  <span className="text-xs text-secondary/70">बाळाचे नाव</span>
                </label>
                <input name="babyName" value={formData.babyName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter baby name" className={getInputClass("babyName")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Baby Date of Birth</span>
                  <span className="text-xs text-secondary/70">बाळाची जन्मतारीख</span>
                </label>
                <input name="babyDob" type="date" value={formData.babyDob} onChange={handleChange} onBlur={handleBlur} className={getInputClass("babyDob")} />
              </div>
            </div>

            <div className="h-px bg-border/50" />

            {/* Section 3: Shoot Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Shoot Date <span className="text-red-500">*</span></span>
                  <span className="text-xs text-secondary/70">फोटो काढण्याची तारीख</span>
                </label>
                <input name="shootDate" type="date" value={formData.shootDate} onChange={handleChange} onBlur={handleBlur} className={getInputClass("shootDate")} />
                {touched.shootDate && errors.shootDate && <p className="text-[10px] text-red-500">{errors.shootDate}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Shoot Time</span>
                  <span className="text-xs text-secondary/70">फोटो काढण्याची वेळ</span>
                </label>
                <input name="shootTime" type="time" value={formData.shootTime} onChange={handleChange} onBlur={handleBlur} className={getInputClass("shootTime")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Shoot Type <span className="text-red-500">*</span></span>
                  <span className="text-xs text-secondary/70">कोणत्या प्रकारचे शूट करायचे आहे</span>
                </label>
                <select
                  name="shootType"
                  value={formData.shootType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass("shootType")}
                >
                  <option value="">Select Type</option>
                  <option value="MATERNITY">MATERNITY</option>
                  <option value="NEWBORN">NEWBORN</option>
                  <option value="KIDS">KIDS</option>
                  <option value="CAKE SMASH">CAKE SMASH</option>
                  <option value="OUTDOOR">OUTDOOR</option>
                  <option value="TRADITIONAL">TRADITIONAL</option>
                </select>
                {touched.shootType && errors.shootType && <p className="text-[10px] text-red-500">{errors.shootType}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Package Name</span>
                  <span className="text-xs text-secondary/70">Package Name</span>
                </label>
                <input name="packageName" value={formData.packageName} onChange={handleChange} onBlur={handleBlur} placeholder="e.g. Premium" className={getInputClass("packageName")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Bill Number</span>
                  <span className="text-xs text-secondary/70">बिल नंबर</span>
                </label>
                <input name="billNumber" value={formData.billNumber} onChange={handleChange} onBlur={handleBlur} placeholder="Enter bill #" className={getInputClass("billNumber")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Delivery Date</span>
                  <span className="text-xs text-secondary/70">काम द्यावयाची तारीख</span>
                </label>
                <input name="deliveryDate" type="date" value={formData.deliveryDate} onChange={handleChange} onBlur={handleBlur} className={getInputClass("deliveryDate")} />
              </div>
            </div>

            <div className="h-px bg-border/50" />

            {/* Section 4: Permission & Billing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Social Media Permission?</span>
                  <span className="text-xs text-secondary/70">फोटो सोशल मिडिया वरती पोस्ट करण्याची परवानगी आहे का ?</span>
                </label>
                <select
                  name="socialMediaPermission"
                  value={formData.socialMediaPermission}
                  onChange={handleChange}
                  className={getInputClass("socialMediaPermission")}
                >
                  <option value="">Select Option</option>
                  <option value="YES">YES / हो</option>
                  <option value="NO">NO / नाही</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Total Bill</span>
                  <span className="text-xs text-secondary/70">Total बिल</span>
                </label>
                <input name="totalBill" value={formData.totalBill} onChange={handleChange} onBlur={handleBlur} placeholder="₹ 0" className={getInputClass("totalBill")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Advance Paid</span>
                  <span className="text-xs text-secondary/70">advance</span>
                </label>
                <input name="advance" value={formData.advance} onChange={handleChange} onBlur={handleBlur} placeholder="₹ 0" className={getInputClass("advance")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Balance Due</span>
                  <span className="text-xs text-secondary/70">येणे बाकी</span>
                </label>
                <input name="balance" value={formData.balance} onChange={handleChange} onBlur={handleBlur} placeholder="₹ 0" className={getInputClass("balance")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Balance Payment Date</span>
                  <span className="text-xs text-secondary/70">येणे बाकी जमा करावयाची तारीख</span>
                </label>
                <input name="balanceDate" type="date" value={formData.balanceDate} onChange={handleChange} onBlur={handleBlur} className={getInputClass("balanceDate")} />
              </div>
            </div>

            <div className="h-px bg-border/50" />

            {/* Section 5: Assignees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Taken By (Booking)</span>
                  <span className="text-xs text-secondary/70">काम घेणाऱ्याचे नाव</span>
                </label>
                <input name="takenBy" value={formData.takenBy} onChange={handleChange} onBlur={handleBlur} placeholder="Enter name" className={getInputClass("takenBy")} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium flex flex-col">
                  <span>Photographed By</span>
                  <span className="text-xs text-secondary/70">फोटो काढणाऱ्याचे नाव</span>
                </label>
                <input name="photographedBy" value={formData.photographedBy} onChange={handleChange} onBlur={handleBlur} placeholder="Enter name" className={getInputClass("photographedBy")} />
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm text-center text-muted-foreground mb-6">
                packeges मध्ये दिलेल्या सर्व अटी व नियम वाचले आहेत तरी ते सर्व मला मान्य आहेत. परत आमची कोणतीही तक्रार असणार नाही.
                <br />
                <span className="italic text-xs">(I have read and accepted all terms and conditions specified in the packages. We will have no further complaints.)</span>
              </p>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <p className="text-sm font-medium">नाव व सही / Name and Signature</p>
                  <div className="h-[2px] w-48 bg-border mt-1" />
                </div>
                <Button
                  type="submit"
                  variant="terracotta"
                  disabled={!isFormValid}
                  className="h-12 px-10 rounded-xl font-bold shadow-lg hover:enabled:scale-105 transition-all text-lg disabled:opacity-50"
                >
                  Submit Form / माहिती जमा करा
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
