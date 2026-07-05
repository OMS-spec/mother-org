import Hero from '../components/Hero.jsx'
import CampaignStory from '../components/CampaignStory.jsx'
import FeatureBanner from '../components/FeatureBanner.jsx'
import CollectionShowcase from '../components/CollectionShowcase.jsx'
import ArchivePreview from '../components/ArchivePreview.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <CampaignStory />
      <FeatureBanner />
      <CollectionShowcase />
      <ArchivePreview />
    </main>
  )
}
