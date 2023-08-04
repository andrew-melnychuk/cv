import { FunctionComponent, SVGProps } from 'react';
import { ReactComponent as CarbonLogo } from '../../../resources/carbon.svg';
import { ReactComponent as CSSLogo } from '../../../resources/css.svg';
import { ReactComponent as DockerLogo } from '../../../resources/docker.svg';
import { ReactComponent as FigmaLogo } from '../../../resources/figma.svg';
import { ReactComponent as GitLogo } from '../../../resources/git.svg';
import { ReactComponent as HTMLLogo } from '../../../resources/html.svg';
import { ReactComponent as JSLogo } from '../../../resources/js.svg';
import { ReactComponent as MUILogo } from '../../../resources/mui.svg';
import { ReactComponent as NodeLogo } from '../../../resources/node.svg';
import { ReactComponent as ReactLogo } from '../../../resources/react.svg';
import { ReactComponent as ReduxLogo } from '../../../resources/redux.svg';
import { ReactComponent as SASSLogo } from '../../../resources/sass.svg';
import { ReactComponent as SonarLogo } from '../../../resources/sonar.svg';
import { ReactComponent as TSLogo } from '../../../resources/ts.svg';
import { ReactComponent as WebpackLogo } from '../../../resources/webpack.svg';
import { Section } from '../common';

const SkillLabelMap = {
  JS: {
    logo: JSLogo,
    label: 'JavaScript',
  },
  TS: {
    logo: TSLogo,
    label: 'TypeScript',
  },
  REACT: {
    logo: ReactLogo,
    label: 'React',
  },
  REDUX: {
    logo: ReduxLogo,
    label: 'Redux',
  },
  NODE: {
    logo: NodeLogo,
    label: 'Node',
  },
  MUI: {
    logo: MUILogo,
    label: 'Material UI',
  },
  CARBON: {
    logo: CarbonLogo,
    label: 'Carbon Design System',
  },
  DOCKER: {
    logo: DockerLogo,
    label: 'Docker',
  },
  WEBPACK: {
    logo: WebpackLogo,
    label: 'Webpack',
  },
  SONAR: {
    logo: SonarLogo,
    label: 'Sonar',
  },
  SASS: {
    logo: SASSLogo,
    label: 'SASS',
  },
  CSS: {
    logo: CSSLogo,
    label: 'CSS',
  },
  HTML: {
    logo: HTMLLogo,
    label: 'HTML',
  },
  GIT: {
    logo: GitLogo,
    label: 'Git',
  },
  FIGMA: {
    logo: FigmaLogo,
    label: 'Figma',
  },
};

const Skill = ({
  Logo,
  label,
}: {
  Logo: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <Logo className="logo-icon" />
      <p className="text-center">{label}</p>
    </div>
  );
};

export const Skills = () => {
  return (
    <Section title="skills">
      <div className="grid grid-cols-3 gap-8 a4:grid-cols-5">
        {Object.entries(SkillLabelMap).map(([key, value]) => (
          <Skill key={key} Logo={value.logo} label={value.label} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
