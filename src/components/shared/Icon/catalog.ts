import {
  Home,
  Search,
  CircleUser,
  Settings,
  Heart,
  Play,
  Clock2,
  Pause,
  Volume2,
  VolumeX,
  SquarePen,
  Check,
} from 'lucide-react-native';

export const IconCatalog = {
  Home: Home,
  Search: Search,
  Profile: CircleUser,
  Settings: Settings,
  Play: Play,
  Like: Heart,
  WatchLater: Clock2,
  Pause: Pause,
  VolumeLoud: Volume2,
  VolumeMuted: VolumeX,
  Edit: SquarePen,
  Check: Check,
};

export type TIconName = keyof typeof IconCatalog;