import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div className="flex flex-col justify-around items-center p-6">
      <Card
        title="D2C Digital Advertising"
        description="Our media buying team designs high-converting funnels and paid social ad strategies tailored to your brand. We optimize and scale profitable campaigns, so you can focus on your business while we handle the rest."
      />
      <Card
        title="Shopify Website Creation"
        description="We don't just build pretty websites; we build websites that convert. Our web development magicians craft high-converting Shopify websites and landing pages that maximize your return on investment."
      />
      <Card
        title="Multi-Channel Marketing"
        description="From email to SMS to WhatsApp marketing, our backend advertising team crafts persuasive sequences that drive conversions and increase customer lifetime value."
      />
    </div>
  );
};

export default CardContainer;
