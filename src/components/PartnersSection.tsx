const PartnersSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Our Partners</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Partner 1 */}
          <div className="text-center">
            <div className="w-48 h-32 bg-muted rounded-lg flex items-center justify-center mb-4 border border-border">
              <div className="text-center">
                <span className="text-3xl font-bold text-secondary">papa</span>
                <p className="text-xs text-muted-foreground mt-1">PHOTOGRAPHY</p>
                <p className="text-xs text-muted-foreground">ACADEMY OF</p>
                <p className="text-xs text-muted-foreground">PHOTOGRAPHY</p>
                <p className="text-xs text-muted-foreground">ART</p>
              </div>
            </div>
            <h3 className="font-heading text-lg">PHOTOGRAPHY EDUCATION</h3>
            <p className="text-sm text-secondary">Panoramic Academy of Photography Art</p>
          </div>

          {/* Partner 2 */}
          <div className="text-center">
            <div className="w-48 h-32 bg-muted rounded-lg flex items-center justify-center mb-4 border border-border">
              <div className="text-center">
                <span className="text-3xl font-bold text-secondary">vivah</span>
                <p className="text-xs text-muted-foreground">|| PHOTOS ||</p>
                <p className="text-xs text-secondary">www.vivahphotos.com</p>
              </div>
            </div>
            <h3 className="font-heading text-lg">EVENT PHOTOGRAPHY</h3>
            <p className="text-sm text-secondary">VIVAH PHOTOS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
