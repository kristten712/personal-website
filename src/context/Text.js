// icons 
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import BarChartIcon from '@material-ui/icons/BarChart'
import SchoolIcon from '@material-ui/icons/School'

// project images
import TypingHeaderImage from '../images/typing-header.png'

const iconColor = 'white'

export const bio = 
    "Hey, thanks for stopping by. I'm Kristen and an Associate Technical Product Manager at Cengage. Outside of work, I like to keep busy with my Medium Blog, YouTube channel, and React projects. See what I've been up to below."

export const workExperience = [
    {
        position: 'Associate Technical Product Manager',
        company: 'Cengage',
        time: 'May 2020 - Present',
        description: `I am one of two TPMs responsible for Cengage's platforms for STEM disciplines. We serve ~2M students and instructors every year.`,
        icon: <LaptopMacIcon style={{ color: iconColor }} />
    },
    {
        position: 'Co-founder',
        company: 'StrattyX (Y Combinator W20)',
        time: 'Jan 2019 - March 2020',
        description: `I co-founded a fintech startup where we built a no-code tool for retail investors to create trading bots for their portfolio. I led our marketing and fundraising efforts.`,
        icon: <BarChartIcon style={{ color: iconColor }} />
    },
    {
        position: 'Investment Banking Summer Analyst, Healthcare M&A',
        company: 'Lazard',
        time: 'Jun 2019 - Aug 2019',
        description: `I ran analyses to help our biotech clients identify promising acquisition targets and built a broker-based financial model from scratch.`,
        icon: <AttachMoneyIcon style={{ color: iconColor }} />
    }
]

export const education = {
    degree: 'A.B. in Computational Neuroscience',
    university: 'Harvard University',
    coursework: 'My favorite classes: Startup R&D (ES 95r), Computer Science (CS 50, 51), Statistics (Stat 110), Multivariable Calculus (Math21A), Linear Algebra (Math 19B), Computational Neuroscience & Models of the Visual Cortex (Neuro 120, 130, 1401)',
    activities: 'Harvard Innovation Lab Venture fellow, Harvard-Radcliffe Orchestra principal flutist, MCB80x Course Assistant',
    icon: <SchoolIcon style={{ color: "white" }} />
}

export const projects = [
    // {
    //   title: 'React Form Validation',
    //   languages: 'React with Material UI',
    //   description: 'Descripition here',
    //   url: 'https://github.com/kristten712/',
    //   demo: 'https://github.com/kristten712/',
    // },
    {
        title: 'React Form Validation',
        languages: 'React with Material UI',
        description: 'Coming soon!',
        url: 'https://github.com/kristten712/',
        demo: 'https://github.com/kristten712/',
      },
    {
      title: 'Classy Minimal B&W Header',
      languages: 'React with Material UI',
      description: `Potential header for a personal website with typing action and automatic resize for the window of a visitors' screen`,
      url: 'https://github.com/kristten712//typing-component',
      demo: 'https://kristten712.github.io/typing-component/',
      image: TypingHeaderImage
    },
  ]