import { Scale } from 'lucide-react';
import ArticlePage from '@/components/ArticlePage';

export default function EquitableEarthenomics() {
  return (
    <ArticlePage
      eyebrow="Pillar Three"
      title="Equitable Earthenomics"
      subtitle="Profitability aligned with regeneration — economies that measure success by the health of the whole."
      icon={Scale}
      iconColor="text-amber-400"
      sections={[
        {
          heading: 'Core Idea',
          paragraphs: [
            'Equitable Earthenomics is an economic framework in which profitability and regeneration are not in tension — they are the same thing. Success is measured not by extraction but by the capacity of living systems to thrive over time.',
            'It replaces the logic of infinite growth on a finite planet with the logic of regenerative circulation: economies that build soil, restore ecosystems, and distribute wealth equitably while remaining profitable.',
          ],
          bullets: [
            'Regeneration as the primary economic indicator',
            'Wealth measured in living capital, not just financial capital',
            'Equity as a structural feature, not an afterthought',
          ],
        },
        {
          heading: 'Key Points',
          paragraphs: [
            'Equitable Earthenomics draws on regenerative economics, doughnut economics, commons-based peer production, and indigenous economic traditions to build a coherent alternative to extractive capitalism.',
          ],
          bullets: [
            'Triple bottom line expanded to quadruple: financial, social, ecological, and intergenerational',
            'Regenerative agriculture and circular material flows as economic engines',
            'Distributed ownership models: cooperatives, commons trusts, stakeholder governance',
            'Internalized externalities: the cost of ecological harm is borne by the harmer, not the commons',
            'Indigenous economic wisdom: reciprocity, gift economies, and relational wealth',
            'New metrics: Genuine Progress Indicator, living systems health indices, intergenerational equity audits',
          ],
        },
        {
          heading: 'Why It Matters',
          paragraphs: [
            'The current economic system is the most powerful machine on Earth — and it is pointed at the destruction of the systems that sustain it. Retiring it is not enough; we must build its replacement, and that replacement must be profitable enough to outcompete extraction.',
            'Equitable Earthenomics is not anti-business. It is pro-business in the deepest sense: businesses that regenerate the conditions for their own existence are more resilient, more innovative, and more valuable over time than those that extract and move on.',
          ],
        },
        {
          heading: 'Closing Statement',
          paragraphs: [
            'An economy that measures its success by the health of living systems does not sacrifice prosperity — it redefines it. Equitable Earthenomics is the economic architecture of a civilization that has chosen to survive.',
          ],
        },
      ]}
      closingStatement="When regeneration becomes the measure of wealth, the economy becomes the engine of life — not its adversary."
    />
  );
}
