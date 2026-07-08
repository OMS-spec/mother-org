import { FadeUp, ImageReveal } from './Reveal.jsx'

export default function CampaignStory() {
  return (
    <section className="section">
      <div className="container" style={{ position: 'relative' }}>
        <ImageReveal
          src="/assets/story-01.jpg"
          alt="Full length editorial portrait"
          className="story-img-main"
          style={{ width: '58%', height: '78vh', marginLeft: '4%' }}
        />
        <ImageReveal
          src="/assets/story-02.jpg"
          alt="Detail editorial portrait"
          className="story-img-detail"
          style={{
            width: '34%', height: '52vh', position: 'absolute',
            right: '6%', top: '18%', zIndex: 2,
          }}
        />

        <FadeUp delay={0.2}>
          <h2
            className="section-title story-title"
            style={{
              position: 'relative', marginTop: '-14vh', marginLeft: '2%',
              maxWidth: '80%', zIndex: 3, color: '#000',
              WebkitTextStroke: '0px', mixBlendMode: 'normal',
              backgroundColor: 'transparent',
            }}
          >
            A Deeper Look Inside Our Purpose
          </h2>
        </FadeUp>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10vh', gap: 60, flexWrap: 'wrap' }}>
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Highlights</p>
            <p className="body-copy">
              Education and cultural preservation balanced with direct, tangible
              assistance — from charity to employment support.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Design Philosophy</p>
            <p className="body-copy">
              Ministeria Occulta Mauroum channels the spirit of unity, presenting
              a structure built on law, loyalty, and mutual care.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
