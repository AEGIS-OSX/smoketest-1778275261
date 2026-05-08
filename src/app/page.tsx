type ProjectImageProps = {
  id: string;
  className?: string;
};

function ProjectImage({ id, className }: ProjectImageProps) {
  return (
    <img
      src={`/images/${id}.jpg`}
      alt="Flexible scheduling"
      className={className}
    />
  );
}

export default function Home() {
  return (
    <main>
      <section className="feature-row feature-row-one">
        <div className="feature-media-frame">
          <ProjectImage id="feature_1" className="feature-image" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Flexible scheduling</p>
          <h3 className="feature-title">Flexible scheduling</h3>
          <p className="feature-body">
            Schedule a walk for today, tonight, or every weekday. Choose one-off walks or set a recurring slot that matches your commute.
          </p>
        </div>
      </section>
    </main>
  );
}
