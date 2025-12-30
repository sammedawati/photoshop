export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: BlogCategory;
    date: string;
    author: string;
    image: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export type BlogCategory =
    | "maternity"
    | "newborn"
    | "baby"
    | "kids"
    | "family"
    | "events"
    | "tips";

export interface CategoryInfo {
    name: BlogCategory;
    title: string;
    description: string;
}

export const blogCategories: CategoryInfo[] = [
    {
        name: "maternity",
        title: "Maternity",
        description: "Celebrating the beautiful journey of motherhood through stunning maternity photography"
    },
    {
        name: "newborn",
        title: "Newborn",
        description: "Capturing the precious first moments of your newborn's life"
    },
    {
        name: "baby",
        title: "Baby",
        description: "Documenting your baby's milestones and adorable moments"
    },
    {
        name: "kids",
        title: "Kids",
        description: "Fun and creative photography sessions for children of all ages"
    },
    {
        name: "family",
        title: "Family",
        description: "Creating timeless memories with your loved ones"
    },
    {
        name: "events",
        title: "Events",
        description: "Capturing special celebrations and milestone events"
    },
    {
        name: "tips",
        title: "Photography Tips",
        description: "Expert advice and tips for parents and photography enthusiasts"
    }
];

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "grace-culture-glow-motherhood",
        title: "Grace, Culture & The Glow of Motherhood",
        category: "maternity",
        date: "Dec 01, 2025",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-maternity.jpg",
        excerpt: "A beautiful celebration of motherhood through traditional Indian maternity photography, capturing the radiant glow and cultural richness of this special journey.",
        content: `
      <p>Maternity photography is more than just taking pictures; it's about celebrating one of life's most beautiful journeys. In this session, we explored the perfect blend of traditional Indian culture and modern photography techniques to create timeless memories.</p>
      
      <h3>The Beauty of Traditional Attire</h3>
      <p>Our mother-to-be chose stunning traditional sarees that beautifully highlighted her baby bump while honoring her cultural heritage. The rich colors and intricate designs added an extra layer of elegance to every frame.</p>
      
      <h3>Capturing the Glow</h3>
      <p>The natural glow of pregnancy is something truly magical. We used soft, natural lighting to enhance this radiance, creating images that feel warm and intimate. Every smile, every gentle touch of the belly tells a story of love and anticipation.</p>
      
      <h3>Cultural Significance</h3>
      <p>Incorporating traditional elements like flowers, jewelry, and meaningful props helped create a connection between generations. These photos will be cherished not just by the parents, but by the child as they grow up understanding their cultural roots.</p>
      
      <h3>Tips for Your Maternity Session</h3>
      <ul>
        <li>Schedule your session between 28-34 weeks for the perfect bump</li>
        <li>Choose outfits that make you feel beautiful and comfortable</li>
        <li>Don't be afraid to incorporate cultural elements</li>
        <li>Bring your partner or family members for some special moments</li>
        <li>Relax and enjoy the experience – your happiness will shine through</li>
      </ul>
    `,
        tags: ["maternity", "traditional", "cultural", "pregnancy"]
    },
    {
        id: "2",
        slug: "wrapped-love-colour-tiny-moments",
        title: "Wrapped in Love, Colour & Tiny Moments - A Dreamy Newborn Photoshoot",
        category: "newborn",
        date: "Dec 01, 2025",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-newborn.jpg",
        excerpt: "A magical newborn photography session filled with soft colors, cozy wraps, and the tiniest details that make these first days so precious.",
        content: `
      <p>There's something incredibly special about newborn photography. Those first few weeks pass by in a blur, but through photography, we can freeze these precious moments forever.</p>
      
      <h3>The Art of Newborn Posing</h3>
      <p>Safety is always our top priority. Every pose is carefully executed with the baby's comfort and safety in mind. We use gentle techniques and never force a baby into an uncomfortable position.</p>
      
      <h3>Color Palette and Props</h3>
      <p>For this session, we chose a soft, dreamy color palette with pastel pinks, creams, and gentle blues. Soft wraps, delicate headbands, and cozy baskets created the perfect setting for this tiny angel.</p>
      
      <h3>Capturing Tiny Details</h3>
      <p>Those tiny fingers, perfect little toes, and peaceful sleeping faces – these are the details that parents treasure. We make sure to capture close-ups that showcase just how small and perfect your newborn is.</p>
      
      <h3>Best Time for Newborn Photos</h3>
      <p>The ideal window for newborn photography is within the first 5-14 days after birth. During this time, babies are still very sleepy and curly, making it easier to capture those adorable poses.</p>
    `,
        tags: ["newborn", "baby", "photography tips", "posing"]
    },
    {
        id: "3",
        slug: "baby-riya-newborn-session",
        title: "Baby Riya's Newborn Photo Session: A Bundle of Joy",
        category: "newborn",
        date: "Oct 09, 2023",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-baby.jpg",
        excerpt: "Meet baby Riya! A heartwarming newborn session capturing the pure joy and love of a new family.",
        content: `
      <p>Every newborn session is unique, and baby Riya's session was filled with so much love and warmth. From the moment her parents walked in, you could feel the joy radiating from this new family.</p>
      
      <h3>A Personalized Session</h3>
      <p>We worked closely with Riya's parents to understand their vision. They wanted a mix of traditional and modern shots, incorporating family heirlooms and meaningful props that would make these photos even more special.</p>
      
      <h3>Family Moments</h3>
      <p>Some of the most touching moments came from capturing the interaction between baby Riya and her parents. The gentle way her mother held her, the proud look in her father's eyes – these are the moments that tell the real story.</p>
      
      <h3>Creating a Comfortable Environment</h3>
      <p>We keep our studio warm and cozy, perfect for keeping newborns comfortable and sleepy. Soft music, gentle handling, and patience are key to a successful newborn session.</p>
    `,
        tags: ["newborn", "family", "baby photography"]
    },
    {
        id: "4",
        slug: "kavya-pre-birthday-wonderland",
        title: "Kavya's Pre-Birthday Bliss: A Fun Wonderland!",
        category: "kids",
        date: "Oct 09, 2023",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-birthday.jpg",
        excerpt: "A whimsical and colorful pre-birthday photoshoot celebrating Kavya's upcoming milestone with joy, laughter, and lots of fun!",
        content: `
      <p>Pre-birthday photoshoots are a wonderful way to celebrate your child's upcoming milestone. For Kavya's session, we created a magical wonderland filled with balloons, colors, and endless fun!</p>
      
      <h3>Theme and Decoration</h3>
      <p>Kavya's parents wanted a bright, cheerful theme that reflected their daughter's bubbly personality. We designed a setup with rainbow colors, playful props, and a beautiful cake smash setup.</p>
      
      <h3>Capturing Genuine Joy</h3>
      <p>The best photos come from genuine moments of happiness. We encouraged Kavya to play, explore, and just be herself. The result? Authentic smiles and pure joy captured in every frame.</p>
      
      <h3>The Cake Smash Experience</h3>
      <p>The highlight of the session was definitely the cake smash! Watching Kavya dive into her beautiful birthday cake was priceless. These messy, fun moments create the most memorable photos.</p>
      
      <h3>Tips for a Successful Kids Photoshoot</h3>
      <ul>
        <li>Schedule the session when your child is well-rested and fed</li>
        <li>Bring their favorite toys or snacks</li>
        <li>Let them warm up to the environment</li>
        <li>Don't stress about perfection – candid moments are the best!</li>
      </ul>
    `,
        tags: ["kids", "birthday", "cake smash", "celebration"]
    },
    {
        id: "5",
        slug: "batman-dark-knight-first-birthday",
        title: "BATMAN: Dark Knight's 1st Birthday in Style!",
        category: "events",
        date: "Oct 09, 2023",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-birthday.jpg",
        excerpt: "An epic Batman-themed first birthday celebration captured in all its superhero glory!",
        content: `
      <p>When parents want to go all out for their child's first birthday, magic happens! This Batman-themed celebration was nothing short of spectacular, and we were thrilled to capture every heroic moment.</p>
      
      <h3>The Dark Knight Theme</h3>
      <p>From Gotham City backdrops to bat signals and superhero props, every detail was carefully planned. Our little birthday boy even had a custom Batman outfit that made him look absolutely adorable!</p>
      
      <h3>Event Photography Tips</h3>
      <p>Birthday party photography requires quick thinking and the ability to capture candid moments. We focus on:</p>
      <ul>
        <li>The birthday child's reactions and expressions</li>
        <li>Family and friends celebrating together</li>
        <li>Decorations and themed elements</li>
        <li>The cake cutting ceremony</li>
        <li>Candid moments of joy and laughter</li>
      </ul>
      
      <h3>Making Memories Last</h3>
      <p>First birthdays are milestone events that families cherish forever. Through professional photography, these memories are preserved in stunning detail, allowing families to relive these special moments for years to come.</p>
    `,
        tags: ["events", "birthday", "themed party", "first birthday"]
    },
    {
        id: "6",
        slug: "how-to-choose-newborn-photographer",
        title: "How to Choose the Perfect Newborn Baby Photographer",
        category: "tips",
        date: "Aug 03, 2023",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-family.jpg",
        excerpt: "Expert guidance on selecting the right newborn photographer to capture your baby's precious first moments safely and beautifully.",
        content: `
      <p>Choosing a newborn photographer is an important decision. You're trusting someone to handle your precious baby and create memories that will last a lifetime. Here's what you need to know.</p>
      
      <h3>Safety First</h3>
      <p>The most important factor is safety. Look for photographers who:</p>
      <ul>
        <li>Have proper training in newborn handling and posing</li>
        <li>Never force babies into uncomfortable positions</li>
        <li>Maintain a clean, sanitized studio</li>
        <li>Keep the studio at a comfortable temperature for newborns</li>
        <li>Have experience working with newborns</li>
      </ul>
      
      <h3>Review Their Portfolio</h3>
      <p>Look through their previous work. Do you connect with their style? Is it natural and timeless, or more posed and artistic? Make sure their aesthetic aligns with what you envision for your baby's photos.</p>
      
      <h3>Ask About Their Process</h3>
      <p>A professional newborn photographer should be able to explain:</p>
      <ul>
        <li>The ideal timing for the session (usually 5-14 days after birth)</li>
        <li>How long the session typically takes</li>
        <li>What props and outfits they provide</li>
        <li>How they handle fussy babies</li>
        <li>Their editing and delivery timeline</li>
      </ul>
      
      <h3>Communication and Comfort</h3>
      <p>You should feel comfortable with your photographer. They should be patient, understanding, and willing to accommodate your needs and preferences.</p>
      
      <h3>Investment Value</h3>
      <p>While price is a consideration, remember that you're investing in professional memories of a fleeting time. Quality newborn photography requires skill, experience, and specialized equipment.</p>
      
      <h3>Questions to Ask</h3>
      <ul>
        <li>How long have you been photographing newborns?</li>
        <li>Do you have backup equipment?</li>
        <li>What happens if my baby is fussy during the session?</li>
        <li>Can I see full galleries from recent sessions?</li>
        <li>What is included in your packages?</li>
        <li>Do you offer prints and albums?</li>
      </ul>
      
      <p>Taking the time to choose the right photographer ensures you'll have beautiful, safe, and meaningful photos of your newborn that you'll treasure forever.</p>
    `,
        tags: ["tips", "newborn", "photography advice", "parents guide"]
    },
    {
        id: "7",
        slug: "family-photography-tips",
        title: "Creating Timeless Family Portraits: A Complete Guide",
        category: "family",
        date: "Nov 15, 2025",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-family.jpg",
        excerpt: "Learn how to prepare for and make the most of your family photography session with these expert tips and insights.",
        content: `
      <p>Family photography is about capturing the love, connection, and unique dynamics of your family. Here's how to ensure your family session results in photos you'll cherish for generations.</p>
      
      <h3>Coordinating Outfits</h3>
      <p>You don't need to match exactly, but coordinating colors creates a cohesive look. Choose a color palette of 2-3 complementary colors and let each family member wear variations of those colors.</p>
      
      <h3>Location Matters</h3>
      <p>Whether you choose a studio, outdoor location, or your home, the setting should reflect your family's personality. Outdoor sessions offer natural light and beautiful backdrops, while studio sessions provide controlled conditions.</p>
      
      <h3>Timing is Everything</h3>
      <p>For outdoor sessions, the golden hour (an hour before sunset) provides the most flattering light. For families with young children, schedule the session when kids are typically well-rested and happy.</p>
      
      <h3>Natural Interactions</h3>
      <p>The best family photos capture genuine moments. We encourage families to interact naturally – play games, share jokes, cuddle together. These authentic moments create the most meaningful images.</p>
    `,
        tags: ["family", "photography tips", "portraits"]
    },
    {
        id: "8",
        slug: "maternity-photography-preparation",
        title: "Preparing for Your Maternity Photoshoot: What to Expect",
        category: "maternity",
        date: "Nov 10, 2025",
        author: "Priyadarshani Bhor",
        image: "/src/assets/portfolio-maternity.jpg",
        excerpt: "Everything you need to know to prepare for a beautiful and comfortable maternity photography session.",
        content: `
      <p>Maternity photography celebrates the beautiful journey of pregnancy. Here's how to prepare for a session that captures this special time perfectly.</p>
      
      <h3>When to Schedule</h3>
      <p>The ideal time for maternity photos is between 28-34 weeks of pregnancy. Your bump will be beautifully round, but you'll still be comfortable enough to enjoy the session.</p>
      
      <h3>What to Wear</h3>
      <p>Choose outfits that highlight your bump while making you feel beautiful. Flowing gowns, fitted dresses, or even your partner's shirt can create stunning images. We provide a selection of maternity gowns for our clients to choose from.</p>
      
      <h3>Include Your Partner</h3>
      <p>Maternity sessions are wonderful opportunities to capture the anticipation and love between expectant parents. Partner shots add an emotional depth to your gallery.</p>
      
      <h3>Comfort is Key</h3>
      <p>We keep sessions relaxed and comfortable. Take breaks when needed, and don't hesitate to communicate if you need anything. Your comfort ensures the best results.</p>
    `,
        tags: ["maternity", "pregnancy", "photography tips", "preparation"]
    }
];

// Helper functions
export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
    return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (currentPostId: string, category: BlogCategory, limit: number = 3): BlogPost[] => {
    return blogPosts
        .filter(post => post.category === category && post.id !== currentPostId)
        .slice(0, limit);
};

export const getCategoryInfo = (category: BlogCategory): CategoryInfo | undefined => {
    return blogCategories.find(cat => cat.name === category);
};
