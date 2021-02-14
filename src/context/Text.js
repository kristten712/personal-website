// icons 
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import BarChartIcon from '@material-ui/icons/BarChart';
import SchoolIcon from '@material-ui/icons/School';

const iconColor = 'white'

export const bio = 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum leo. Curabitur fermentum massa nec ante laoreet fermentum. Nulla interdum non turpis sed luctus. Vivamus dapibus non nunc ut aliquam. Suspendisse tincidunt tincidunt porta. Donec interdum nulla ac posuere interdum. "

export const workExperience = [
    {
        position: 'Associate Technical Product Manager',
        company: 'Cengage',
        time: 'May 2020 - Present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum leo. Curabitur fermentum massa nec ante laoreet fermentum. Nulla interdum non turpis sed luctus. Vivamus dapibus non nunc ut aliquam. Suspendisse tincidunt tincidunt porta. Donec interdum nulla ac posuere interdum. ',
        icon: <LaptopMacIcon style={{ color: iconColor }} />
    },
    {
        position: 'Co-founder',
        company: 'StrattyX (YC W20)',
        time: 'Jan 2019 - March 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum leo. Curabitur fermentum massa nec ante laoreet fermentum. Nulla interdum non turpis sed luctus. Vivamus dapibus non nunc ut aliquam. Suspendisse tincidunt tincidunt porta. Donec interdum nulla ac posuere interdum. ',
        icon: <BarChartIcon style={{ color: iconColor }} />
    },
    {
        position: 'Investment Banking SUmmer Analyst, Healthcare M&A',
        company: 'Lazard',
        time: 'Jun 2019 - Aug 2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum leo. Curabitur fermentum massa nec ante laoreet fermentum. Nulla interdum non turpis sed luctus. Vivamus dapibus non nunc ut aliquam. Suspendisse tincidunt tincidunt porta. Donec interdum nulla ac posuere interdum. ',
        icon: <AttachMoneyIcon style={{ color: iconColor }} />
    }
]

export const education = {
    degree: 'A.B. in Computational Neuroscience',
    university: 'Harvard University',
    coursework: 'Startup R&D (ES 95r), Computer Science (CS 50, 51), Statistics (Stat 110), Multivariable Calculus (Math21A), Linear Algebra (Mah 19B), Computational Neuroscience & Models of the Visual Cortex (Neuro 120, 130, 1401)',
    activities: 'Harvard Innovation Lab Venture fellow, Harvard-Radcliffe Orchestra principal flutist, MCB80x Course Assistant',
    icon: <SchoolIcon style={{ color: "white" }} />
}