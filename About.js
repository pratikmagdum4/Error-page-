import React from 'react';
import './About.css';
import CoFounder from '../../Assets/Co-Founder.jpg';
import Founder from '../../Assets/Founder.jpg'
import CEO from'../../Assets/CEO.jpg'
import InstagramIcon from '../../Assets/Icons/ColorInstagram.png';
import TwitterIcon from '../../Assets/Icons/ColorTwitter.png';
import LinkedInIcon from '../../Assets/Icons/Colorlinkedin.png';
import email from '../../Assets/Icons/email.jpeg';

function About() {
    const details = {
        whatWeDo: "The Learning Library offers a diverse range of extracurricular activities led by expert instructors. Through our user-friendly platform, we connect schools, students, and parents, enriching education beyond the traditional curriculum. Our services encompass sports programs, arts workshops, cultural experiences, and STEM courses, fostering holistic development and a passion for learning. Partnering with schools, we provide easy access to high-quality activities, empowering students to grow personally and academically. Our commitment lies in seamlessly integrating enriching experiences into young learners' lives, transforming education for a brighter future.",
        founders: [
            {
                title: "FOUNDER & CEO",
                image: Founder,
                name: "Mayank Vatsh",
                about: "I'm Mayank Vatsh, the Founder and CEO of Brainwaves Learning Library. As a software engineer with over 5 years of experience, I embarked on a journey to redefine education through Brainwaves, not just as a business but as a mission.\n" +
                    "\n" +
                    "At Brainwaves, we believe in holistic student development aligned with the new education policy. Our EdTech startup goes beyond traditional education, offering a comprehensive range of extracurricular activities, sports competitions, and a uniquely designed syllabus for home tuition that fosters growth in the comfort of one's home.\n" +
                    "\n" +
                    "We are committed to transforming education in Bihar, providing not just a learning platform but a well-managed school at home. Our services extend globally, offering career support and assistance in higher studies admissions in various countries, including India, USA, Canada, England, Australia, Russia, Ukraine, UAE, and more, with partnerships with 240+ universities.\n" +
                    "\n" +
                    "What sets us apart is our dedication to personal and soft skills development. We go beyond textbooks, preparing our students for success in every aspect of life. Moreover, our tie-ups with 190+ corporate companies ensure that our courses pave the way for promising career opportunities in engineering, BCA, BBA, MBA, MCA, and more.\n" +
                    "\n" +
                    "Join us on this transformative journey as we make education not just a means of knowledge transfer but a pathway to a brighter, more holistic future. Thank you for being part of the Brainwaves family.\n",
                socialMedia: [
                    { icon: InstagramIcon, link: 'https://www.instagram.com/mayank.vatsh?igsh=MWw5czZ0dmhydGpuYw/' },
                    { icon: TwitterIcon, link: 'https://twitter.com/mayankvatsh' },
                    { icon: LinkedInIcon, link: 'https://www.linkedin.com/in/mayank-vatsh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                    {icon: email, link:'mailto:ceo.brainwaveslearninglibrary@gmail.com'}
                ],
            },
            {
                title: "Co-founder Prof.",
                image: CoFounder,
                name: "Prof. (Dr.) Ravi Nath K",
                about: "I extend a warm welcome to you on behalf of the entire Brainwaves family. It's a pleasure to connect with you through this platform and share the essence of our mission.\n" +
                    "\n" +
                    "When I reflect on the journey of Brainwaves Learning Library, one phrase resonates profoundly - 'Brainwaves Learning Library is not a business; it's a mission.' This mission began with a vision to create something unique, not just in size but in impact. I had a dream, one that believed in the power of the right team, earnest efforts, and a commitment to holistic development, in alignment with the essence of the New Education Policy 2020.\n" +
                    "\n" +
                    "At Brainwaves, we aim to provide applicable yet affordable solutions to schools, nurturing students with a focus on holistic development. Our approach is rooted in fostering innovation and flexibility, allowing our team to realize their fullest potentials. Together, with our Co-founders and stakeholders, I am confident that we will make this dream a reality.\n" +
                    "\n" +
                    "Our vision for the future is clear - to be the best, the first, and the only choice for our customers. We strive for top-quality services and products, keeping pace with global developments while remaining true to our core values. Our commitment to honest, ethical, and professional dealings extends to our customers, employees, vendors, subcontractors, clients, banks, agencies, and all stakeholders.\n" +
                    "\n" +
                    "As a veteran and Human Resource Professional, I bring decades of experience from esteemed Defense Services and the education sector. My journey involves founding companies, holding senior-level positions, and imparting people management skills. I take pride in building winning teams that break barriers and surmount limitations, meeting operational goals efficiently and effectively.\n" +
                    "\n" +
                    "With the support of our valued customers and the dedication of our team, we have achieved significant milestones. I extend my gratitude to all for their committed efforts, and I am confident that we will continue to exceed expectations, deliver value, and expand our footprint into new domains and geographies.\n" +
                    "\n" +
                    "Thank you for being part of this incredible journey.\n",
                socialMedia: [
                    { icon: InstagramIcon, link: 'https://www.instagram.com/ravinathk/' },
                    { icon: TwitterIcon, link: 'https://twitter.com/ravinathk' },
                    { icon: LinkedInIcon, link: 'https://www.linkedin.com/in/prof-dr-ravi-nath-k-78a60a5a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                    {icon: email, link:'mailto:ravinathkumar123@gmail.com'}
                ],
            },
            {
                name: "Shivangi Mishra",
                image: CEO,
                about: "I am thrilled to welcome you to our innovative and dynamic learning platform. "+"\n"+"As the Chief Technology Officer (CTO) at Brainwaves, I take immense pride in spearheading our technological initiatives and ensuring that our learning solutions harness the power of cutting-edge technology to empower learners of all ages.",
                socialMedia: [
                    { icon: InstagramIcon, link: 'https://www.instagram.com/shivangi_m_14?igsh=M3F6Ym85enlmdg==' },
                    { icon: TwitterIcon, link: 'https://twitter.com/shivangimishra' },
                    { icon: LinkedInIcon, link: 'https://www.linkedin.com/in/shivangi-mishra-07a474167' },
                    {icon: email, link:'mailto:shivangimishra1486@gmail.com'}
                ],
            }
        ]
    };

    const renderFounderCard = (founder) => {
        return (
            <div className="founder-card">
                <div className="founder-content">
                    <div style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                        <h3 style={{color: '#e64918'}}>{founder.title}</h3>
                    </div>
                    <div className="founder-details">
                        <h3 className="founder-name">{founder.name}</h3>
                        <p className="founder-vision">{founder.about}</p>
                        <div className="founder-social-media">
                            {founder.socialMedia.map((socialMedia) => (
                                <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">
                                    <img src={socialMedia.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="founder-image">
                    <img src={founder.image} alt={founder.name} />
                </div>
            </div>
        );
    };

    const renderFoundersSection = () => {
        return (
            <div className="founders-section">
                <h2 className="section-title">Meet the Founders</h2>
                <div className="founders-container">
                    {details.founders.map((founder) => renderFounderCard(founder))}
                </div>
            </div>
        );
    };

    return (
        <div className="about-page">
            <div className="about-section">
                <h1 className="page-title">About Us</h1>
                <p className="page-description">{details.whatWeDo}</p>
            </div>
            {renderFoundersSection()}
        </div>
    );
}

export default About;
