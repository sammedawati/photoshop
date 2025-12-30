import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import portfolioFamily from "@/assets/portfolio-family.jpg";

const faqItems = [
  {
    question: "1. What is Ideal time for Photoshoot?",
    answer: "For Maternity Photoshoot: best time for maternity photo shoot is around 28-32 weeks/7-8 months of pregnancy. The bump is not too big & Mum is still fit for Photo shoot. For Home Sessions: 6 Months+ for Baby Photography.\n\nNewborn Photoshoot: ideal time for Newborn Shoot is a 5 days to 14 days old of Baby – during that period they baby tends to sleep very well making pose very simple without using props. No age limit for a newborn shoot.\n\nBaby / Infant Photoshoot: 2 to 4 Months – Starting to hold head up, tummy time given, half smile, close-up shots & natural shots.\n\nSitter Photoshoot: 6 to 8 - 9 months old – having fun with props babies can sit and stand for a while.\n\nPre Birthday Photoshoot: 11 Months – for Pre Birthday Photo shoot.\n\nToddler / Children Photoshoot: Any age"
  },
  {
    question: "2. What makes you different from others?",
    answer: "Experience & Expertise: Behind in Photography from > With the Fine Art background on paper. we Create New and Unique Styles. Such as lot of moments and feel good. we are best for newborn shoot is in town.\n\nAmazing Photography Portfolio: We have wide range of photography portfolio for showcasing. Our Clients can always see samples first. We maintain high quality images to showcase our best work.\n\nArtistic & Professional: There are so many creative props, stunning backgrounds to grab as a baby is the center of love in family we also a lot of prop period. The ambience props are carefully created to bring out the baby in best way. The whole look is extremely designed by us."
  },
  {
    question: "3. Do you provide all techniques?",
    answer: "Yes, we provide all the techniques related to maternity, newborn, baby, sitter, and pre birthday photography. We believe in Quality not the Quantity. Quality over quantity - You might get 100+ photos, but does your file provide 50+ Gallery of RAW Photos – we provide edited (basic editing) photos on web uploaded with us within 20 days for baby."
  },
  {
    question: "4. Do you provide at-home sessions? In Pune only or do you travel out of Pune too?",
    answer: "Yes we do. At-home sessions are accommodated to baby's feed schedule."
  },
  {
    question: "5. Why do you charge a big amount only for travel charges for home / destination shoot?",
    answer: "For at-home / destination shoot, it is totally different. Travel takes around 2 hr. Charges consist out of travel + setup & breakdown takes minimum 40 minutes. If weather is too good then we need to carry back + time at destination shoots and time spent to come back – that's why the price is a bit higher."
  },
  {
    question: "6. How will be the process of Home/Destination Session?",
    answer: "If the shoot to proceed, for at-home / destination, we need to discuss the venue and lighting at the location. Along with that, we'll share our equipment needs, 4 hour duration/session. No refunds. All Photos will be delivered within 2-3 weeks after session. Props and theme needs to be informed 2 days before at the shoot date."
  },
  {
    question: "7. Do you provide costumes?",
    answer: "Yes, we do.\n\nFor Maternity: We have more than 25 kinds/sizes of Maternity robes and gowns for selection to our clients. Some clients want to purchase them for after use.\n\nFor Newborn: We provide more than 150+ wraps for baby to dress with 100+ different wraps or outfits which are available at our studio for newborn.\n\nFor Baby/sitter/pre: We have more than 150+ costumes available to choose from, newborn, 3 months, 6 months, sitter.\n\nToddler/Children: Depend on the shoot requirements."
  },
  {
    question: "8. What do you mean by a setup/theme?",
    answer: "Setup / Theme means a particular backdrop/background/a different look/a new set/different costume for a photo to have a different look. A single setup photo includes 3-4 looks of similar/different costume/similar/different theme & styles."
  },
  {
    question: "9. Do we need to arrange props setup/theme of particular session?",
    answer: "No. All props & setup/theme is arranged, backdrops, blankets are provided by us at extra charge along with the setup.\n\nWe also provide different Props, Gowns & Colors for the Maternity session which is available for you to bring."
  },
  {
    question: "10. Can we select the set up/theme?",
    answer: "Yes, you can!"
  },
  {
    question: "11. How long will be the Photo shoot & baby is faded in it, that time frame?",
    answer: "Photo shoot can take 1 to hours - 3 Hours depending on our session package.\n\nIf your little one becomes hungry/crying/cranky/ or going to sleep pretty early, sleeping time breaks are compulsory if needed. we then start re-visit the new day if required."
  },
  {
    question: "12. What if baby is not co-operating on the day of shoot?",
    answer: "We have been in this profession for quite a while now so we know handling baby's, it may takes time to settle babies, Sit in an Soothe Soothe So initially baby may seems little fussiness.\n\nBabies and Toddlers are unpredictable, But there are rules like no sudden movements/voices + wobbly noise at studio and provide ample time feeding, sleeping, rest, etc.\n\nBaby is absolutely not comfortable then we may reschedule for a different day."
  },
  {
    question: "13. How Can I book a Photo shoot?",
    answer: "You just go with your message about shoot, you including booking process by and we provide all information/we will contact you in 4 hrs (max on holidays also). Photo shoot dates are open for all first come first serve."
  },
  {
    question: "14. How many days before shall I book a Photo shoot?",
    answer: "It is recommended to book 20 to 30 days before to avail early discount offers. Only limited sessions are available. For Confirmation - we will be in touch on slot booking and confirm booking & payment."
  },
  {
    question: "15. I don't know when will be the baby born? How can I book the Newborn shoot?",
    answer: "While it is not always easy to do that, keep in sync. and welcome baby along home. It's okay if we don't know the due date when we confirm the slot. We'll share 7 days confirmation or 3 weeks or it might be 1 week."
  }
];

const FAQ = () => {

  return (
    <div className="min-h-screen bg-card">
      <Navbar />
      <main>
        <PageHeader
          title="FAQ - Frequently Asked Questions"
          subtitle="Frequently Asked Questions"
          variant="minimal"
        />
        <div className="container mx-auto px-4 max-w-4xl py-16">
          {/* Action Buttons */}
          <div className="flex gap-4 mb-8 justify-center">
            <Link to="/preparation-guide">
              <Button variant="terracotta" size="sm">
                Preparation Guide
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="sm">
                Our Portfolio
              </Button>
            </Link>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-heading text-secondary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="secondary" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Follow us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
