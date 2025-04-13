export interface Tab {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
  ariaLabel: string;
}
