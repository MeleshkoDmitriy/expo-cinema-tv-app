import { theme } from '@/styles';
import { IconCatalog, TIconName } from './catalog';
export * from './catalog';

interface IconProps {
  icon: TIconName;
  size?: number;
  color?: string;
}

export const Icon = ({
  icon,
  size = theme.sizes.menu.icon,
  color = theme.colors.background.white,
}: IconProps) => {
  const IconComponent = IconCatalog[icon];

  return (
    <IconComponent
      size={size}
      color={color}
      {...({ color } as any)}
      strokeWidth={3}
    />
  );
};
