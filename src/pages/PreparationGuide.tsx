import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PreparationGuide = () => {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <main>
                <PageHeader
                    title="Preparation Guide"
                    subtitle="Are you confused before photoshoot? What to wear > how will you look good in photos?"
                    variant="minimal"
                />

                <div className="container mx-auto px-4 max-w-4xl py-12">
                    <div className="bg-white/50 p-8 rounded-2xl shadow-sm border border-border mb-12">
                        <p className="text-center text-lg text-brown-dark italic leading-relaxed">
                            "Here are few things which are very important to share with you. This will be helpful to get beautiful photos of you / your baby which can be cherished for lifetime."
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Newborn Baby */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-6 pb-2 border-b border-secondary/20">
                                For Newborn Baby
                            </h2>
                            <ul className="space-y-4 text-muted-foreground list-decimal pl-5">
                                <li>A well fed baby (full tummy) is always good to keep baby sleep during the shoot. Always aggressive to feed baby before leaving home.</li>
                                <li>When you reach studio, we suggest to remove all the cloths except nappy and cover baby with blankets. giving that much for baby is makes we suggest to feed baby before starting the session. We suggest to bring extra blankets to cover baby during shoot if needed.</li>
                                <li>We take naked baby shots or some wrapped baby shots during shoot. We suggest please check our profile to know our style.</li>
                                <li>Baby need to feed frequently than regular schedule of baby during the shoot. So if baby is fed with bottle keep extra bottles ready.</li>
                                <li>Try to baby use soother/ pacify.</li>
                                <li>During the shoot most of the time baby need rocking, swaying, comforting and posing baby and it takes more time for actual photographing the baby.</li>
                            </ul>
                        </section>

                        {/* Cake Smash Session */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-6 pb-2 border-b border-secondary/20">
                                For Cake Smash Session
                            </h2>
                            <p className="italic mb-6 text-brown-dark/80">Every baby is different and hence every cake smash is different for every baby.</p>
                            <ul className="space-y-4 text-muted-foreground list-decimal pl-5">
                                <li>Please do not take pressure on yourself for your baby to have a perfect cake smash.</li>
                                <li>Make sure the baby is familiar with Cake / Try some at home first.</li>
                                <li>Practice them to enjoy messy hands - let them eat feed with their hands, don't make them to clean hands after every bite.</li>
                                <li>Give your baby textures to smash at home before the session to practice them to be messy is fine.</li>
                            </ul>
                        </section>

                        {/* Baby / Toddler / Children */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-6 pb-2 border-b border-secondary/20">
                                For Baby / Toddler / Children
                            </h2>
                            <ul className="space-y-4 text-muted-foreground list-decimal pl-5">
                                <li>We believe, Smile is not only one expression of baby, there are very different moods & expressions which need to be captured and will be cherished for lifetime.</li>
                                <li>A well fed baby (full tummy) is always good to keep happy during the shoot. Always suggested to feed baby before leaving home.</li>
                                <li>Bring some snacks for baby which can be given to baby short breaks between two setups. So baby will be happy during the session.</li>
                                <li>For costume of the baby / siblings - any neutral, white or any pale colors, pastel shades which have No logo and large pattern on the dress will work best. It makes the photos focus more on baby rather than distracted over the design & pattern on the dress.</li>
                                <li>Ensure that baby / siblings have clean nose & properly brushed hair as this will not be fixed in editing of photos.</li>
                            </ul>
                        </section>

                        {/* Mom to be / Mom */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-6 pb-2 border-b border-secondary/20">
                                For Mom to be / Mom
                            </h2>
                            <ul className="space-y-4 text-muted-foreground list-decimal pl-5">
                                <li>Specially New moms- Take a good sleep at night to avoid unhappy baby during shoot. In per my experience if mom is not calm & cool during the session then baby can feel those vibes which turned baby into unsettled baby. So you may take help of your mom's or husband's help at the prior night of the shoot street.</li>
                                <li>Mum's can wear long or short sleeves dresses / around / Pastel Shades (Beige, cream, grey), pale colors with minimum design or plain dress. Avoid large pattern or bright colours.</li>
                                <li>Yes, definitely, you can wear your accessories which can complement your attire, we suggest to wear those costumes & accessories in which you feel comfortable. If you are not comfortable it reflects in your photos so "WEAR WHAT YOU LOVE".</li>
                                <li>If you are willing to use costumes, confirm it 4 days prior to the session. And If you are willing to use costumes on rent, you need to pay charges.</li>
                                <li>Take a good hair-wash on the day of shoot and avoid use of oil or any cream on the hair. Just dry your hair properly.</li>
                                <li>If you opted for make-up service, then it takes 1 hour for make-up & hair so you need to come an hour prior the actual shoot time. If you come late then simultaneously it will affect the schedule of the day, definitely we keep buffering time but for that we will missed appearances of children per turn slot given to you... so there may be chances of compromising the session time.</li>
                            </ul>
                        </section>

                        {/* Dad to be / Dad */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-6 pb-2 border-b border-secondary/20">
                                For Dad to be / Dad
                            </h2>
                            <ul className="space-y-4 text-muted-foreground list-decimal pl-5">
                                <li>Take a good hair-wash on the day of shoot and avoid use of oil or any cream on the hair. Just dry your hair properly.</li>
                                <li>Dad can wear T-shirt or shirt which is comfortable in a neutral (Beige, cream, grey), pale pastel shades or matching to your dress color without large design / text or logos on shirt. / T-shirt with dark trousers.</li>
                            </ul>
                        </section>

                        {/* Additional FAQ */}
                        <section className="bg-olive-light/10 p-8 rounded-2xl border border-olive-dark/10">
                            <h2 className="text-2xl font-heading text-secondary mb-8 text-center italic">Still, there's something to discuss before the photo shoot?</h2>

                            <div className="space-y-8 max-w-2xl mx-auto">
                                <div>
                                    <h3 className="font-heading text-lg mb-2">Do you provide costumes?</h3>
                                    <p className="text-muted-foreground">For Newborn: We provide everything for the newborns. For Babies up to 1 year: We have few options available for props and costumes.</p>
                                </div>

                                <div>
                                    <h3 className="font-heading text-lg mb-2">Can we select the set up/theme?</h3>
                                    <p className="text-muted-foreground">Yes, you can. Usually we do create the set up according to the colour scheme of baby's / Mom to be's costume. Our lead photographers Kiran & Shivani have a lot knowledge of colors and creative elements which create a beautiful impact in photos.</p>
                                </div>

                                <div>
                                    <h3 className="font-heading text-lg mb-2">What if baby is not co-operating on the day of shoot?</h3>
                                    <p className="text-muted-foreground">We use some of the best equipment which is quite comfortable during Newborn, baby, toddlers, Mom to be & Family. Small baby needs its time. When you work with professionals they have their own tricks & techniques to make babies comfortable.</p>
                                </div>
                            </div>

                            <div className="text-center mt-12 bg-white/50 p-6 rounded-xl border border-border">
                                <p className="mb-4 text-brown-dark font-medium">Contact us personally on:</p>
                                <p className="text-2xl font-heading text-secondary mb-8">+91 978 812 345 6</p>

                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link to="/portfolio">
                                        <Button variant="terracotta">Check out Our Portfolio</Button>
                                    </Link>
                                    <Link to="/faq">
                                        <Button variant="outline">Check out FAQs</Button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PreparationGuide;
