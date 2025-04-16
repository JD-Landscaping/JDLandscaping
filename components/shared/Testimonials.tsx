import { testimonials } from "@/lib/data";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  return (
    <div className='smaller-section'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
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
      </div>
    </div>
  );
}
