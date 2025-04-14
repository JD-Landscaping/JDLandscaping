import React from "react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <Section>
      <Container>
        <div className='flex flex-col xl:flex-row justify-between text-center xl:text-left'>
          <Container>
            <h3 className=''>
              I&apos;m Jorge, a landscaper based in Minnesota, US.
            </h3>

            <p className='paragraph-spaced pb-10 text-center xl:text-left'>
              J&D Landscaping provides reliable and professional landscaping
              services to keep your outdoor space looking its best. From lawn
              care to hardscaping, we focus on quality work and practical
              solutions that fit your needs. Whether it&apos;s routine
              maintenance or a new project, we&apos;re here to help.
            </p>

            <Button
              label='Find Out More'
              href='/about'
            />
          </Container>

          <Section>
            <Container>
              <div className='grid gap-2 justify-center'>
                <div className='flex gap-2'>
                  <Card primary={false}>
                    <div className=''>
                      <Counter
                        end={10}
                        duration={4}
                        suffix='+'
                      />
                      <p className='subtitle-text'>Years of Experience</p>
                    </div>
                  </Card>
                  <Card primary={false}>
                    <div className=''>
                      <Counter
                        end={100}
                        duration={4}
                        suffix='+'
                      />
                      <p className='subtitle-text'>Completed Projects</p>
                    </div>
                  </Card>
                </div>
                <Card primary={false}>
                  <div>
                    <Counter
                      end={100}
                      duration={3}
                      suffix='%'
                    />
                    <p className='subtitle-text'>Client Satisfaction</p>
                  </div>
                </Card>
              </div>
            </Container>
          </Section>
        </div>
      </Container>
    </Section>
  );
}
