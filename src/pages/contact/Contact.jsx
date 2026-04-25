import ContactForm from '../spa/5_Contact';
import { uiStyles } from '../../style';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-primary-dark pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            GET IN TOUCH
          </span>
          <h1 className={`${uiStyles.sectionHeading} text-[36px] sm:text-[48px] md:text-[56px]`}>
            Book a working session with our team.
          </h1>
          <p className={`${uiStyles.sectionSubheading} mx-auto text-center`}>
            Bring a project or region you're exploring — we will walk through how DepoDart would approach it.
          </p>
        </div>

        <div className="mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
