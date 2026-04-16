"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Shield, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "About", id: "about" },
        { name: "Shop", id: "products" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Lumina Skin"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "sparkles-gradient" }}
      title="Radiance Refined"
      description="Unlock your skin's natural glow with our science-backed, nature-derived formulas designed for ultimate rejuvenation."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/caucasian-woman-going-through-microblading-treatment_23-2149102672.jpg", imageAlt: "skincare cream application luxury" },
        { imageSrc: "http://img.b2bpic.net/free-photo/extremely-close-up-anti-bacterial-clean-gel_23-2148758762.jpg", imageAlt: "organic botanical serum extraction" },
        { imageSrc: "http://img.b2bpic.net/free-photo/rhinoplasty-surgery-concept-with-woman-model_23-2150036922.jpg", imageAlt: "glowing skin model reflection" },
        { imageSrc: "http://img.b2bpic.net/free-photo/top-view-cream-leaf-with-white-background_23-2148241826.jpg", imageAlt: "jar of organic face cream" },
        { imageSrc: "http://img.b2bpic.net/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263171.jpg", imageAlt: "elegant skin care routine ritual" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/liquid-facial-skin-care-product-white-background-isolated_169016-26901.jpg", imageAlt: "serum dropper cosmetic macro" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-face-pores-texture_23-2149444122.jpg", imageAlt: "skin texture close up pores" },
        { imageSrc: "http://img.b2bpic.net/free-photo/isolated-deodorant-stick-with-copy-space_1194-639175.jpg", imageAlt: "modern skincare packaging design" },
        { imageSrc: "http://img.b2bpic.net/free-photo/young-woman-relaxing-spa-salon_176420-7527.jpg", imageAlt: "calm facial mask treatment" },
        { imageSrc: "http://img.b2bpic.net/free-photo/macro-shot-water-drops-green-leaf_181624-37061.jpg", imageAlt: "pure organic essence extraction" },
      ]}
      buttons={[{ text: "Shop Now", href: "#products" }]}
      avatarText="Loved by over 10,000 satisfied glow-getters"
      marqueeItems={[
        { type: "text", text: "Cruelty-Free" },
        { type: "text", text: "Dermatologist Tested" },
        { type: "text", text: "Organic Ingredients" },
        { type: "text", text: "Sustainable Packaging" },
        { type: "text", text: "Fragrance-Free" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Purity In Every Drop"
      metrics={[
        { icon: Sparkles, label: "Organic Ingredients", value: "100%" },
        { icon: Award, label: "Dermatologist Tested", value: "24+" },
        { icon: Shield, label: "Cruelty Free", value: "Certified" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        { title: "Deep Hydration", description: "Locks moisture for 24 hours.", imageSrc: "http://img.b2bpic.net/free-photo/cream-applied-skin_23-2151991747.jpg", buttonIcon: Zap },
        { title: "Cell Regeneration", description: "Promotes natural renewal cycle.", imageSrc: "http://img.b2bpic.net/free-photo/abstract-mosaic-with-bubbles_23-2148227158.jpg", buttonIcon: Zap },
        { title: "Brightening Complex", description: "Evens out skin tone naturally.", imageSrc: "http://img.b2bpic.net/free-photo/skin-care-banner-concept-with-lotion_23-2149449097.jpg", buttonIcon: Zap },
        { title: "Antioxidant Rich", description: "Defends against environmental stress.", imageSrc: "http://img.b2bpic.net/free-photo/boy-swimming-pool-with-orange_23-2149025446.jpg", buttonIcon: Zap },
      ]}
      title="Why Your Skin Loves Us"
      description="Experience the difference of clean beauty that delivers visible results without compromise."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Hydrating Serum", price: "$45.00", imageSrc: "http://img.b2bpic.net/free-photo/serum-bottle-natural-medicine-concept_23-2148899370.jpg" },
        { id: "p2", name: "Daily Moisturizer", price: "$38.00", imageSrc: "http://img.b2bpic.net/free-photo/beauty-cream-with-natural-elements_23-2148173889.jpg" },
        { id: "p3", name: "Gentle Cleanser", price: "$29.00", imageSrc: "http://img.b2bpic.net/free-photo/beauty-self-care-products-arrangement_23-2148976973.jpg" },
        { id: "p4", name: "Night Recovery Oil", price: "$52.00", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-using-cbd-oil-hand_23-2150830176.jpg" },
        { id: "p5", name: "Eye Revive Cream", price: "$42.00", imageSrc: "http://img.b2bpic.net/free-photo/skin-care-product-arrangement-sand_23-2148761480.jpg" },
        { id: "p6", name: "Mineral Sunscreen", price: "$34.00", imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-using-sunscreen_23-2148588725.jpg" },
      ]}
      title="Our Daily Essentials"
      description="Complete your glow-up with our curated collection of essential skin care products."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Alice M.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-fitness-girl-sportswear-touches-her-face-with-eyes-closed-meditates-relaxed_1258-183252.jpg" },
        { id: "2", name: "Brian K.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-beauty-portrait_23-2149400943.jpg" },
        { id: "3", name: "Chloe R.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-sitting-outdoor-cafe_1262-5818.jpg" },
        { id: "4", name: "David L.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-shirtless-man-against-white-backdrop_23-2148213424.jpg" },
        { id: "5", name: "Elena S.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-making-home-comfortable_23-2149092117.jpg" },
      ]}
      cardTitle="Loved by Thousands"
      cardTag="Testimonials"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Vogue",        "Harper's Bazaar",        "Allure",        "Elle",        "Glamour",        "Cosmopolitan",        "Marie Claire"]}
      title="Featured In"
      description="Recognized by industry leaders for our commitment to quality and transparency."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Are these safe for sensitive skin?", content: "Yes, all our formulas are non-irritating and dermatologist tested." },
        { id: "f2", title: "How long until I see results?", content: "Most users see visible improvement in radiance within 4 weeks." },
        { id: "f3", title: "Can I return the product?", content: "We offer a 30-day money-back guarantee if you are not fully satisfied." },
      ]}
      title="Frequently Asked"
      description="Have questions? We have answers to help you find the best care for your routine."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Ready to transform your skin routine? Reach out for personalized advice."
      buttons={[{ text: "Contact Us", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Shop",          items: [
            { label: "Serums", href: "#" },
            { label: "Creams", href: "#" },
          ],
        },
        {
          title: "Support",          items: [
            { label: "FAQ", href: "#" },
            { label: "Returns", href: "#" },
          ],
        },
      ]}
      bottomLeftText="© 2024 Lumina Skin"
      bottomRightText="Privacy Policy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
