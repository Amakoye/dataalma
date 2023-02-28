import { StaticImageData } from "next/image";
import AiImage from "../../../assets/Ai.png";
import AnalyticsImage from "../../../assets/Analytics.png";
import ApplicationdevImage from "../../../assets/Applicationdev.png";
import ConsultingImage from "../../../assets/Consulting.png";
import DatabasedevImage from "../../../assets/Databasedev.png";
import ResearchImage from "../../../assets/Research.png";

const services: Service[] = [
  {
    title: "Digital privacy and protection",
    image: AnalyticsImage,
    paragraphs: [
      "Data Alma is a specialized cybersecurity firm that provides privacy and digital security solutions to marginalized and minority communities. We identify and mitigate cyber threats that disproportionately affect marginalized communities.",
      `Our Services include: \n• Privacy and security assessments \n• Digital security training \n• Incidence Response.`,
      "Our team also provides education and awareness programs and works closely with community based organizations (CBOs), Non-government Organizations (NGOs) and other groups that work in the Human Rights field to provide capacity-building programs and resources.",
      `We are committed to ensuring that everyone enjoys their right to privacy and security online and that marginalized communities have the necessary resources and support to stay safe and secure online.`,
    ],
  },
  {
    title: "Cyber security consultancy",
    image: ConsultingImage,

    paragraphs: [
      "We offer Cyber security Consultancy services to all Human rights activists and defenders. Our services are not limited to risk assessments, penetration testing, incident response and compliance consulting.",
      "We provide practical, cost-effective solutions to mitigate identified risks and help clients maintain compliance with industry regulations.",
      `Our experienced team stays up-to-date with the latest industry trends and threats to ensure our clients’ security measures are effective and in line with industry best practices. Contact us to learn more.`,
    ],
  },
  {
    title: "Digital security training",
    image: ApplicationdevImage,
    paragraphs: [
      "We specialize in providing cybersecurity services and training to protect businesses from cyber threats.",
      "Our team of experts is experienced in identifying and mitigating various forms of cyberattacks.",
      "We offer services such as threat management, incident response, penetration testing, compliance consulting, and comprehensive training programs to educate staff on maintaining a secure network. Contact us to learn more.",
    ],
  },
  {
    title: "Data privacy services",
    image: DatabasedevImage,
    paragraphs: [
      "Data Alma provides privacy and security services, including ISMS implementation and privacy consulting.",
      "Our team of experts is experienced in identifying and mitigating risks and achieving compliance with regulatory requirements.",
      "We offer customized solutions, including risk assessments, gap analysis, policy development, and implementation support. Contact us to learn more.",
    ],
  },
  {
    title: "Cyber Security solutions using AI",
    image: AiImage,
    paragraphs: [
      "Data Alma uses artificial intelligence (AI) and machine learning (ML) to provide advanced cybersecurity services to businesses of all sizes. Our team of experts is experienced in the field of cybersecurity and dedicated to helping organizations stay ahead of the constantly evolving threat landscape.",
      "Our AI-based solutions provide a proactive approach to cybersecurity by detecting and responding to threats in real time, identifying even the most sophisticated cyber-attacks. Contact us to learn more about our advanced threat detection and incident response capabilities.",
    ],
  },
  {
    title: "Technology research",
    image: ResearchImage,
    paragraphs: [
      "We offer cutting-edge research services related to cybersecurity and artificial intelligence (AI) to help organizations stay ahead of the latest threats and advancements.",
      "We conduct a wide range of research services, including threat intelligence, vulnerability assessments, and market analysis.",
      "At Data Alma, we tailor our research services to meet each client's specific requirements and works closely with them to provide deep insights and informed decisions about their security strategies and investments. Contact us today to learn more about ourresearch services and how we can benefit your organization.",
    ],
  },
];

type Service = {
  title: string;
  image: StaticImageData;
  paragraphs: string[];
  lists?: string[];
  link?: HTMLAnchorElement;
};

export { services };
