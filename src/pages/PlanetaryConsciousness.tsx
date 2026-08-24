import { Globe2 } from 'lucide-react';
import ArticlePage from '@/components/ArticlePage';

export default function PlanetaryConsciousness() {
  return (
    <ArticlePage
      eyebrow="Pillar One"
      title="Planetary Consciousness"
      subtitle="Identity beyond individualism — recognizing ourselves as part of a living, interconnected whole."
      icon={Globe2}
      iconColor="text-emerald-400"
      sections={[
        {
          heading: 'Core Idea',
          paragraphs: [
            'Planetary Consciousness is the radical expansion of identity from the individual to the planetary. It asks us to recognize that we are not separate from the biosphere — we are the biosphere, briefly organized into human form.',
            'This is not merely a philosophical stance. It is an operational framework for decision-making at every scale, from personal consumption to global governance. When identity extends to the planet, harm to ecosystems becomes self-harm, and regeneration becomes self-care.',
          ],
          bullets: [
            'Identity scales from "me" to "we" to "all of life"',
            'Decisions are weighed against their impact on the whole biosphere',
            'The concept of "ecozen" replaces "citizen" — a being whose primary allegiance is to the living Earth',
          ],
        },
        {
          heading: 'Key Points',
          paragraphs: [
            'Planetary Consciousness reframes the relationship between self and world. It draws on indigenous wisdom traditions that have always understood the interconnectedness of all life, and brings that understanding into dialogue with modern systems thinking, neuroscience, and ecology.',
          ],
          bullets: [
            'Indigenous cosmologies as foundational frameworks, not supplementary perspectives',
            'Neuroplasticity as evidence that consciousness itself can evolve',
            'Systems thinking as the cognitive infrastructure for planetary-scale decisions',
            'From anthropocentrism to ecocentrism: a shift in default orientation',
            'The "ecozenship" concept: rights and responsibilities rooted in the Earth community',
          ],
        },
        {
          heading: 'Why It Matters',
          paragraphs: [
            'The polycrisis we face — climate breakdown, biodiversity collapse, social fragmentation — is fundamentally a crisis of identity. We act as if we were separate from nature because we perceive ourselves as separate. Change the perception, and the actions follow.',
            'Planetary Consciousness is not an abstraction. It is the prerequisite for the coordinated, rapid, and equitable response that the scale of our challenges demands. Without it, every policy is a patch; with it, every action becomes coherent.',
          ],
        },
        {
          heading: 'Closing Statement',
          paragraphs: [
            'Planetary Consciousness is not a destination but a continuous practice — an ongoing evolution of awareness that matches the evolution of our challenges. It is the cognitive revolution that makes all other revolutions possible.',
          ],
        },
      ]}
      closingStatement="When we see the planet as self, every act of care becomes an act of survival — and every act of destruction becomes unthinkable."
    />
  );
}
