import { Layers } from 'lucide-react';
import ArticlePage from '@/components/ArticlePage';

export default function SymbioticDesign() {
  return (
    <ArticlePage
      eyebrow="Pillar Two"
      title="Symbiotic Design"
      subtitle="Commons + biosphere as decision stakeholders — designing systems where all forms of life have a seat at the table."
      icon={Layers}
      iconColor="text-sky-400"
      sections={[
        {
          heading: 'Core Idea',
          paragraphs: [
            'Symbiotic Design is the practice of creating systems — products, institutions, infrastructures, economies — in which the commons and the biosphere are treated as stakeholders with standing in every decision.',
            'This means moving beyond human-centered design to life-centered design. It means asking not only "What do humans need?" but "What does the whole living system need to thrive?" and designing toward that answer.',
          ],
          bullets: [
            'The biosphere is a stakeholder, not a resource',
            'The commons (air, water, soil, knowledge) have inherent rights',
            'Design decisions must account for downstream effects across all living systems',
          ],
        },
        {
          heading: 'Key Points',
          paragraphs: [
            'Symbiotic Design borrows from biomimicry, participatory design, and commons governance, but extends them with a radical premise: non-human stakeholders must be represented in decision-making processes.',
          ],
          bullets: [
            'Biomimicry as a design methodology: nature as model, measure, and mentor',
            'Legal rights for ecosystems — rivers, forests, soils — as operational stakeholders',
            'Participatory frameworks that include ecological "proxies" in governance',
            'Circular and regenerative material flows as design defaults',
            'Technology evaluated by its effect on symbiotic relationships, not just human convenience',
          ],
        },
        {
          heading: 'Why It Matters',
          paragraphs: [
            'Every object, institution, and infrastructure we build embeds assumptions about what matters. For centuries, those assumptions have placed human convenience above ecological integrity. Symbiotic Design flips that hierarchy.',
            'When the biosphere has a seat at the table, the outputs of design change. Supply chains become shorter and circular. Energy systems become decentralized and renewable. Institutions become accountable to the living systems they affect, not just the shareholders they serve.',
          ],
        },
        {
          heading: 'Closing Statement',
          paragraphs: [
            'Symbiotic Design is how we translate planetary consciousness into the physical and institutional world. It is the craft layer of the BioSovereign vision — the daily practice of building things that give back more than they take.',
          ],
        },
      ]}
      closingStatement="When the biosphere has a seat at the table, every design decision becomes an act of negotiation — not extraction."
    />
  );
}
