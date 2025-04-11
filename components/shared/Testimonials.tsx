import { testimonials } from "@/lib/data";
import BasicGrid from "@/components/layout/BasicGrid";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  return (
    <div className='smaller-section'>
      <BasicGrid>
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Card
            key={testimonial.clientName}
            primary={false}
            even={index % 2 == 0}
          >
            <h4>{testimonial.clientName}</h4>
            <p className='paragraph-spaced'>
              {testimonial.review.slice(0, 300)}
            </p>
          </Card>
        ))}
      </BasicGrid>
    </div>
  );
}
